import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScholarBridge | Academic support for modern graduate students',
  description:
    'A secure academic support platform for research guidance, editing, mentoring, and project tracking.',
  metadataBase: new URL('https://scholarbridge.app'),
  openGraph: {
    title: 'ScholarBridge',
    description: 'Academic support for modern graduate students',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
