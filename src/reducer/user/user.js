import {AuthorizationStatus} from '../../const.js';
import {extend, transformCommentShape} from '../../utils.js';
import {getCurrentOffer} from '../data/selectors.js';
import {ActionCreator as DataActionCreator} from '../data/data.js';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isReviewFormBlocked: false,
  isSignInRequired: false,
  userName: null,
};

const ActionType = {
  BLOCK_REVIEW_FORM: `BLOCK_REVIEW_FORM`,
  OPEN_SIGN_IN_PAGE: `OPEN_SIGN_IN_PAGE`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SAVE_USERNAME: `SAVE_USERNAME`,
};

const ActionCreator = {
  blockReviewForm: (status) => {
    return {
      type: ActionType.BLOCK_REVIEW_FORM,
      payload: status,
    };
  },

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
    })
    .catch((err) => {
      throw err;
    });
  },

  sendComment: (formData) => (dispatch, getState, api) => {
    const state = getState();
    const offerId = getCurrentOffer(state).id;
    return api.post(`/comments/${offerId}`, {
      comment: formData.comment,
      rating: formData.rating,
    })
    .then(() => {
      dispatch(ActionCreator.blockReviewForm(false));
    })
    .then(() => {
      return api.get(`/comments/${offerId}`);
    })
    .then((response) => {
      const transformedComments = response.data.map((it) => transformCommentShape(it));
      dispatch(DataActionCreator.getComments(transformedComments));
    })
    .catch((err) => {
      throw err;
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.BLOCK_REVIEW_FORM:
      return extend(state, {
        isReviewFormBlocked: action.payload,
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
