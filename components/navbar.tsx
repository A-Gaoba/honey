"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#", label: "الرئيسية" },
    { href: "#about", label: "من نحن" },
    { href: "#products", label: "منتجاتنا" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#contact", label: "تواصل معنا" },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 w-[90%] md:w-[70%] -translate-x-1/2 z-50 transition-all duration-300 bg-white/20 ${scrolled ? "shadow-xl rounded-full" : "shadow-lg rounded-full"
        }`}
    >
      <div className="backdrop-blur-sm rounded-full px-6 sm:px-8  py-4 flex items-center justify-between gap-6  lg:gap-12 mx-auto border border-gray-100">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 " aria-label="العودري">
          <div className="relative w-10 h-10">
            {/* Honey-themed logo with overlapping shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Red/Golden shape */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-amber-600 rounded-md rotate-12 opacity-90"></div>
                {/* Dark shape */}
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-amber-900 rounded-md -rotate-12"></div>
                {/* White diagonal line */}
                <div className="absolute top-0 right-0 w-7 h-1 bg-white rounded-full rotate-45 origin-top-right"></div>
              </div>
            </div>
          </div>
          <span className="font-display font-bold text-xl text-foreground hidden sm:block">العودري </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-foreground/80 hover:text-foreground font-body font-medium text-base transition-colors duration-200 relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="القائمة"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-6 py-3 text-foreground/80 hover:text-foreground hover:bg-gray-50 font-body font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

