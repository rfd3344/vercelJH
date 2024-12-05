

import type { Metadata } from 'next';


import { Suspense } from 'react';
import Provider from 'src/core/Provider';
import Initiator from 'src/core/Initiator';
import Header from 'src/core/navigation/Header';
import Footer from 'src/core/navigation/Footer';


import 'src/core/tailwind.css';

import { fontsClassName } from 'src/libs/next';


export const metadata: Metadata = {
  title: 'RFD3344',
  description: 'https://rfd3344.vercel.app/',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontsClassName}>
      <body className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Provider>
          <Suspense fallback="">
            <Initiator />
            <Header />

            <div className='auto-rows-auto grid-flow-row px-2'>
              {children}
            </div>

            <Footer />
          </Suspense>

        </Provider>

      </body>
    </html>
  );
}
