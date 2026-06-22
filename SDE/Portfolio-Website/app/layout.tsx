import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Subash Nirmal Kolluru | Software Engineer & Data Engineer',
  description:
    'Portfolio of Subash Nirmal Kolluru — Software Engineer 2 and Data Engineer building scalable data platforms, AI-powered applications, and cloud-native solutions.',
  keywords: [
    'Subash Nirmal Kolluru',
    'Software Engineer',
    'Data Engineer',
    'Machine Learning',
    'AWS',
    'Snowflake',
    'React',
    'Portfolio',
  ],
  authors: [{ name: 'Subash Nirmal Kolluru' }],
  openGraph: {
    title: 'Subash Nirmal Kolluru | Software Engineer & Data Engineer',
    description:
      'Building scalable data platforms, AI-powered applications, and cloud-native solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subash Nirmal Kolluru',
    description: 'Software Engineer 2 | Data Engineer',
  },
  robots: {
    index: true,
    follow: true,
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
