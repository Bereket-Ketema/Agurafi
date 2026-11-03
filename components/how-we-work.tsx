"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { workStepsData } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { ArrowRight, CheckCircle2, Sparkles, Activity, ShieldCheck, Zap } from "lucide-react"

// Rich stage telemetry details for animated interactive display
const stageDetails = [
  {
    step: "01",
    tag: "DISCOVERY & AUDIT",
    title: "Deep-Dive Discovery & Strategy Architecture",
    description: "We audit your complete digital footprint, dissect competitor positioning, and engineer a high-yield growth roadmap tailored to your target audience.",
    kpi: "360° Diagnostic",
    metricLabel: "Audit Depth",
    statusText: "Analysis Protocol Ready",
    deliverables: [
      "Comprehensive Digital Footprint & Competitor Audit",
      "Ideal Customer Profile (ICP) & Intent Funnel Mapping",
      "Full Conversion Tracking & Analytics Infrastructure Setup",
      "Custom 90-Day Execution & Channel Prioritization Roadmap",
    ],
    accentColor: "from-amber-400 to-primary",
  },
  {
    step: "02",
    tag: "CREATIVE & DEPLOYMENT",
    title: "Precision Design, Production & Funnel Delivery",
    description: "Our in-house creative directors, video editors, and full-stack developers build your cinematic video assets, brand identity, and high-converting web apps.",
    kpi: "100% Bespoke",
    metricLabel: "Production Quality",
    statusText: "Deployment Sprint Engaged",
    deliverables: [
      "High-Retention Cinematic Video Ads & Motion Graphics",
      "Conversion-Engineered UX/UI Web & Mobile Funnels",
      "Omnichannel Targeted Ad Campaigns (TikTok, Meta, Google)",
      "Cohesive Brand Identity Guidelines & Asset Library",
    ],
    accentColor: "from-emerald-400 to-teal-400",
  },
  {
    step: "03",
    tag: "OPTIMIZATION & SCALE",
    title: "Continuous Telemetry, Optimization & Compounding Scale",
    description: "We monitor live campaign performance, execute aggressive conversion-rate optimization (CRO), and scale budget allocation to multiply revenue.",
    kpi: "4.8x Avg ROAS",
    metricLabel: "Target Momentum",
    statusText: "Scaling Engine Active",
    deliverables: [
      "Real-Time Data Telemetry & KPI Attribution Reporting",
      "A/B Creative & Landing Page Variant Split Testing",
      "Algorithmic Bid Optimization & Budget Reallocation",
      "Ongoing Dedicated Account Management & Growth Advisory",
    ],
    accentColor: "from-primary to-accent",
  },
]

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Observe section visibility to drive automatic progression
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Auto-cycle through stages when in view, or change on scroll interaction
  useEffect(() => {
    if (!isInView) return

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stageDetails.length)
    }, 5500)

    return () => clearInterval(timer)
  }, [isInView, activeStep])

  // Scroll listener to smoothly shift stages based on user scroll position within the section
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // If section is centered or in the active scrolling zone
      if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
        const totalTravel = rect.height
        const progress = Math.min(Math.max((windowHeight * 0.4 - rect.top) / totalTravel, 0), 0.99)
        const newStep = Math.floor(progress * stageDetails.length)
        setActiveStep(newStep)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentStage = stageDetails[activeStep]

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden border-t border-white/10"
    >
      {/* Dynamic Background Image with Depth & Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/showcase/workflow-pipeline-bg.jpg"
          alt="Agurafi Digital Workflow Pipeline"
          fill
          unoptimized
          className="object-cover object-center opacity-45 lg:opacity-65 scale-105"
        />
        {/* Deep obsidian-emerald cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/70 to-[#04201c]" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-primary/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="mx-auto mb-12 lg:mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-mono font-semibold text-accent mb-4">
            <Activity className="size-3.5 text-primary animate-pulse" />
            <span>INTERACTIVE EXECUTION FRAMEWORK</span>
          </div>
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-foreground leading-[1.18]">
            How We Work With <span className="text-gradient-gold">You</span>
          </h2>
          <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-muted max-w-2xl mx-auto">
            A battle-tested 3-stage delivery pipeline engineered to turn ambitious brand visions into high-velocity revenue machines.
          </p>
        </Reveal>

        {/* Interactive Theater: 3 Selectors (Left) + Animated Stage Display Console (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: 3 Stage Selector Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4">
            {workStepsData.map((item, index) => {
              const isActive = activeStep === index
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`group relative text-left rounded-xl p-4 sm:p-5 transition-all duration-300 backdrop-blur-md border cursor-pointer ${
                    isActive
                      ? "border-primary/70 bg-gradient-to-r from-primary/[0.18] to-white/[0.06] shadow-[0_12px_36px_rgba(228,172,35,0.22)] translate-x-1.5 opacity-100"
                      : "border-white/10 bg-white/[0.03] opacity-75 hover:opacity-100 hover:border-primary/50 hover:bg-white/[0.08] hover:translate-x-1 hover:shadow-[0_8px_25px_rgba(228,172,35,0.15)]"
                  }`}
                >
                  {/* Active Indicator Bar on Left */}
                  <div
                    className={`absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all duration-300 ${
                      isActive ? "bg-accent shadow-[0_0_12px_#e4ac23]" : "bg-transparent group-hover:bg-white/20"
                    }`}
                  />

                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                        PHASE {item.step}
                      </span>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 rounded bg-emerald-500/15 border border-emerald-500/30 px-1.5 py-0.5 text-[9.5px] font-mono text-emerald-400">
                          <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs text-muted/70">
                      STAGE 0{index + 1}
                    </span>
                  </div>

                  <div className="mt-3 flex items-start gap-3.5">
                    <div
                      className={`size-9 shrink-0 rounded-lg flex items-center justify-center font-heading font-black text-sm transition-all duration-300 border ${
                        isActive
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_15px_rgba(228,172,35,0.4)]"
                          : "border-white/15 bg-black/40 text-muted group-hover:text-white"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3
                        className={`font-heading text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-white" : "text-white/85 group-hover:text-accent"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Animated Progress Bar under Active Item */}
                  {isActive && (
                    <div className="mt-3.5 h-1 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent animate-[pulse_2s_infinite]" />
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right Column: Animated Live Stage Console */}
          <div className="lg:col-span-7">
            <div className="relative h-full rounded-2xl border-2 border-primary/30 bg-gradient-to-b from-[#062621]/95 via-[#041d19]/95 to-[#021310]/98 p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl flex flex-col justify-between overflow-hidden">
              
              {/* Subtle Scanning Mesh Grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Console Top Header Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-accent">&gt;_</span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-white/90">
                    PROTOCOL // {currentStage.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{currentStage.statusText}</span>
                </div>
              </div>

              {/* Dynamic Animated Content Body */}
              <div
                key={activeStep}
                className="relative z-10 my-6 flex-1 flex flex-col justify-between animate-[fadeIn_0.4s_ease-out]"
              >
                <div>
                  {/* Badge & Stage Number */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="font-mono text-sm font-black text-accent">
                      PHASE {currentStage.step}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-[10.5px] font-mono text-white/80">
                      <Sparkles className="size-3 text-primary" />
                      Stage Milestone
                    </span>
                  </div>

                  {/* Stage Headline */}
                  <h3 className="font-heading text-xl sm:text-2xl lg:text-[26px] font-extrabold text-white leading-snug">
                    {currentStage.title}
                  </h3>

                  {/* Stage Narrative */}
                  <p className="mt-2.5 text-xs sm:text-sm text-muted/95 leading-relaxed">
                    {currentStage.description}
                  </p>

                  {/* Deliverables Checklist Grid */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="size-3.5 text-primary" />
                      Key Stage Deliverables &amp; Outcomes:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentStage.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5 text-xs text-foreground/90 transition-all hover:border-primary/40 hover:bg-white/[0.06]"
                        >
                          <CheckCircle2 className="size-3.5 shrink-0 text-primary mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Card & CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-center">
                      <div className="font-heading text-base font-extrabold text-accent">
                        {currentStage.kpi}
                      </div>
                      <div className="text-[10px] font-mono text-muted">
                        {currentStage.metricLabel}
                      </div>
                    </div>
                    <div className="hidden sm:block text-xs text-muted/80">
                      <span>Step {activeStep + 1} of 3</span>
                      <div className="font-semibold text-white/90">Deterministic Roadmap</div>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(228,172,35,0.3)]"
                  >
                    <span>Initiate Stage 0{activeStep + 1}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
