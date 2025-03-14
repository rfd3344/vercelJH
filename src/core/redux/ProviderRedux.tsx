'use client';
import { useRef, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';


interface IProps {
  children: ReactNode;
}

export default function ProviderRedux({
  children,
}: IProps) {
  // const storeRef = useRef<AppStore>(null);
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = makeStore();
  // }

  return <Provider store={store}>{children}</Provider>;
}
