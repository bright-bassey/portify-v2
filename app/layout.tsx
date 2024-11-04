import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AppSetting } from '../data/appSetting';
import { BaseTemplate } from '../data/templates/base';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: `${AppSetting.appName} - ${BaseTemplate.fullName} Portfolio`,
  description: `Generated by ${AppSetting.appName}`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}