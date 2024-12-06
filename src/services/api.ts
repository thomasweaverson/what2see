import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { getToken } from './token';
import { processErrorHandle } from './process-error-handle';
import { store } from '../store';
import { AppRoute } from '../const';
import { redirectToRoute } from '../store/action';

const BASE_URL = 'https://10.react.htmlacademy.pro/wtw';
const REQUEST_TIMEOUT = 5000;

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse): boolean => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        (config.headers as AxiosHeaders).set('x-token', token);
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        const status = error.response.status;
        if (status === StatusCodes.NOT_FOUND) {
          store.dispatch(redirectToRoute(AppRoute.NotFound));
        }
      }
      if (error.response && shouldDisplayError(error.response)) {
        const errorMessage = (error.response.data as { error?: string }).error || 'Something went wrong';
        processErrorHandle(errorMessage);
      }

      throw error;
    },
  );

  return api;
};
