"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { navLinks } from "@/lib/data"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        <Link href="#home" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/agurafi-logo.jpg"
            alt="AGURAFI Digital Marketing"
            width={160}
            height={56}
            className="h-12 w-auto rounded-md lg:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(228,172,35,0.5)] lg:inline-flex"
        >
          Get Started
          <ArrowRight className="size-4" />
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="glass flex size-11 items-center justify-center rounded-full text-foreground lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-[73px] z-40 origin-top overflow-hidden bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[calc(100vh-73px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Get Started
            <ArrowRight className="size-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
