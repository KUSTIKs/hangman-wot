import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

import './globals.scss';

const comicNeue = Poppins({
  subsets: ['latin'],
  weight: ['500', '400'],
});

const metadataBase = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${process.env.PORT || 3000}`;

export const metadata = {
  title: 'WOT Hangman',
  description: 'Hangman game with Word of Tanks maps',
  metadataBase: new URL(metadataBase),
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    images: ['/meta-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/meta-image.png'],
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={comicNeue.className}>
        {children}
        <div id='modal-root' />
      </body>
    </html>
  );
};

export default RootLayout;
