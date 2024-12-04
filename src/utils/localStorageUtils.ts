'use client';
import { useState, useEffect } from 'react';
import _ from 'lodash';

import { parseJSON } from 'src/utils/strUtils';

const EXPIRY_DATE = '_EXPIRY_DATE'; // name for expiry date
const STORAGE_CHANGE = 'STORAGE_CHANGE'; // name for storage change event

const getCurrentTime = () => new Date().getTime();

/****
 * it will check the exiprie date
 * @arg name - name of the cookie
 *  - if name is not provided, all localStorage will be returned
 *
 */
export const getLocalStorage = (name = '') => {
  if (typeof localStorage === 'undefined') return;
  if (!name) return localStorage;

  const value = localStorage?.getItem(name);
  if (!value) return;

  const res = parseJSON(value);

  return res.value;
};

/*******
 * @arg name - name of the localStorage
 * @arg value - value of the localStorage
 * @arg options.expiry - expiration time in milliseconds
 *
 *
 */
export const setLocalStorage = (name = '', value = '', expiry = 0) => {
  localStorage.setItem(name, JSON.stringify(value));
  window.dispatchEvent(new Event(STORAGE_CHANGE));

  if (expiry) {
    localStorage.setItem(
      name + EXPIRY_DATE,
      (getCurrentTime() + expiry).toString(),
    );
  }
};

export const useLocalStorage = (name = '') => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (_.isUndefined(value)) return;

    const listener = () => {
      const nextValue = getLocalStorage(name);
      if (_.isEqual(value, nextValue)) return;

      setValue(nextValue);
    };
    window.addEventListener(STORAGE_CHANGE, listener);
    return () => {
      window.removeEventListener(STORAGE_CHANGE, listener);
    };
  }, [name, value]);

  return value;
};
