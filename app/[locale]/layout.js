import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  const metaData = {
    title: {
      fr: "Lieu Propre - Services de Nettoyage Professionnels au Québec",
      en: "Lieu Propre - Professional Cleaning Services in Quebec",
    },
    description: {
      fr: "Lieu Propre offre des services de nettoyage pour maisons, bureaux, commerces, cliniques, écoles et entrepôts au Québec. Faites confiance à notre expertise pour un environnement propre et sain.",
      en: "Lieu Propre provides cleaning services for homes, offices, businesses, clinics, schools, and warehouses in Quebec. Trust our expertise for a clean and healthy environment.",
    },
    keywords: {
      fr: "nettoyage, services de nettoyage, Québec, maison, bureau, commerce, école, entrepôt, environnement propre",
      en: "cleaning, cleaning services, Quebec, home, office, business, school, warehouse, clean environment",
    },
    url: "http://lieupropre.ca",
    facebook: "https://www.facebook.com/profile.php?id=61561167363198&mibextid=ZbWKwL",
    youtube: "https://youtube.com/@lieupropre?si=8vTRu36Y8jh7CkWe",
    linkedin: "https://www.linkedin.com/in/lieupropre-lieu-propre-164b83338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    image: "/logo.jpg", // Remplacez par une image hébergée sur votre site
  };

  const currentTitle = metaData.title[locale];
  const currentDescription = metaData.description[locale];
  const currentKeywords = metaData.keywords[locale];

  let messages;

  try {
    messages = require(`../../messages/${locale}.json`);
  } catch (error) {
    console.error(`Messages for locale ${locale} not found.`, error);
  }

  return (
    <html lang={locale}>
      <Head>
        {/* Balises existantes */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{currentTitle}</title>
        <meta name="description" content={currentDescription} />
        <meta name="keywords" content={currentKeywords} />
        <meta name="author" content="Lieu Propre" />
        <meta name="robots" content="index, follow" />

        {/* Balises Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content={currentTitle} />
        <meta property="og:description" content={currentDescription} />
        <meta property="og:image" content={metaData.image} />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={locale === "fr" ? "fr_CA" : "en_CA"} />
        <meta property="og:site_name" content="Lieu Propre" />

        {/* Balises Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentTitle} />
        <meta name="twitter:description" content={currentDescription} />
        <meta name="twitter:image" content={metaData.image} />
        <meta name="twitter:site" content="@LieuPropre" />

        {/* Liens canoniques et alternatifs */}
        <link rel="canonical" href={metaData.url} />
        <link rel="alternate" hrefLang="fr-CA" href={`${metaData.url}/fr`} />
        <link rel="alternate" hrefLang="en-CA" href={`${metaData.url}/en`} />

        {/* Balises pour les réseaux sociaux */}
        <link rel="me" href={metaData.facebook} />
        <link rel="me" href={metaData.youtube} />
        <link rel="me" href={metaData.linkedin} />
      </Head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
