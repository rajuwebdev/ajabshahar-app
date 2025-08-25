"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <main className="min-h-screen">
      <Header onSearchToggle={handleSearchToggle} isSearchOpen={isSearchOpen} />
      <Hero isSearchOpen={isSearchOpen} />
      <Footer />
    </main>
  )
}
