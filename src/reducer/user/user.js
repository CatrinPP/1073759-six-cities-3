import {AuthorizationStatus} from '../../const.js';
import {extend} from '../../utils.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isSignInRequired: false,
  userName: null,
};

const ActionType = {
  OPEN_SIGN_IN_PAGE: `OPEN_SIGN_IN_PAGE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SAVE_USERNAME: `SAVE_USERNAME`,
};

const ActionCreator = {
  openSignInPage: (status) => {
    return {
      type: ActionType.OPEN_SIGN_IN_PAGE,
      payload: status,
    };
  },

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  saveUserName: (name) => {
    return {
      type: ActionType.SAVE_USERNAME,
      payload: name,
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.saveUserName(response.data.email));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.saveUserName(authData.login));
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    case ActionType.OPEN_SIGN_IN_PAGE:
      return extend(state, {
        isSignInRequired: action.payload,
      });

    case ActionType.SAVE_USERNAME:
      return extend(state, {
        userName: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
