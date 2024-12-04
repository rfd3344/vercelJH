import { useMemo } from 'react';
import _ from 'lodash';

import { queryStringParse } from 'src/utils/queryString.utils';
import { useSearchParams as useSearchParamsNext } from 'src/libs/next';

/********************************
 * this method is retive the url params
 *
 * @example ?a=1&a=2&a=3&a=4&b=123&c=true&d=abc -> {a:[1,2,3], b:123, c::true, d:'abc' }
 *
 */
export const useSearchParam = () => {
  const searchParams = useSearchParamsNext();

  const queryString = useMemo(() => {
    const str = searchParams.toString();
    return queryStringParse(str);

  }, [searchParams]);

  return queryString;
};