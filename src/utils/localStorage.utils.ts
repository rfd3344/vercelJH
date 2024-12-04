import { isServerSide } from './browser.utils';

export const STORAGE_CHANGE = 'STORAGE_CHANGE'; // name for storage change event

/****
 * get data from localStrorage
 * @arg name - name of field
 * @arg isSessionStorage - use sessionStorage
 */
export const getStorage = (name = '', isSessionStorage = false) => {
  if (isServerSide()) return null;

  const storage = isSessionStorage ? sessionStorage : localStorage;

  if (!name) return storage;

  const value = storage.getItem(name);
  return value;
};

/*******
 * @arg name - name of the localStorage
 * @arg value - value of the localStorage
 *  - remove if null or undefined
 *
 */
export const setStorage = (name = '', value = '', isSessionStorage = false) => {
  if (isServerSide()) return null;

  const storage = isSessionStorage ? sessionStorage : localStorage;

  if (!value) return storage.removeItem(name);
  storage.setItem(name, value);
  window.dispatchEvent(new Event(STORAGE_CHANGE));
};
