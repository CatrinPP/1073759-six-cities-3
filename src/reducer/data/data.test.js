import MockAdapter from 'axios-mock-adapter';
import {reducer, ActionType, ActionCreator, Operation} from './data';
import {createAPI} from '../../api.js';
import {testOffers, testComments} from '../../test-mocks.js';

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    allOffers: [],
    currentOffer: null,
    commentsList: [],
    offersNearby: [],
  });
});

it(`Reducer should return new offer object by given value`, () => {
  expect(reducer({
    allOffers: [],
    currentOffer: null,
    commentsList: [],
    offersNearby: [],
  }, {
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: testOffers[1],
  })).toEqual({
    currentOffer: testOffers[1],
    allOffers: [],
    commentsList: [],
    offersNearby: [],
  });
});

it(`Reducer should return commentsList by given value`, () => {
  expect(reducer({
    allOffers: [],
    currentOffer: null,
    commentsList: [],
    offersNearby: [],
  }, {
    type: ActionType.GET_COMMENTS,
    payload: testComments,
  })).toEqual({
    currentOffer: null,
    allOffers: [],
    commentsList: testComments,
    offersNearby: [],
  });
});

it(`Reducer should return an array of offers by given value`, () => {
  expect(reducer({
    allOffers: [],
    currentOffer: null,
    commentsList: [],
    offersNearby: [],
  }, {
    type: ActionType.GET_OFFERS_NEARBY,
    payload: testOffers[1].offers,
  })).toEqual({
    currentOffer: null,
    allOffers: [],
    commentsList: [],
    offersNearby: testOffers[1].offers,
  });
});

it(`Reducer should return an array of offers by given value`, () => {
  expect(reducer({
    allOffers: [],
    currentOffer: null,
    commentsList: [],
    offersNearby: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: testOffers,
  })).toEqual({
    currentOffer: null,
    allOffers: testOffers,
    commentsList: [],
    offersNearby: [],
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for getting offer on click returns correct action`, () => {
    expect(ActionCreator.openDetailedOffer(testOffers[1].offers[1])).toEqual({
      type: ActionType.OPEN_DETAILED_OFFER,
      payload: testOffers[1].offers[1]
    });
  });

  it(`Action creator for getting comments on click returns correct action`, () => {
    expect(ActionCreator.getComments(testComments)).toEqual({
      type: ActionType.GET_COMMENTS,
      payload: testComments
    });
  });

  it(`Action creator for getting offers nearby on offer click returns correct action`, () => {
    expect(ActionCreator.getOffersNearby(testOffers[0].offers)).toEqual({
      type: ActionType.GET_OFFERS_NEARBY,
      payload: testOffers[0].offers
    });
  });

  it(`Action creator for getting offers on start returns correct action`, () => {
    expect(ActionCreator.loadOffers(testOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: testOffers
    });
  });
});

describe(`Operations work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /hotels/offer.id/nearby and to /comments`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const dataLoader = Operation.openDetailedOffer(testOffers[0].offers[0]);

    apiMock
      .onGet(`/comments/${testOffers[0].offers[0].id}`)
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
        'date': `2020-02-24T22:52:54.373Z`,
      }])
      .onGet(`/hotels/${testOffers[0].offers[0].id}/nearby`)
      .reply(200, [{
        'bedrooms': 3,
        'city': {
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10
          },
          'name': `Amsterdam`
        },
        'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        'goods': [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        'host': {
          'avatar_url': `img/1.png`,
          'id': 3,
          'is_pro': true,
          'name': `Angelina`
        },
        'id': 1,
        'images': [`img/1.png`, `img/2.png`],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8
        },
        'max_adults': 4,
        'preview_image': `img/1.png`,
        'price': 120,
        'rating': 4.8,
        'title': `Beautiful & luxurious studio at great location`,
        'type': `apartment`
      }, {
        'bedrooms': 1,
        'city': {
          'location': {
            'latitude': 52.370216,
            'longitude': 4.895168,
            'zoom': 10
          },
          'name': `Amsterdam`
        },
        'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        'goods': [`Heating`, `Kitchen`],
        'host': {
          'avatar_url': `img/2.png`,
          'id': 31,
          'is_pro': true,
          'name': `Max`
        },
        'id': 11,
        'images': [`img/3.png`, `img/4.png`],
        'is_favorite': false,
        'is_premium': false,
        'location': {
          'latitude': 52.35514938496378,
          'longitude': 4.673877537499948,
          'zoom': 8
        },
        'max_adults': 2,
        'preview_image': `img/3.png`,
        'price': 50,
        'rating': 4.1,
        'title': `Beautiful & luxurious studio at great location`,
        'type': `room`
      }]);

    return dataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_COMMENTS,
          payload: [{
            'id': 1,
            'user': {
              'name': `Kendall`,
              'avatar': `img/1.png`,
            },
            'rating': 3,
            'text': `What an amazing view!`,
            'date': `2020-02-24T22:52:54.373Z`,
          }],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_OFFERS_NEARBY,
          payload: [{
            'bedrooms': 3,
            'coords': [52.35514938496378, 4.673877537499948],
            'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            'features': [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            'host': {
              'avatar': `img/1.png`,
              'id': 3,
              'isStar': true,
              'name': `Angelina`
            },
            'id': 1,
            'images': [`img/1.png`, `img/2.png`],
            'isPremium': false,
            'guests': 4,
            'previewImage': `img/1.png`,
            'price': 120,
            'rating': 4.8,
            'title': `Beautiful & luxurious studio at great location`,
            'type': `apartment`
          }, {
            'bedrooms': 1,
            'coords': [52.35514938496378, 4.673877537499948],
            'description': `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            'features': [`Heating`, `Kitchen`],
            'host': {
              'avatar': `img/2.png`,
              'id': 31,
              'isStar': true,
              'name': `Max`
            },
            'id': 11,
            'images': [`img/3.png`, `img/4.png`],
            'isPremium': false,
            'guests': 2,
            'previewImage': `img/3.png`,
            'price': 50,
            'rating': 4.1,
            'title': `Beautiful & luxurious studio at great location`,
            'type': `room`
          }]
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.OPEN_DETAILED_OFFER,
          payload: testOffers[0].offers[0],
        });
      });
  });
});
