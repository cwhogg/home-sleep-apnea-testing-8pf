import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: `SleepBridge — From Apple Watch alerts to real treatment`,
  description: `Got an Apple Watch sleep apnea alert? Get affordable home sleep test without doctor referral. Bridge wearable detection to treatment in 24 hours.`,
  openGraph: {
    title: `SleepBridge — From Apple Watch alerts to real treatment`,
    description: `Got an Apple Watch sleep apnea alert? Get affordable home sleep test without doctor referral. Bridge wearable detection to treatment in 24 hours.`,
    type: 'website',
    siteName: `SleepBridge`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `SleepBridge — From Apple Watch alerts to real treatment`,
    description: `Got an Apple Watch sleep apnea alert? Get affordable home sleep test without doctor referral. Bridge wearable detection to treatment in 24 hours.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
