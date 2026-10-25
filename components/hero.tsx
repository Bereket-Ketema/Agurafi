"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { partnerLogos, aboutStats } from "@/lib/data"
import { CurvedDivider } from "@/components/curved-divider"

// Floating animation configurations with varied delays for organic, calm floating
const floatConfigs = [
  // Row 1 (4 cards)
  { animation: "animate-float-1", delay: "0s" },
  { animation: "animate-float-2", delay: "-1.5s" },
  { animation: "animate-float-3", delay: "-2.8s" },
  { animation: "animate-float-4", delay: "-0.8s" },
  // Row 2 (3 cards)
  { animation: "animate-float-2", delay: "-3.4s" },
  { animation: "animate-float-1", delay: "-1.9s" },
  { animation: "animate-float-3", delay: "-2.2s" },
  // Row 3 (3 cards)
  { animation: "animate-float-4", delay: "-0.5s" },
  { animation: "animate-float-2", delay: "-1.2s" },
  { animation: "animate-float-3", delay: "-3.1s" },
]

// Real industry / capability badges to make the brand cards informative and engaging
const partnerTags: Record<string, string> = {
  "Yegna Trading": "Logistics & Trade",
  "Zephyr Auto Spare Parts": "Automotive",
  "Mela Express Delivery": "Express Logistics",
  "Willy": "Commercial Retail",
  "Mela Packers & Movers": "Moving Services",
  "Mela Cleaning Service": "Corporate Cleaning",
  "Gedion Advertising": "Media & Marketing",
  "Simple": "Consumer Brand",
  "Spark Edge Advertising and Trading": "Trade & Media",
  "Prime Real Estate": "Luxury Properties",
}

export function Hero() {
  const [activePartnerIndex, setActivePartnerIndex] = useState<number | null>(null)
  const [hoveredPartnerIndex, setHoveredPartnerIndex] = useState<number | null>(null)

  // 10 partners structured in 4 - 3 - 3
  const heroPartners = partnerLogos.slice(0, 10)
  const row1Partners = heroPartners.slice(0, 4)
  const row2Partners = heroPartners.slice(4, 7)
  const row3Partners = heroPartners.slice(7, 10)

  const inspectedIndex = hoveredPartnerIndex ?? activePartnerIndex

  const handleCardClick = (index: number) => {
    setActivePartnerIndex((prev) => (prev === index ? null : index))
  }

  const renderCard = (partner: (typeof heroPartners)[0], index: number, heightClass: string) => {
    const config = floatConfigs[index]
    const isActive = inspectedIndex === index
    const tag = partnerTags[partner.name] || "Client Partner"

    return (
      <div
        key={partner.imageSrc}
        onClick={() => handleCardClick(index)}
        onTouchStart={() => handleCardClick(index)}
        onMouseEnter={() => setHoveredPartnerIndex(index)}
        onMouseLeave={() => setHoveredPartnerIndex(null)}
        style={{
          animationPlayState: isActive ? "paused" : "running",
          animationDelay: config.delay,
        }}
        className={`group relative flex ${heightClass} cursor-pointer select-none items-center justify-center rounded-2xl border p-2.5 sm:p-4 transition-all duration-300 ${
          config.animation
        } ${
          isActive
            ? "border-primary/80 ring-2 ring-primary/40 bg-gradient-to-b from-white via-white to-amber-50/50 shadow-[0_20px_45px_rgba(228,172,35,0.32)] scale-[1.05] -translate-y-1.5 z-30"
            : "border-white/50 bg-gradient-to-b from-white via-white/95 to-[#f4f7f5] shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:border-primary/60 hover:shadow-[0_16px_36px_rgba(228,172,35,0.22)] hover:scale-[1.03] hover:-translate-y-0.5 z-10"
        }`}
      >
        {/* Subtle Light Sheen on Hover */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full overflow-hidden rounded-2xl bg-gradient-to-r from-transparent via-primary/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {/* Category Pill Tag shown on hover & active */}
        <div
          className={`pointer-events-none absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-primary/40 bg-[#062822] px-2 py-0.5 text-[9px] font-bold text-accent shadow-md backdrop-blur-md transition-all duration-200 z-30 ${
            isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
          }`}
        >
          {tag}
        </div>

        {/* Logo Image */}
        <div className="relative flex size-full items-center justify-center">
          <Image
            src={partner.imageSrc}
            alt={partner.name}
            width={280}
            height={140}
            sizes="(min-width: 1280px) 240px, (min-width: 640px) 180px, 110px"
            className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    )
  }

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-24 sm:pt-28 lg:pb-20 lg:pt-32">
      {/* Background gradients */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1100px 700px at 75% 25%, rgba(228,172,35,0.18), transparent 60%), radial-gradient(700px 500px at 15% 85%, rgba(228,172,35,0.08), transparent 60%), linear-gradient(180deg, #083731 0%, #062a25 60%, #04201c 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 70% 30%, black 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* lg:items-stretch ensures top alignment and bottom margin alignment between buttons and cards/stats */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-8 xl:gap-12">
          {/* Left Column: Heading, description & Action buttons pinned at bottom */}
          <div className="flex flex-col justify-between pt-0 text-left lg:col-span-5 xl:col-span-5">
            <div>
              <h1 className="mt-0 mb-6 text-balance font-heading text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[66px]">
                Increase Your <span className="text-gradient-gold">Reach,</span> Elevate Your Brand, and Drive More Sales
              </h1>

              <p className="max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                Agurafi empowers brands to grow through creative visuals, strategic marketing, and data-driven solutions
                that deliver measurable results.
              </p>
            </div>

            {/* Bottom buttons aligned to the exact bottom margin level */}
            <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-[14.5px] font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(228,172,35,0.5)] active:scale-95"
              >
                View Our Services
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:scale-95"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: 4-3-3 Staggered Floating Logo Showcase + Side Stats */}
          <div className="relative flex flex-col justify-between items-center pt-1 sm:pt-1.5 lg:pt-2 lg:col-span-7 xl:col-span-7">
            {/* Ambient Backlight */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
            <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[90px]" />

            {/* 4-3-3 Floating Brand Grid with Live Verified Badges */}
            <div className="flex w-full max-w-[750px] flex-col gap-3 sm:gap-3.5">
              {/* Row 1: 4 Cards */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5">
                {row1Partners.map((partner, index) =>
                  renderCard(partner, index, "h-22 sm:h-26 lg:h-28 xl:h-30")
                )}
              </div>

              {/* Row 2: 3 Cards (Centered & Enlarged) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 px-3 sm:px-6">
                {row2Partners.map((partner, i) =>
                  renderCard(partner, 4 + i, "h-24 sm:h-28 lg:h-30 xl:h-32")
                )}
              </div>

              {/* Row 3: 3 Cards (Centered & Enlarged) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 px-3 sm:px-6">
                {row3Partners.map((partner, i) =>
                  renderCard(partner, 7 + i, "h-24 sm:h-28 lg:h-30 xl:h-32")
                )}
              </div>
            </div>

            {/* "3+ Years of Experience", "10+ Specialists on Team", "60+ Industries Served" on the side of cards, aligned at bottom */}
            <div className="mt-5 grid w-full max-w-[750px] grid-cols-3 gap-2 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 sm:p-4 backdrop-blur-md shadow-lg">
              {aboutStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col text-center sm:text-left ${
                    i > 0 ? "border-l border-white/10 pl-2 sm:pl-4" : "sm:pl-3"
                  }`}
                >
                  <span className="font-heading text-xl sm:text-2xl lg:text-3xl font-extrabold text-accent">
                    {stat.value}
                  </span>
                  <span className="mt-0.5 text-[11px] sm:text-xs text-muted leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sweeping Curvature Transition into Next Section */}
      <CurvedDivider position="bottom" variant="swoop" fillColor="#04201c" showGlow={true} />
    </section>
  )
}
