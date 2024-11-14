import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  
  let messages;
  
  try {
    messages = require(`../../messages/${locale}.json`);
  } catch (error) {
    console.error(`Messages for locale ${locale} not found.`, error);
  }

  return (
    <html lang={locale}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}