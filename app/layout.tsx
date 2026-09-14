import type { Metadata } from 'next';
import { Montserrat, Ubuntu } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MotionProvider } from '@/src/components/motion';
import AnalyticsProvider from '@/src/components/AnalyticsProvider';
import { buildOrganizationSchema } from '@/src/lib/schema';

// Cookieless analytics. Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN (e.g. "unifi.id") to activate;
// while unset, no analytics script is served and event calls no-op safely.
const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const siteDescription =
  'unifi.id is a movement-intelligence and decarbonisation platform for smart buildings — unifying occupancy, fire safety, energy, and carbon reporting data into one verifiable system.';

export const metadata: Metadata = {
  metadataBase: new URL('https://unifi.id'),
  title: {
    default: 'unifi.id | Movement Intelligence & Decarbonisation Platform',
    template: '%s | unifi.id',
  },
  description: siteDescription,
  keywords: [
    'unifi.id',
    'unifid',
    'unifi',
    'movement intelligence',
    'decarbonisation platform',
    'carbon reporting',
    'carbon action plan',
    'the energy trap',
  ],
  alternates: {
    canonical: 'https://unifi.id/',
  },
  openGraph: {
    title: 'unifi.id | Movement Intelligence & Decarbonisation Platform',
    description: siteDescription,
    url: 'https://unifi.id/',
    siteName: 'unifi.id',
    type: 'website',
    images: ['/unifi-assets/unifid-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'unifi.id | Movement Intelligence & Decarbonisation Platform',
    description: siteDescription,
    images: ['/unifi-assets/unifid-logo.png'],
  },
  // A base path means a preview deployment (e.g. the GitHub project-page demo), which
  // must stay out of search results so it can't compete with unifi.id itself.
  robots: process.env.NEXT_PUBLIC_BASE_PATH
    ? { index: false, follow: false }
    : { index: true, follow: true },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://secure.leadforensics.com/js/52873.js"></script>
        {plausibleDomain ? (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.tagged-events.js"
          ></script>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }}
        />
      </head>
      <body className={`${ubuntu.variable} ${montserrat.variable} font-sans flex flex-col min-h-screen`}>
        <noscript>
          <img alt="" src="https://secure.leadforensics.com/52873.png" style={{ display: 'none' }} />
        </noscript>
        <AnalyticsProvider />
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
