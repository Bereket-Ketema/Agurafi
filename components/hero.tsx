"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { partnerLogos, aboutStats } from "@/lib/data"

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
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-[14.5px] font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(228,172,35,0.5)] active:scale-95"
              >
                View Our Services
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14.5px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:scale-95"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Column: Enlarged 4-3-3 Staggered Floating Logo Showcase + Side Stats */}
          <div className="relative flex flex-col justify-between items-center pt-1 sm:pt-1.5 lg:pt-2 lg:col-span-7 xl:col-span-7">
            {/* Ambient Backlight */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
            <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-[90px]" />

            {/* Enlarged 4-3-3 Floating Brand Grid */}
            <div className="flex w-full max-w-[750px] flex-col gap-3 sm:gap-3.5">
              {/* Row 1: 4 Cards (Enlarged size) */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5">
                {row1Partners.map((partner, index) => {
                  const config = floatConfigs[index]
                  const isActive = inspectedIndex === index

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
                      className={`group relative flex h-22 sm:h-26 lg:h-28 xl:h-30 cursor-pointer select-none items-center justify-center rounded-2xl border bg-white p-2.5 sm:p-4 transition-all duration-300 ${
                        config.animation
                      } ${
                        isActive
                          ? "border-primary/45 ring-1 ring-primary/35 shadow-[0_18px_36px_rgba(0,0,0,0.25),0_0_20px_rgba(228,172,35,0.12)] scale-[1.04] -translate-y-1 z-20"
                          : "border-white/30 shadow-[0_6px_18px_rgba(0,0,0,0.14)] hover:border-white/60 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5 z-10"
                      }`}
                    >
                      <div className="relative flex size-full items-center justify-center">
                        <Image
                          src={partner.imageSrc}
                          alt={partner.name}
                          width={260}
                          height={130}
                          sizes="(min-width: 1280px) 200px, (min-width: 640px) 150px, 90px"
                          className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Row 2: 3 Cards (Centered & Enlarged) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 px-3 sm:px-6">
                {row2Partners.map((partner, i) => {
                  const index = 4 + i
                  const config = floatConfigs[index]
                  const isActive = inspectedIndex === index

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
                      className={`group relative flex h-24 sm:h-28 lg:h-30 xl:h-32 cursor-pointer select-none items-center justify-center rounded-2xl border bg-white p-3 sm:p-4 transition-all duration-300 ${
                        config.animation
                      } ${
                        isActive
                          ? "border-primary/45 ring-1 ring-primary/35 shadow-[0_18px_36px_rgba(0,0,0,0.25),0_0_20px_rgba(228,172,35,0.12)] scale-[1.04] -translate-y-1 z-20"
                          : "border-white/30 shadow-[0_6px_18px_rgba(0,0,0,0.14)] hover:border-white/60 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5 z-10"
                      }`}
                    >
                      <div className="relative flex size-full items-center justify-center">
                        <Image
                          src={partner.imageSrc}
                          alt={partner.name}
                          width={280}
                          height={140}
                          sizes="(min-width: 1280px) 240px, (min-width: 640px) 190px, 120px"
                          className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Row 3: 3 Cards (Centered & Enlarged) */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 px-3 sm:px-6">
                {row3Partners.map((partner, i) => {
                  const index = 7 + i
                  const config = floatConfigs[index]
                  const isActive = inspectedIndex === index

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
                      className={`group relative flex h-24 sm:h-28 lg:h-30 xl:h-32 cursor-pointer select-none items-center justify-center rounded-2xl border bg-white p-3 sm:p-4 transition-all duration-300 ${
                        config.animation
                      } ${
                        isActive
                          ? "border-primary/45 ring-1 ring-primary/35 shadow-[0_18px_36px_rgba(0,0,0,0.25),0_0_20px_rgba(228,172,35,0.12)] scale-[1.04] -translate-y-1 z-20"
                          : "border-white/30 shadow-[0_6px_18px_rgba(0,0,0,0.14)] hover:border-white/60 hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5 z-10"
                      }`}
                    >
                      <div className="relative flex size-full items-center justify-center">
                        <Image
                          src={partner.imageSrc}
                          alt={partner.name}
                          width={280}
                          height={140}
                          sizes="(min-width: 1280px) 240px, (min-width: 640px) 190px, 120px"
                          className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )
                })}
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
    </section>
  )
}
