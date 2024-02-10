import '@/styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';

import TabNavigation from '@/Components/TabNavigation';
import ContextWrapper from '@/Components/ContextWrapper';
import Footer from '@/Components/Footer';

export const metadata: Metadata = {
  title: 'Diogo Soromenho',
  description:
    'Diogo Soromenho, a passionate software developer based in Portugal',
  icons: 'favicon.png',
  keywords: 'Diogo Soromenho, Portfolio, Website, developer, software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`p-5 py-[50px]`}>
        <Analytics />
        <div className='flex-center w-'>
          <ContextWrapper>
            <TabNavigation />
            {children}
          </ContextWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
