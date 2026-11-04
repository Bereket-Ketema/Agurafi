"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { partnerLogos } from "@/lib/data"

// Selected 5 trusted brands for the hero social proof strip
const heroTrustedLogos = [
  partnerLogos[0], // Yegna Trading
  partnerLogos[3], // Willy
  partnerLogos[6], // Gedion Advertising
  partnerLogos[9], // Prime Real Estate
  partnerLogos[11], // Rotech
  partnerLogos[2], // mela express delivery
]

// Agency stats
const heroDisplayStats = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Specialists on Team" },
  { value: "60+", label: "Industries Served" },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      {/* Subtle atmospheric ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 600px at 75% 20%, rgba(228,172,35,0.1), transparent 60%), radial-gradient(700px 500px at 15% 85%, rgba(10,53,47,0.45), transparent 60%), linear-gradient(180deg, #062622 0%, #04201c 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Right-aligned Bespoke Creative Studio Background Image */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden z-0">
        <Image
          src="/images/hero/hero-creative-bg.jpg"
          alt="Agurafi Digital Creative Studio"
          fill
          priority
          unoptimized
          className="object-cover object-center lg:object-right opacity-85 lg:opacity-95"
        />
        {/* Seamless Left Gradient Fade so headline & text remain perfectly crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04201c] via-[#04201c]/50 to-transparent" />
        {/* Top & Bottom Cinematic Edge Fades */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#062622] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#04201c] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:max-w-3xl">

          {/* Core Value Proposition & Primary Actions */}
          <div className="flex flex-col text-left">
            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.12] text-foreground text-balance">
              Increase Your <span className="text-gradient-gold">Reach,</span> Elevate Your Brand, and Drive More Sales
            </h1>

            {/* Supporting Message */}
            <p className="mt-5 max-w-xl text-base sm:text-lg text-muted/95 leading-relaxed font-normal text-pretty">
              Agurafi empowers brands to grow through creative visuals, strategic marketing, and data-driven solutions
              that deliver measurable results.
            </p>

            {/* Actions: Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-[#e5b128] to-[#c99116] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(228,172,35,0.4)] active:translate-y-0"
              >
                <span>View Our Services</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:border-white/30 active:translate-y-0"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Agency Key Stats Strip */}
            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
              {heroDisplayStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md shadow-xs transition-all duration-200 hover:border-primary/40 hover:bg-white/[0.08]"
                >
                  <span className="font-heading text-sm sm:text-base font-extrabold text-accent">
                    {stat.value}
                  </span>
                  <span className="text-[11px] sm:text-xs text-muted/90 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Hero Social Proof: Trusted Client Logos */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/80">
                Trusted by Businesses Across Industries
              </p>

              <div className="mt-3.5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                {heroTrustedLogos.map((partner) => (
                  <div
                    key={partner.name}
                    title={partner.name}
                    className="flex h-9 sm:h-10 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] px-3 py-1 opacity-80 backdrop-blur-md transition-all duration-200 hover:opacity-100 hover:border-primary/50 hover:bg-white/[0.12] shadow-xs"
                  >
                    <Image
                      src={partner.imageSrc}
                      alt={partner.name}
                      width={110}
                      height={32}
                      style={{ width: "auto" }}
                      className="max-h-5 sm:max-h-6 w-auto max-w-[90px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
