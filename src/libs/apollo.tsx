
'use client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';

export { useQuery } from '@apollo/client';
export { gql } from '@apollo/client';


// ref1: https://graphqlzero.almansi.me/#example-top
// ref2: https://graphqlzero.almansi.me/api


const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

interface IProps {
  children: React.ReactNode
}

export const ApolloProvider = ({
  children,
}: IProps) => (
  <Provider client={client}>
    {children}
  </Provider>
);
