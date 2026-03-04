import type { Metadata } from 'next';
import { Instrument_Serif, Fredoka } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Script from 'next/script'
import { DirectEdit } from 'made-refine'

const instrumentSerif = Instrument_Serif({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const fredoka = Fredoka({
  variable: '--font-fun',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Geist from npm package
const geistSans = localFont({
  src: '../node_modules/geist/dist/fonts/geist-sans/Geist-Regular.woff2',
  variable: '--font-sans',
  display: 'swap',
});

const geistMono = localFont({
  src: '../node_modules/geist/dist/fonts/geist-mono/GeistMono-Regular.woff2',
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Designing with Claude (Code) Computer',
  description: 'Four folders on designing with Claude — for designers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geistSans.variable} ${geistMono.variable} ${fredoka.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'development' && <DirectEdit />}
      </body>
    </html>
  );
}
