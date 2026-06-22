import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Subash Nirmal Kolluru | Data Engineer | AWS | Snowflake',
  description:
    'Software Engineer 2 at CSAA Insurance Group building scalable data platforms, AI-powered applications, and cloud-native solutions.',
  keywords: [
    'Subash Nirmal Kolluru',
    'Data Engineer',
    'Software Engineer',
    'AWS',
    'Snowflake',
    'PySpark',
    'Airflow',
    'Terraform',
    'Machine Learning',
    'Portfolio',
  ],
  authors: [{ name: 'Subash Nirmal Kolluru' }],
  metadataBase: new URL('https://subashnirmal.vercel.app'),
  openGraph: {
    title: 'Subash Nirmal Kolluru | Data Engineer | AWS | Snowflake',
    description:
      'Software Engineer 2 at CSAA Insurance Group building scalable data platforms, AI-powered applications, and cloud-native solutions.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Subash Nirmal Kolluru — Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subash Nirmal Kolluru | Data Engineer | AWS | Snowflake',
    description:
      'Software Engineer 2 at CSAA Insurance Group building scalable data platforms, AI-powered applications, and cloud-native solutions.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
