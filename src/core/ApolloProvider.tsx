'use client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});


export default function ApolloProvider({
  children,
}: any) {
  return (
    <Provider client={client}>

      {children}
    </Provider>
  );
}
