import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blinkathon',
  description: 'Blinks Hackathon',
};

const myFont = localFont({
  src: './PPNeueBit-bold.otf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
