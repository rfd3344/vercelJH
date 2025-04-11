
// import ApolloProvider from './ApolloProvider';
import ProviderRedux from './redux/ProviderRedux';

import ThemeProvider from 'src/core/tailwind/theme-provider';


interface IProps {
  children: React.ReactNode
}

export default function Provider({
  children,
}: IProps) {
  return (

    <ProviderRedux >
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ProviderRedux>
  );
}