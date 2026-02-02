"use client"

import "./globals.css"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "@studio-freight/lenis"
import { customFont } from "./font"

export default function RootLayout({ children }) {
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    })

    // Make lenis accessible globally
    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname])

  return (
    <html lang="en" className={customFont.className}>
      <body>{children}</body>
    </html>
  )
}