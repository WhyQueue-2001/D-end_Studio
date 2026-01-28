"use client"

import "./globals.css"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { customFont } from "./font"

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
    <html lang="en" className={customFont.className}>
      <body>{children}</body>
    </html>
  )
}