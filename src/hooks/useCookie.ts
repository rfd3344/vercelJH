import { useState, useEffect } from 'react';

import { cookie, getCookie } from 'src/utils/cookie.utils';

/***
 * get cookie valu and listen to changes
 * @arg key - name of the cookie
 */
export function useCookie(key = '') {
  const [value, setValue] = useState<string | null>(
    () => getCookie(key) || null
  );

  useEffect(() => {
    const listener = ({ name = '', value = '' }) => {
      if (name !== key) return;
      setValue(value);
    };

    cookie.addChangeListener(listener);
    return () => {
      cookie.removeChangeListener(listener);
    };
  }, [key]);

  if (!key) {
    console.error('useCookie:key is required');
    return null;
  }

  return value;
}
