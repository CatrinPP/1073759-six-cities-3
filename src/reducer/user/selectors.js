import NameSpace from '../name-space.js';

const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

const getIsSignInRequired = (state) => {
  return state[NameSpace.USER].isSignInRequired;
};

const getUserName = (state) => {
  return state[NameSpace.USER].userName;
};

export {getAuthorizationStatus, getIsSignInRequired, getUserName};
