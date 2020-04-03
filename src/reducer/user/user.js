import {AuthorizationStatus, Error} from '../../const.js';
import {extend, transformCommentShape} from '../../utils.js';
import {getCurrentOffer} from '../data/selectors.js';
import {ActionCreator as DataActionCreator} from '../data/data.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.AUTH,
  favorites: [],
  isSignInRequired: false,
  userName: null,
};

const ActionType = {
  GET_FAVORITES: `GET_FAVORITES`,
  OPEN_SIGN_IN_PAGE: `OPEN_SIGN_IN_PAGE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SAVE_USERNAME: `SAVE_USERNAME`,
};

const ActionCreator = {
  getFavorites: (offers) => ({
    type: ActionType.GET_FAVORITES,
    payload: offers
  }),

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
        if (err.response.status === Error.UNAUTHORIZED) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
        }
      });
  },

  getFavorites: () => (dispatch, getState, api) => {
    return api.get(`favorite`)
      .then((response) => {
        dispatch(ActionCreator.getFavorites(response.data));
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
    })
    .catch((err) => {
      throw err;
    });
  },

  sendComment: (formData, blockForm, onError) => (dispatch, getState, api) => {
    const state = getState();
    const offerId = getCurrentOffer(state).id;
    blockForm();
    return api.post(`/comments/${offerId}`, {
      comment: formData.comment,
      rating: formData.rating,
    })
    .then(() => {
      return api.get(`/comments/${offerId}`);
    })
    .then((response) => {
      const transformedComments = response.data.map((it) => transformCommentShape(it));
      dispatch(DataActionCreator.getComments(transformedComments));
    })
    .catch((err) => {
      onError();
      throw err;
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });

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
