import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Intan AI Asisten',
  description:
    'Intan AI Asisten - teman AI yang hangat dan membantu.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Intan AI Asisten',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="description" content={metadata.description as string} />
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Intan AI Asisten" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-pink-50 text-slate-800 dark:bg-[#1b1024] dark:text-pink-50 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
