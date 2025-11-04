import { products } from "@/lib/products-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alaudri-honey.com"

// Product Schema for all products
export function ProductSchema() {
  const productSchemas = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/#product-${product.id}`,
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "العودري للعسل",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "YER",
      url: `${siteUrl}#products`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
  }))

  return (
    <>
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

// Breadcrumb Schema
export function BreadcrumbSchema() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: siteUrl,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}

// Review Schema
export function ReviewSchema() {
  const reviews = [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "أحمد محمد",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "عسل ممتاز وطبيعي 100%، جربت عسل السدر وكان رائعاً. الطعم أصيل والجودة عالية جداً.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "فاطمة علي",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "أفضل عسل جربته، نقي وطبيعي. التعامل راقي والتوصيل سريع. أنصح الجميع بالتجربة.",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "خالد حسن",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody: "جودة ممتازة وسعر مناسب، التغليف فاخر والعسل أصلي. سأطلب مرة أخرى بإذن الله.",
    },
  ]

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "العودري للعسل",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
    />
  )
}

// FAQ Schema
export function FAQSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ما هي أنواع العسل المتوفرة في متجر العودري للعسل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نقدم مجموعة متنوعة من أجود أنواع العسل اليمني الأصيل: عسل السدر، عسل السمر، عسل المجرى، عسل الطلح، عسل الزهور، وعسل الشوكة. كل نوع يتميز بخصائصه وفوائده الفريدة.",
        },
      },
      {
        "@type": "Question",
        name: "هل العسل طبيعي 100%؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، جميع منتجاتنا من العسل الطبيعي 100% دون أي إضافات أو مواد حافظة. نحن نحرص على تقديم عسل نقي من أجود المناحل الطبيعية في قلب الجبال اليمنية.",
        },
      },
      {
        "@type": "Question",
        name: "كيف يمكنني شراء العسل؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "يمكنك التواصل معنا عبر واتساب على الرقم +967 771 356 441 أو عبر إنستغرام @alaudri_honey. نحن نقدم خدمة التوصيل داخل اليمن.",
        },
      },
      {
        "@type": "Question",
        name: "ما هي فوائد العسل الطبيعي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "العسل الطبيعي غني بالفوائد الصحية: يقوي المناعة، يحتوي على مضادات الأكسدة، يساعد في التئام الجروح، يعزز الطاقة، ويحسن الهضم. كل نوع من أنواع العسل له فوائد إضافية خاصة به.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

