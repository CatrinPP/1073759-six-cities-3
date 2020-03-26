import {reducer, ActionType, ActionCreator} from './user';
import {AuthorizationStatus} from '../../const';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignInRequired: false,
    userName: null,
  });
});

it(`Reducer should change authorization status to opposite`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignInRequired: false,
    userName: null,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    isSignInRequired: false,
    userName: null,
  });
});

it(`Reducer should change isSignInRequired status to opposite`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignInRequired: false,
    userName: null,
  }, {
    type: ActionType.OPEN_SIGN_IN_PAGE,
    payload: true,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignInRequired: true,
    userName: null,
  });
});

it(`Reducer should change user name with given value`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    isSignInRequired: false,
    userName: null,
  }, {
    type: ActionType.SAVE_USERNAME,
    payload: `Catrin`,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
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
});
