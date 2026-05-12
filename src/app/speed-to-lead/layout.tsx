import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Speed-to-Lead SMS System for Roofing, HVAC & Solar Contractors — Arun Reddy',
  description:
    "Every lead you don't text back in 5 minutes is 21x less likely to qualify. We text every new lead in under 60 seconds — even at 2am — so you stop paying for leads your competitors are closing. $1,000 setup + $300/month.",
  robots: 'index, follow',
  openGraph: {
    title:
      'Speed-to-Lead SMS System for Roofing, HVAC & Solar Contractors — Arun Reddy',
    description:
      "Every lead you don't text back in 5 minutes is 21x less likely to qualify. We text every new lead in under 60 seconds — even at 2am — so you stop paying for leads your competitors are closing. $1,000 setup + $300/month.",
    type: 'website',
    url: 'https://arunreddy.co/speed-to-lead',
  },
  alternates: {
    canonical: 'https://arunreddy.co/speed-to-lead',
  },
};

export default function SpeedToLeadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
