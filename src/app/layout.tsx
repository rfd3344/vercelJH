



import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import Provider from 'src/core/Provider';
import Initiator from 'src/core/Initiator';
import Header from 'src/core/navigation/Header';
import Footer from 'src/core/navigation/Footer';
import { fontsClassName } from 'src/libs/next';
import 'src/core/tailwind/tailwind.css';


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
};
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

        <Provider>

          <Initiator />
          <Header />

          <div className='auto-rows-auto grid-flow-row px-2'>
            {children}
          </div>

          <Footer />

        </Provider>

      </body>
    </html>
  );
}
