import type React from "react"
import type { Metadata } from "next"
import { El_Messiri, IBM_Plex_Sans_Arabic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Display font for headings - Elegant and premium
const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
  fallback: ["system-ui", "Tajawal", "Cairo", "sans-serif"],
})

// Body font - Clean and readable
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body",
  fallback: ["system-ui", "Tajawal", "Cairo", "sans-serif"],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alawdari.vercel.app"

export const metadata: Metadata = {
  title: {
    default: "العودري للعسل - عسل يمني أصيل طبيعي 100% | أفضل أنواع العسل الطبيعي",
    template: "%s | العودري للعسل",
  },
  description:
    "العودري للعسل - متجر العسل الطبيعي اليمني الأصيل. نقدم أجود أنواع العسل: عسل السدر، عسل السمر، عسل المجرى، عسل الطلح. عسل طبيعي 100% من قلب الجبال اليمنية. شراء عسل يمني أصيل بجودة عالية.",
  keywords: [
    "عسل طبيعي",
    "العودري للعسل",
    "عسل يمني",
    "عسل سدر",
    "عسل سمر",
    "عسل مجرى",
    "عسل طلح",
    "عسل يمني أصيل",
    "شراء عسل",
    "عسل طبيعي 100%",
    "متجر عسل",
    "عسل اليمن",
    "عسل جبلي",
    "عسل بري",
    "honey",
    "natural honey",
    "yemeni honey",
    "pure honey",
    "organic honey",
    "sidr honey",
    "acacia honey",
  ],
  authors: [{ name: "العودري للعسل" }],
  creator: "العودري للعسل",
  publisher: "العودري للعسل",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["ar_YE", "en_US"],
    url: siteUrl,
    siteName: "العودري للعسل",
    title: "العودري للعسل - عسل يمني أصيل طبيعي 100%",
    description:
      "نكهة الأصالة وجودة الطبيعة. أجود أنواع العسل اليمني الأصيل من قلب الجبال اليمنية. عسل طبيعي 100% دون إضافات.",
    images: [
      {
        url: `${siteUrl}/premium-honey-packaging-luxury-jars.jpg`,
        width: 1200,
        height: 630,
        alt: "العودري للعسل - عسل يمني أصيل",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "العودري للعسل - عسل يمني أصيل طبيعي 100%",
    description: "نكهة الأصالة وجودة الطبيعة. أجود أنواع العسل اليمني الأصيل",
    images: [`${siteUrl}/premium-honey-packaging-luxury-jars.jpg`],
    creator: "@alaudri_honey",
    site: "@alaudri_honey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "food",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

// Structured Data for LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#business`,
  name: "العودري للعسل",
  alternateName: "Al-Audri Honey",
  description:
    "متجر العسل الطبيعي اليمني الأصيل. نقدم أجود أنواع العسل الطبيعي من قلب الجبال اليمنية.",
  image: `${siteUrl}/premium-honey-packaging-luxury-jars.jpg`,
  logo: `${siteUrl}/placeholder-logo.png`,
  url: siteUrl,
  telephone: "+967771356441",
  address: {
    "@type": "PostalAddress",
    addressCountry: "YE",
    addressLocality: "صنعاء",
    addressRegion: "صنعاء",
    addressCountryName: "اليمن",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 15.3694,
    longitude: 44.1910,
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: [
    "https://wa.me/967771356441",
    "https://instagram.com/alaudri_honey",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
}

// Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}#organization`,
  name: "العودري للعسل",
  url: siteUrl,
  logo: `${siteUrl}/placeholder-logo.png`,
  sameAs: [
    "https://wa.me/967771356441",
    "https://instagram.com/alaudri_honey",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+967771356441",
    contactType: "customer service",
    availableLanguage: ["Arabic", "English"],
    areaServed: "YE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#D97706" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="YE" />
        <meta name="geo.placename" content="صنعاء" />
        <meta name="geo.position" content="15.3694;44.1910" />
        <meta name="ICBM" content="15.3694, 44.1910" />
        <meta name="language" content="Arabic" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${elMessiri.variable} ${ibmPlexSansArabic.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
