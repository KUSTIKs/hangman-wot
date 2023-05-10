import { ReactNode } from 'react';
import { Comic_Neue } from 'next/font/google';

import './globals.scss';

const comicNeue = Comic_Neue({
  subsets: ['latin'],
  weight: ['700', '400'],
});

export const metadata = {
  title: 'Hangman WOT',
  description: 'Hangman game with Word of Tanks maps',
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={comicNeue.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
