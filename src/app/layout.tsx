// src/app/layout.tsx
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Instrument_Serif } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arun Reddy — AI Workflow & Agentic AI Architect',
  description:
    'I build AI systems that eliminate your most expensive bottlenecks. n8n workflow automation, multi-agent systems, Google ADK, Gemini. Working with global clients from Hyderabad.',
  keywords: [
    'AI automation',
    'agentic AI',
    'n8n workflows',
    'Google ADK',
    'AI freelancer',
    'workflow automation',
    'multi-agent systems',
    'Gemini AI',
    'Claude API',
    'business automation',
  ],
  authors: [{ name: 'Arun Reddy', url: 'https://arunreddy.co' }],
  creator: 'Arun Reddy',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://arunreddy.co'),
  openGraph: {
    title: 'Arun Reddy — AI Workflow & Agentic AI Architect',
    description: 'I build AI systems that eliminate your most expensive bottlenecks.',
    url: 'https://arunreddy.co',
    siteName: 'Arun Reddy',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arun Reddy — AI Workflow & Agentic AI Architect',
    description: 'I build AI systems that eliminate your most expensive bottlenecks.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${instrumentSerif.variable}`}
    >
      <body className={plusJakarta.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
