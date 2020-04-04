import {reducer, ActionType, ActionCreator, Operation} from './user';
import {ActionType as DataActionType} from '../data/data.js';
import {AuthorizationStatus} from '../../const';
import {createAPI} from '../../api.js';
import MockAdapter from 'axios-mock-adapter';
import NameSpace from '../name-space.js';
import {testOffers} from '../../test-mocks.js';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    favorites: [],
    isSignInRequired: false,
    userName: null,
  });
});

it(`Reducer should change authorization status to opposite`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favorites: [],
    isSignInRequired: false,
    userName: null,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    favorites: [],
    isSignInRequired: false,
    userName: null,
  });
});

it(`Reducer should change isSignInRequired status to opposite`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favorites: [],
    isSignInRequired: false,
    userName: null,
  }, {
    type: ActionType.OPEN_SIGN_IN_PAGE,
    payload: true,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favorites: [],
    isSignInRequired: true,
    userName: null,
  });
});

it(`Reducer should change user name with given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favorites: [],
    isSignInRequired: false,
    userName: null,
  }, {
    type: ActionType.SAVE_USERNAME,
    payload: `Catrin`,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    favorites: [],
    isSignInRequired: false,
    userName: `Catrin`,
  });
});

it(`Reducer should update favorites with given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    favorites: [],
    isSignInRequired: false,
    userName: `Catrin`,
  }, {
    type: ActionType.GET_FAVORITES,
    payload: testOffers,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    favorites: testOffers,
    isSignInRequired: false,
    userName: `Catrin`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing authorization status returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });

  it(`Action creator for changing isSignInRequired status returns correct action`, () => {
    expect(ActionCreator.openSignInPage(true)).toEqual({
      type: ActionType.OPEN_SIGN_IN_PAGE,
      payload: true
    });
  });

  it(`Action creator for setting user name returns correct action`, () => {
    expect(ActionCreator.saveUserName(`Catrin`)).toEqual({
      type: ActionType.SAVE_USERNAME,
      payload: `Catrin`
    });
  });

  it(`Action creator for getting favorites returns correct action`, () => {
    expect(ActionCreator.getFavorites(testOffers)).toEqual({
      type: ActionType.GET_FAVORITES,
      payload: testOffers,
    });
  });
});

const api = createAPI(() => {});

describe(`Operations work correctly`, () => {
  it(`Should make a correct get API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();
    const mockUser = {
      "avatar_url": `img/1.png`,
      "email": `Oliver.conner@gmail.com`,
      "id": 1,
      "is_pro": false,
      "name": `Oliver.conner`
    };

    apiMock
      .onGet(`/login`)
      .reply(200, mockUser);

    return checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SAVE_USERNAME,
          payload: mockUser.email
        });
      });
  });

  it(`Should make a correct post API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mockUser2 = {
      "login": `Oliver.conner@gmail.com`,
      "password": `12345678`
    };
    const login = Operation.login(mockUser2);

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return login(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SAVE_USERNAME,
          payload: mockUser2.login
        });
      });
  });

  it(`Should make a correct API call to comments/offerId`, function () {
    const state = {
      [NameSpace.DATA]: {
        currentId: 10
      },
    };

    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const comment = {
      'id': 2,
      'user': {
        'id': 15,
        'is_pro': false,
        'name': `KendallNew`,
        'avatar_url': `img/1.png`,
      },
      'rating': 3,
      'comment': `My New Comment - What an amazing view!`,
      'date': `2020-02-24T22:52:54.373Z`,
    };
    const commentSender = Operation.sendComment(comment, () => {}, () => {});

    apiMock
      .onPost(`/comments/10`)
      .reply(200, [comment])
      .onGet(`/comments/10`)
      .reply(200, [{
        'id': 1,
        'user': {
          'id': 15,
          'is_pro': false,
          'name': `Kendall`,
          'avatar_url': `img/1.png`,
        },
        'rating': 3,
        'comment': `What an amazing view!`,
        'date': `2020-01-24T22:52:54.373Z`,
      }, comment]);
    return commentSender(dispatch, () => state, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: DataActionType.GET_COMMENTS,
          payload: [{
            'id': 1,
            'user': {
              'name': `Kendall`,
              'avatar': `img/1.png`,
            },
            'rating': 3,
            'text': `What an amazing view!`,
            'date': `2020-01-24T22:52:54.373Z`,
          }, {
            'id': 2,
            'user': {
              'name': `KendallNew`,
              'avatar': `img/1.png`,
            },
            'rating': 3,
            'text': `My New Comment - What an amazing view!`,
            'date': `2020-02-24T22:52:54.373Z`,
          }]
        });
      });
  });

  it(`Should make a correct get API call to /favorite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = Operation.getFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, testOffers);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_FAVORITES,
          payload: testOffers,
        });
      });
  });
});
