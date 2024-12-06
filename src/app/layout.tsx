



import { Suspense, ReactNode } from 'react';
import type { Metadata } from 'next';

import ProviderRedux from 'src/core/redux/ProviderRedux';
import Initiator from 'src/core/Initiator';
import Header from 'src/core/navigation/Header';
import Footer from 'src/core/navigation/Footer';
import { fontsClassName } from 'src/libs/next';
import 'src/core/tailwind/tailwind.css';


export const metadata: Metadata = {
  title: 'RFD3344',
  description: 'https://rfd3344.vercel.app/',
  manifest: '/manifest.json',
};

interface IProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: IProps) {
  return (
    <html lang="en" className={fontsClassName}>
      <body className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <ProviderRedux>
          <Suspense fallback="">
            <Initiator />
            <Header />

            <div className='auto-rows-auto grid-flow-row px-2'>
              {children}
            </div>

            <Footer />
          </Suspense>

        </ProviderRedux>

      </body>
    </html>
  );
}
