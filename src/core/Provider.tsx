
// import ApolloProvider from './ApolloProvider';
import ProviderRedux from './redux/ProviderRedux';

import { ApolloProvider } from 'src/libs/apollo';

interface IProps {
  children: React.ReactNode
}

export default function Provider({
  children,
}: IProps) {
  return (

    <ProviderRedux >
      <ApolloProvider>

        {children}

      </ApolloProvider>
    </ProviderRedux>
  );
}