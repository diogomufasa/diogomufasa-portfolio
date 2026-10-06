import '@/styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';

import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import TabNavigation from '@/Components/TabNavigation';
import ContextWrapper from '@/Contexts/ContextWrapper';
import Footer from '@/Components/Footer';
import { ContactMeProvider } from '@/Contexts/ContextContactMe';

import MouseGlow from '@/Components/MouseGlow';

export const metadata: Metadata = {
  title: 'Diogo Soromenho',
  description: 'Diogo Soromenho, a passionate software developer based in Portugal',
  keywords: 'Diogo Soromenho, Diogo Moreira, Portfolio, Website, developer, software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <MouseGlow />
        <div className="bg-grid"></div>
        <div className="bg-glow"></div>
        
        <SpeedInsights />
        <Analytics />
        <div className="min-h-screen flex flex-col items-center w-full pb-10">
          <ContextWrapper>
            <ContactMeProvider>
              <TabNavigation />
              <main className="w-full relative z-10 flex flex-col items-center">
                {children}
              </main>
            </ContactMeProvider>
          </ContextWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
