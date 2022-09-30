// Dependencies
import axios, { AxiosRequestConfig, Method } from 'axios';

// Constants
import { API_SERVER } from '../constants';

// Create http using axios
const http = axios.create({ baseURL: `${API_SERVER}/api` });

// Create request
const request = (method: Method, url: string, options: AxiosRequestConfig) =>
  http
    .request({
      ...options,
      method,
      url,
      headers: {
        ...options.headers,
      },
    })
    .then(httpResponseHandler)
    .catch(httpErrorHandler);

const httpResponseHandler = (response) => {
  return response.data;
};

const httpErrorHandler = (err) => {
  const response = err?.response;
  if (response?.status === 401) {
    // eslint-disable-next-line no-throw-literal
    throw {
      msg: 'Unauthorized',
    };
  }

  const data = response?.data;
  // eslint-disable-next-line no-throw-literal
  throw {
    msg: data?.msg || 'Network Error!',
  };
};

// Create http
const Http = {
  get(url: string, params = {}, headers = {}) {
    return request('GET', url, { params, headers });
  },
  post(url: string, body = {}, headers = {}) {
    return request('POST', url, { data: body, headers });
  },
  put(url: string, body = {}, headers = {}) {
    return request('PUT', url, { data: body, headers });
  },
  patch(url: string, body = {}, headers = {}) {
    return request('PATCH', url, { data: body, headers });
  },
  delete(url: string, body = {}, headers = {}) {
    return request('DELETE', url, { data: body, headers });
  },
};

// Export http
export default Http;
