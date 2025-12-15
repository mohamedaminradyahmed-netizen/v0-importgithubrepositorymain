"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, Search, Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Only show navbar after scrolling past the intro animation (approx 3000px)
      // This is a rough estimate, ideally we sync with GSAP state, but scroll check is reliable enough for now
      if (window.scrollY > window.innerHeight * 2) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[200] transition-all duration-700 rtl",
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
        "bg-black/80 backdrop-blur-md shadow-lg py-4 border-b border-white/10",
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <div className="text-2xl font-bold tracking-widest uppercase text-white">النسخة</div>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {["الرئيسية", "المتجر", "عن النسخة", "المقالات"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-white">
          <Button variant="ghost" size="icon" className="hover:bg-white/20">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-white/20">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/20 relative">
            <ShoppingBag className="w-5 h-5" />
            {/* Updated code */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
