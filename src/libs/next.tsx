export type { NextPage } from 'next';

export { default as Image } from 'next/image';

// refer to https://nextjs.org/docs/app/api-reference/components/link#href-required
export { default as Link } from 'next/link';


export { default as Script } from 'next/script';


export { useParams } from 'next/navigation';
export { usePathname } from 'next/navigation';
export { useRouter } from 'next/navigation';  // recommend hooks/useNav
export { useSearchParams } from 'next/navigation';//  recommend hooks/useSearchParam


import { Inter, Roboto_Mono } from 'next/font/google';



/*******************************
 * docs: setup fonts
 * https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
 *
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const fontsClassName = inter.className;
