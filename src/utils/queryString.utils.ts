import _ from 'lodash';
import queryString, { ParseOptions, StringifyOptions } from 'query-string';

export type { ParsedQuery } from 'query-string';

export const queryStringParse = (search = '', paramsFormat = {}) => {
  const DefaultFormat: ParseOptions = {
    parseBooleans: true,
    parseNumbers: true,
    // arrayFormat: 'comma',
  };

  const searchParams = queryString.parse(search, {
    ...DefaultFormat,
    ...paramsFormat,
  });
  return searchParams;
};

export const queryStringStringify = (searchParams = {}) => {
  const DefaultFormat: StringifyOptions = {
    skipNull: true,
    // arrayFormat: 'comma',
  };

  const searchString = queryString.stringify(searchParams, DefaultFormat);
  return searchString;
};
