import axios from 'axios';
import {TIMEOUT, BASE_URL, Error} from './const.js';

export const createAPI = (onUnauthorized, onServerError) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED || response.status === Error.BAD_REQUEST) {
      onUnauthorized();
      throw err;
    }

    if (response.status >= Error.SERVER_ERROR) {
      onServerError();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
