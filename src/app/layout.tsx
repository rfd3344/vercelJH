



import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';

import { Provider } from 'src/core/provider';
import { Initiator } from 'src/core/initiator';
import { Header } from 'src/core/navigation/header';
import { Footer } from 'src/core/navigation/footer';
// import { fontsClassName } from 'src/libs/next';
// import 'src/core/tailwind/tailwind.css';

import "./globals.css";

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
    <html lang="en" >
      <body className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Provider>

          <Initiator />
          <Header />

          {children}

          <Footer />

        </Provider>

      </body>
    </html>
  );
}
