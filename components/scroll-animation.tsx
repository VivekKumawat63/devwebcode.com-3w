"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "slide-in-up" | "scale-in"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fade-in", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay])

  const animationClass = animation === "fade-in" ? "fade-in-on-scroll" : "slide-in-on-scroll"

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}
