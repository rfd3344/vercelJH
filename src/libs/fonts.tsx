import { Inter } from 'next/font/google';

// console.warn('Inter', Inter, useSearchParams, Image)
// docs: setup fonts
// https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css


export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});


// export const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// });


// export const fontsVariable = inter.variable;

export const fontsClassName = inter?.className;
