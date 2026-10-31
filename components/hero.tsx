"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { partnerLogos } from "@/lib/data"

// Selected 5 trusted brands for the hero social proof strip
const heroTrustedLogos = [
  partnerLogos[0], // Yegna Trading
  partnerLogos[3], // Willy
  partnerLogos[6], // Gedion Advertising
  partnerLogos[9], // Prime Real Estate
  partnerLogos[11], // Rotech
]

// Updated Hero Statistics as explicitly requested
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
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(900px 600px at 75% 20%, rgba(228,172,35,0.12), transparent 60%), radial-gradient(700px 500px at 15% 85%, rgba(10,53,47,0.5), transparent 60%), linear-gradient(180deg, #062622 0%, #04201c 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Core Value Proposition & Primary Actions */}
          <div className="flex flex-col text-left lg:col-span-7">
            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-extrabold tracking-tight leading-[1.15] text-foreground text-balance">
              Increase Your <span className="text-gradient-gold">Reach,</span> Elevate Your Brand, and Drive More Sales
            </h1>

            {/* Supporting Message */}
            <p className="mt-4 max-w-xl text-sm sm:text-base text-muted leading-relaxed text-pretty">
              Agurafi empowers brands to grow through creative visuals, strategic marketing, and data-driven solutions
              that deliver measurable results.
            </p>

            {/* Actions: Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#c99116] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(228,172,35,0.45)] active:translate-y-0"
              >
                <span>View Our Services</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.09] hover:border-white/25 active:translate-y-0"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Hero Social Proof: Compact, Balanced Client Logos */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                Trusted by Businesses Across Industries
              </p>
              
              <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-4">
                {heroTrustedLogos.map((partner) => (
                  <div
                    key={partner.name}
                    title={partner.name}
                    className="flex h-10 sm:h-11 w-[calc(33.333%-0.5rem)] sm:w-28 items-center justify-center rounded-xl border border-white/10 bg-white/95 px-2.5 py-1.5 shadow-sm transition-all duration-200 hover:border-primary/50 hover:shadow-md hover:scale-[1.03]"
                  >
                    <Image
                      src={partner.imageSrc}
                      alt={partner.name}
                      width={120}
                      height={40}
                      style={{ width: "auto" }}
                      className="max-h-7 sm:max-h-8 w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Creative Agency Visual Showcase */}
          <div className="relative w-full lg:col-span-5">
            {/* Ambient Backlight Glow */}
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/15 via-emerald-500/10 to-transparent blur-2xl" />

            {/* Main Showcase Container */}
            <div className="group relative w-full overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-surface/90 to-[#041d19]/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
              
              {/* Studio Canvas Header with window controls */}
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-rose-500/70" />
                    <span className="size-2.5 rounded-full bg-amber-400/70" />
                    <span className="size-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <span className="ml-1 text-xs font-semibold text-foreground/90">Agurafi Creative Studio</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-accent">
                  <Sparkles className="size-3" />
                  <span>Featured Works</span>
                </div>
              </div>

              {/* Multi-Layered Visual Canvas */}
              <div className="relative w-full pt-1 pb-2">
                
                {/* 1. Primary Master Showcase Visual (Video & Motion Production) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 ring-1 ring-primary/20 bg-black/60 shadow-xl transition-all duration-500 group-hover:border-primary/40">
                  <Image
                    src="/images/services/video-editing.jpeg"
                    alt="Agurafi Video Production & Motion"
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle Cinematic Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Minimalist Viewfinder Framing Brackets */}
                  <div className="pointer-events-none absolute inset-2.5 flex flex-col justify-between opacity-50 transition-opacity duration-300 group-hover:opacity-80">
                    <div className="flex justify-between">
                      <span className="size-2 border-t-2 border-l-2 border-primary/70" />
                      <span className="size-2 border-t-2 border-r-2 border-primary/70" />
                    </div>
                    <div className="flex justify-between">
                      <span className="size-2 border-b-2 border-l-2 border-primary/70" />
                      <span className="size-2 border-b-2 border-r-2 border-primary/70" />
                    </div>
                  </div>
                </div>

                {/* 2. Overlapping Satellite Visual Top-Right (Graphic Design Artwork) */}
                <div className="absolute -top-1.5 right-0 sm:top-0 sm:right-0 z-20 w-[42%] max-w-[195px] overflow-hidden rounded-xl border border-white/20 bg-[#041d19]/90 p-1 shadow-[0_16px_36px_rgba(0,0,0,0.65)] ring-1 ring-black/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/50">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/services/graphics-design.jpeg"
                      alt="Agurafi Graphic Design Creative"
                      fill
                      sizes="180px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* 3. Overlapping Satellite Visual Bottom-Right (Social Campaign Visual) */}
                <div className="absolute -bottom-1.5 right-0 sm:bottom-0 sm:right-0 z-20 w-[44%] max-w-[205px] overflow-hidden rounded-xl border border-white/20 bg-[#041d19]/90 p-1 shadow-[0_16px_36px_rgba(0,0,0,0.65)] ring-1 ring-black/50 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-primary/50">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/services/social-media-management.jpeg"
                      alt="Agurafi Social Media Campaign Creative"
                      fill
                      sizes="190px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

              </div>

              {/* Verified Agency Statistics Strip */}
              <div className="mt-3.5 grid grid-cols-3 gap-2 pt-3 border-t border-white/10">
                {heroDisplayStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col rounded-xl border border-white/5 bg-white/[0.03] p-2.5 text-center transition-all duration-200 hover:bg-white/[0.06] hover:border-white/10"
                  >
                    <span className="font-heading text-lg sm:text-xl font-extrabold text-accent">
                      {stat.value}
                    </span>
                    <span className="mt-0.5 text-[11px] leading-tight text-muted">
                      {stat.label}
                    </span>
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
