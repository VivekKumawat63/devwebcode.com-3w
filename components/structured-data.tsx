"use client"

import { useEffect } from "react"

interface StructuredDataProps {
  data: object
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [data])

  return null
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevCodeWeb",
  description:
    "DevCodeWeb is the best web development company in Jaipur, Rajasthan. Led by CEO Nikhil Kumawat and Co-Founder Vivek Kumawat, we deliver professional web development, app development, UI/UX design, e-commerce solutions, and custom projects.",
  url: "https://devcodeweb.com",
  logo: "https://devcodeweb.com/logo.png",
  image: "https://devcodeweb.com/og-image.png",
  telephone: "+91-9785343142",
  email: "vivekkumawat184563@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
    postalCode: "302001",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "26.9124",
    longitude: "75.7873",
  },
  founder: [
    {
      "@type": "Person",
      name: "Nikhil Kumawat",
      jobTitle: "CEO",
      url: "https://devcodeweb.com",
    },
    {
      "@type": "Person",
      name: "Vivek Kumawat",
      jobTitle: "Co-Founder",
      url: "https://devcodeweb.com",
    },
  ],
  sameAs: [
    "https://github.com/devcodeweb",
    "https://linkedin.com/company/devcodeweb",
    "https://twitter.com/devcodeweb",
    "https://facebook.com/devcodeweb",
  ],
  areaServed: {
    "@type": "Place",
    name: "Jaipur, Rajasthan, India",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "26.9124",
      longitude: "75.7873",
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description: "Custom web development services using modern technologies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Development",
          description: "Professional e-commerce solutions for online businesses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description: "User experience and interface design services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile App Development",
          description: "Native and cross-platform mobile application development",
        },
      },
    ],
  },
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://devcodeweb.com/#organization",
  name: "DevCodeWeb",
  description: "Best web development company in Jaipur, Rajasthan",
  url: "https://devcodeweb.com",
  telephone: "+91-9785343142",
  email: "vivekkumawat184563@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jaipur",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9124,
    longitude: 75.7873,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
}
