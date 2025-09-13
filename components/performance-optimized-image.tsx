"use client"

import Image from "next/image"
import { useState } from "react"

interface PerformanceOptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function PerformanceOptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  placeholder = "empty",
  blurDataURL,
}: PerformanceOptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-lg" />}

      <Image
        src={hasError ? "/placeholder.svg" : src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
