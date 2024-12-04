import { useState, useEffect } from 'react';

import { STORAGE_CHANGE, getStorage } from 'src/utils/localStorage.utils';

export const useStorage = (name = '', isSessionStorage = false) => {
  const [value, setValue] = useState<string | Storage | null>(() =>
    getStorage(name, isSessionStorage)
  );

  useEffect(() => {
    const listener = () => {
      const storageValue = getStorage(name, isSessionStorage);
      setValue(storageValue);
    };

    window.addEventListener(STORAGE_CHANGE, listener);
    return () => {
      window.removeEventListener(STORAGE_CHANGE, listener);
    };
  }, [name, isSessionStorage]);

  return value;
};
