
// import ApolloProvider from './ApolloProvider';
import ProviderRedux from './redux/ProviderRedux';

import ThemeProvider from 'src/core/tailwind/theme-provider';
import { ApolloProvider } from 'src/libs/apollo';

interface IProps {
  children: React.ReactNode
}

export default function Provider({
  children,
}: IProps) {
  return (

    <ProviderRedux >
      <ThemeProvider>
        <ApolloProvider>
          {children}
        </ApolloProvider>
      </ThemeProvider>
    </ProviderRedux>
  );
}