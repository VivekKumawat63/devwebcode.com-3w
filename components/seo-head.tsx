import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

export function SEOHead({
  title = "DevCodeWeb - Next-Generation Web Development",
  description = "Professional web development services including games development, e-commerce solutions, advanced UI/UX, and custom projects. Fast, modern, and scalable solutions.",
  keywords = "web development, games development, e-commerce, UI/UX design, custom projects, React, TypeScript, Jaipur",
  ogImage = "/og-image.png",
  canonicalUrl,
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="DevCodeWeb Team" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="DevCodeWeb" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "DevCodeWeb",
            description: description,
            url: "https://devcodeweb.com",
            logo: "https://devcodeweb.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9785343142",
              contactType: "customer service",
              email: "vivekkumawat184563@gmail.com",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Jaipur",
              addressRegion: "Rajasthan",
              addressCountry: "IN",
            },
            sameAs: ["https://github.com/devcodeweb", "https://linkedin.com/company/devcodeweb"],
          }),
        }}
      />
    </Head>
  )
}
