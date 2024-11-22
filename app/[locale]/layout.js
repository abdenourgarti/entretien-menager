import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

// Important : Next.js détecte automatiquement cette fonction generateMetadata
// Elle sera utilisée pour générer les métadonnées du site
export async function generateMetadata({ params }) {
  const { locale } = params;
  
  const metaData = {
    title: {
      fr: "Lieu Propre | Services d'Entretien Ménager Professionnel au Québec",
      en: "Lieu Propre | Professional Cleaning Services in Quebec",
    },
    description: {
      fr: "Lieu Propre offre des services d'entretien ménager résidentiel et commercial de première qualité au Québec. Nettoyage de maisons, bureaux, commerces et plus. Devis gratuit ☎",
      en: "Lieu Propre provides top-quality residential and commercial cleaning services in Quebec. House cleaning, office cleaning, business cleaning and more. Free quote ☎",
    },
    keywords: {
      fr: "entretien ménager Québec, nettoyage maison, service de nettoyage, femme de ménage, nettoyage commercial, nettoyage résidentiel, lieu propre, entreprise nettoyage Québec",
      en: "cleaning services Quebec, house cleaning, cleaning service, maid service, commercial cleaning, residential cleaning, lieu propre, cleaning company Quebec",
    }
  };

  return {
    metadataBase: new URL('https://lieupropre.ca'), // Mis à jour avec https
    title: metaData.title[locale],
    description: metaData.description[locale],
    keywords: metaData.keywords[locale],
    authors: [{ name: 'Lieu Propre' }],
    creator: 'Lieu Propre',
    publisher: 'Lieu Propre',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
      languages: {
        'fr-CA': '/fr',
        'en-CA': '/en',
      },
    },
    icons: {
      icon: '/logo.png',
      shortcut: '/logo.png',
      apple: '/logo.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      url: 'https://lieupropre.ca', // Mis à jour avec https
      siteName: 'Lieu Propre',
      title: metaData.title[locale],
      description: metaData.description[locale],
      images: [
        {
          url: '/logo.jpg',
          width: 1200,
          height: 630,
          alt: 'Lieu Propre - Services de nettoyage professionnel',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaData.title[locale],
      description: metaData.description[locale],
      images: ['/logo.jpg'],
    },
    category: 'Services de nettoyage',
    verification: {
      google: 'Nix1bgkoIhGFPdgQeRAG3g0P8xBvcJ5x7bcK5e3DJ4c'
    }
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = params;
  
  let messages;
  try {
    messages = require(`../../messages/${locale}.json`);
  } catch (error) {
    console.error(`Messages for locale ${locale} not found.`, error);
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}