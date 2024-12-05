import '@/styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import TabNavigation from '@/Components/TabNavigation';
import ContextWrapper from '@/Contexts/ContextWrapper';
import Footer from '@/Components/Footer';
import { ContactMeProvider } from '@/Contexts/ContextContactMe';

export const metadata: Metadata = {
  title: 'Diogo Soromenho',
  description:
    'Diogo Soromenho, a passionate software developer based in Portugal',
  icons: 'favicon.ico',
  keywords:
    'Diogo Soromenho, Diogo Moreira,  Portfolio, Website, developer, software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`p-5 py-[50px]`}>
        <SpeedInsights />
        <Analytics />
        <div className='flex-center w-'>
          <ContextWrapper>
            <ContactMeProvider>
              <TabNavigation />
              {children}
            </ContactMeProvider>
          </ContextWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
