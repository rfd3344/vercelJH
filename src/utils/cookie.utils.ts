import Cookies from 'universal-cookie';

// check the document:
// https://www.npmjs.com/package/universal-cookie
export const cookie = new Cookies();

/****
 * @arg name - name of cookie, if name is not provided, all cookies will be returned
 *
 */
export const getCookie = (name = '') => {
  if (name) return cookie.get(name);
  else return cookie.getAll();
};

/*******
 * @arg name - name of cookie
 * @arg value - value of cookie, remove if empty
 * @arg options.maxAge - default expiration time 12 hours
 *  - https://www.npmjs.com/package/universal-cookie#setname-value-options
 */
export const setCookie = (name = '', value = '', options = {}) => {
  if (!value) {
    cookie.remove(name);
    return;
  }

  cookie.set(name, value, {
    maxAge: 12 * 3600,
    path: '/',
    // secure: true,
    // httpOnly: true,
    ...options,
  });
};
