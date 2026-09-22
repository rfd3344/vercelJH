import ProviderRedux from './redux/ProviderRedux';

interface IProps {
  children: React.ReactNode
}

export function Provider({
  children,
}: IProps) {
  return (

    <ProviderRedux >
      {children}
    </ProviderRedux>
  );
}