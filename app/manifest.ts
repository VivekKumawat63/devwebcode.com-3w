import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevCodeWeb - Next-Generation Web Development",
    short_name: "DevCodeWeb",
    description:
      "Professional web development services including games development, e-commerce solutions, and advanced UI/UX design.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
