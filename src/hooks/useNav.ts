import { useState, useCallback } from 'react';
import _ from 'lodash';

import { useRouter } from 'src/libs/next';

import { queryStringStringify, ParsedQuery } from 'src/utils/queryString.utils';

/****
 * similar as react-router v6 useNavigation
 *
 * @return nav( url = '' , searchParams)
 * - searchParams: if it is unset, keep all searchParams
 *
 */
export const useNav = () => {
  const router = useRouter();

  const nav = useCallback(
    (pathname: string, searchParams: ParsedQuery) => {
      const queryString = queryStringStringify(searchParams);
      const url = `${pathname}?${queryString}`;
      router.push(url);
    },
    [router]
  );

  return nav;
};
