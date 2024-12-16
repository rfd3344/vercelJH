import _ from 'lodash';
import axios, { CreateAxiosDefaults } from 'axios';

import { publicEnv } from 'src/core/envConfig';

export const createInstance = (config: CreateAxiosDefaults) => {
  const instance = axios.create({
    timeout: 10_000, // default timeout: 5 seconds
    ...config,
  });

  instance.interceptors.response.use((resp) => resp.data);

  return instance;
};

export const gitStaticApi = (config: CreateAxiosDefaults = {}) => {
  const instance = createInstance({
    baseURL: publicEnv().GITHUB_API,
    ...config,
  });

  return instance;
};
