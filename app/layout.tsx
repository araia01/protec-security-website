import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.slprotec.com'),
  title: 'Protec Security, Logistics & Services | Sierra Leone',
  description:
    'Protec delivers professional security, logistics, travel and data services across Sierra Leone. Man guarding, intelligent security systems, special services, ProLogistics, ProTravel and ProData — support you can trust.',
  keywords:
    'Protec Sierra Leone, security company Freetown, man guarding, ProGuard, ProTech, ProSecure, logistics, slprotec',
  openGraph: {
    title: 'Protec Security, Logistics & Services',
    description:
      'Security, logistics and professional support you can trust. Market leader in Sierra Leone.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
