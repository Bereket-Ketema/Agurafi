import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, Target, Lightbulb, Users, CheckCircle2, ShieldCheck, Zap, Award, Briefcase } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { VideoShowcase } from "@/components/video-showcase"
import { aboutHighlights, teamMembers } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us | AGURAFI Digital Marketing",
  description:
    "Learn about Agurafi Digital Marketing—our mission, vision, core values, and the multidisciplinary team dedicated to scaling your brand.",
}

const aboutMetricCards = [
  {
    icon: Award,
    value: "3+",
    label: "Years of Experience",
    detail: "Proven track record in brand growth",
  },
  {
    icon: Users,
    value: "10+",
    label: "Specialists on Team",
    detail: "Cross-functional creative & tech talent",
  },
  {
    icon: Briefcase,
    value: "60+",
    label: "Industries Served",
    detail: "Tailored strategies across diverse sectors",
  },
]

const coreValues = [
  {
    icon: Target,
    title: "Strategy-First Mindset",
    description:
      "We believe creative assets and ad campaigns must always serve tangible business objectives—never creative vanity for its own sake.",
  },
  {
    icon: Lightbulb,
    title: "Creative Integrity",
    description:
      "From bespoke visual identities to high-retention video production, we hold our craft to the highest modern aesthetic standards.",
  },
  {
    icon: Zap,
    title: "Execution Velocity",
    description:
      "In digital markets, speed and agility matter. We move fast from discovery to launch, testing and refining in real-time.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description:
      "We operate with clear communication, honest reporting, and direct access to the specialists working on your brand.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* About Hero Section with Rich Emerald-Obsidian Gradient Background */}
        <section className="relative pb-16 pt-10 lg:pb-24 bg-gradient-to-b from-[#021310] via-[#04201c] to-[#021310] border-b border-white/5">
          {/* Ambient Glows */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[650px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.18), transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute right-10 bottom-0 -z-10 size-[450px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)" }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-tight">
                Empowering Brands Through <span className="text-gradient-gold">Creative Strategy &amp; Technology</span>
              </h1>
              <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-muted">
                Agurafi is a modern digital marketing and development agency based in Addis Ababa. We partner with
                ambitious businesses to build memorable brand identities, launch high-performing ad campaigns, and
                engineer custom digital platforms that accelerate growth.
              </p>
            </Reveal>

            {/* Key Agency Statistics - Refined, Proportional Metric Cards */}
            <Reveal delay={150} className="mt-10 sm:mt-12">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3 sm:gap-4 max-w-4xl mx-auto">
                {aboutMetricCards.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative flex items-center gap-3.5 rounded-2xl border border-white/10 bg-gradient-to-b from-surface/80 to-[#04201c]/90 p-4 sm:p-5 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-accent transition-transform duration-300 group-hover:scale-105">
                      <stat.icon className="size-5" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-accent">
                          {stat.value}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-foreground/95 leading-tight">
                        {stat.label}
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted">
                        {stat.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision Section - Dynamic, Visually Compelling & Editorial */}
        <section className="relative py-14 lg:py-20 overflow-hidden border-t border-white/5">
          {/* Dynamic Background Image & Alternative Strategic Compass Watermark */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/showcase/workflow-pipeline-bg.jpg"
              alt=""
              fill
              unoptimized
              className="object-cover object-center opacity-30 lg:opacity-35 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/80 to-[#04201c]" />
            <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-primary/10 via-transparent to-transparent" />
            {/* Alternative Watermark: Strategic Compass & Horizon Orbit */}
            <div className="absolute -left-12 -bottom-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-primary">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                <circle cx="100" cy="100" r="85" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="65" strokeWidth="1.5" />
                <circle cx="100" cy="100" r="45" strokeWidth="0.75" />
                <path d="M 100,5 L 100,195 M 5,100 L 195,100" strokeWidth="0.75" />
                <polygon points="100,20 115,85 180,100 115,115 100,180 85,115 20,100 85,85" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
              {/* Mission Card with Brand Identity Element */}
              <Reveal>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#062923] via-[#041c18] to-black/80 p-7 sm:p-9 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
                  {/* Subtle Brand Background Accent */}
                  <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-accent shadow-inner">
                        <Target className="size-6" />
                      </div>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                        Our Mission
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl font-extrabold sm:text-3xl text-foreground leading-snug">
                      Turning Brand Potential Into <span className="text-gradient-gold">Predictable Market Dominance</span>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
                      Our mission is to eliminate marketing guesswork for ambitious Ethiopian and regional enterprises.
                      We engineer full-funnel digital systems that connect high-retention video storytelling, conversion design,
                      and targeted paid acquisition to drive quantifiable revenue growth.
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3.5">
                        <span className="text-xs font-bold text-accent block">Data-Driven Strategy</span>
                        <p className="text-[12px] text-muted mt-1">Every Birr invested mapped to measurable KPIs & conversion ROI.</p>
                      </div>
                      <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3.5">
                        <span className="text-xs font-bold text-accent block">Creative Excellence</span>
                        <p className="text-[12px] text-muted mt-1">Cinema-grade production and bespoke visual identities that command authority.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Vision Card with Real Team & Summit Presence Graphic */}
              <Reveal delay={120}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#062923] via-[#041c18] to-black/80 p-7 sm:p-9 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
                  {/* Subtle Glow Accent */}
                  <div className="pointer-events-none absolute -left-16 -bottom-16 size-64 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/15 text-accent shadow-inner">
                        <Compass className="size-6" />
                      </div>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                        Our Vision
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl font-extrabold sm:text-3xl text-foreground leading-snug">
                      The Definitive <span className="text-gradient-gold">Digital Transformation Catalyst</span>
                    </h2>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted">
                      We envision a thriving African digital ecosystem where high-growth brands command world-class
                      digital presence. Agurafi bridges international-standard production with deep local audience
                      insights, setting the benchmark for brand authority and technological performance.
                    </p>
                  </div>

                    {/* Vision Studio & Strategic Presence Graphic */}
                    <div className="mt-8 border-t border-white/10 pt-6">
                      <div className="relative h-28 w-full overflow-hidden rounded-xl border border-white/10 shadow-lg group-hover:border-primary/40 transition-colors">
                        <Image
                          src="/images/about/agurafi-digital-vision.jpg"
                          alt="Agurafi Digital Creative Headquarters & Strategy Hub"
                          fill
                          unoptimized
                          className="object-cover object-center brightness-95 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                          <div className="flex items-center gap-1.5 text-xs font-semibold">
                            <span className="size-2 rounded-full bg-accent animate-pulse" />
                            <span>Agurafi Digital Strategy Hub</span>
                          </div>
                          <span className="text-[10px] font-mono text-white/90 bg-black/70 px-2 py-0.5 rounded border border-white/15">
                            Addis Ababa &bull; Global
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Core Values Section - Enhanced with Cinematic Background & Value Prism Watermark */}
          <section className="relative py-16 lg:py-24 overflow-hidden border-t border-white/10">
            {/* Dynamic Background Image with Depth & Obsidian-Emerald Overlay */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/showcase/workflow-pipeline-bg.jpg"
                alt="Agurafi Studio Workflow"
                fill
                unoptimized
                className="object-cover object-center opacity-30 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/85 to-[#04201c]" />
              <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-primary/10 via-transparent to-transparent" />
              
              {/* Alternative Watermark: Architectural Diamond Value Prism */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.07] pointer-events-none select-none text-primary">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                  <polygon points="100,15 185,100 100,185 15,100" strokeWidth="1.5" />
                  <polygon points="100,45 155,100 100,155 45,100" strokeWidth="1" strokeDasharray="3 3" />
                  <polygon points="100,70 130,100 100,130 70,100" strokeWidth="1.5" />
                  <line x1="100" y1="15" x2="100" y2="185" strokeWidth="0.75" />
                  <line x1="15" y1="100" x2="185" y2="100" strokeWidth="0.75" />
                </svg>
              </div>
            </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Philosophy</span>
              <h2 className="mt-2 text-balance font-heading text-2xl sm:text-3xl lg:text-[38px] font-extrabold">
                Core Values &amp; Guiding Principles
              </h2>
              <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted">
                These non-negotiable principles govern every creative sprint, ad dollar spent, and software system we deploy.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => (
                <Reveal key={value.title} delay={index * 80}>
                  <div className="group relative flex h-full flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.08]">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-accent border border-primary/20 transition-transform group-hover:scale-105">
                          <value.icon className="size-5" />
                        </div>
                        <span className="font-mono text-sm font-bold text-accent/60 group-hover:text-accent transition-colors">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mb-2 font-heading text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-muted">
                        {value.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-medium text-accent/80">
                      <CheckCircle2 className="size-3 text-primary" />
                      <span>Agurafi Standard</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How We Approach Client Challenges - Optimized Spacing & Full Depth */}
        <section className="relative py-12 lg:py-16 overflow-hidden border-t border-white/5">
          {/* Dynamic Background Image & Subtle 3D Logo Watermark */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/showcase/workflow-pipeline-bg.jpg"
              alt=""
              fill
              unoptimized
              className="object-cover object-center opacity-30 lg:opacity-35 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/80 to-[#04201c]" />
            <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-primary/10 via-transparent to-transparent" />
            {/* Alternative Watermark: Strategic Flow Pipeline */}
            <div className="absolute -right-12 -top-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-accent">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                <path d="M 20,40 Q 70,40 100,100 T 180,160" strokeWidth="2" strokeDasharray="6 4" />
                <path d="M 20,80 Q 70,80 100,120 T 180,120" strokeWidth="1.5" />
                <path d="M 20,120 Q 70,120 100,140 T 180,80" strokeWidth="1" />
                <circle cx="100" cy="100" r="12" strokeWidth="1.5" />
                <circle cx="20" cy="40" r="5" fill="currentColor" />
                <circle cx="180" cy="160" r="6" fill="currentColor" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#062a24]/90 via-[#031c18]/95 to-black/95 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-accent mb-3">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Strategic Framework
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                    How We Approach Client Challenges
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                    We start by dissecting your market positioning, customer economics, and sales friction before writing a single headline or
                    allocating ad budget. By aligning creative messaging directly with buying intent, we transform raw attention into recurring client revenue.
                  </p>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-white/10 py-5">
                    <div>
                      <span className="font-mono text-xs font-bold text-accent">01. Audit</span>
                      <p className="text-[12px] text-muted mt-0.5">Deep funnel diagnosis</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-accent">02. Design</span>
                      <p className="text-[12px] text-muted mt-0.5">High-retention assets</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-accent">03. Launch</span>
                      <p className="text-[12px] text-muted mt-0.5">Multi-channel rollout</p>
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-accent">04. Scale</span>
                      <p className="text-[12px] text-muted mt-0.5">Algorithmic iteration</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-6 py-3 text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      Explore Our Services
                      <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3 text-xs sm:text-sm font-semibold text-foreground transition-all hover:bg-white/10"
                    >
                      Talk With Our Team
                    </Link>
                  </div>
                </div>

                <div className="space-y-3 lg:col-span-5">
                  {aboutHighlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/[0.06]"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-accent">
                        <highlight.icon className="size-4.5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-sm sm:text-base font-bold">{highlight.title}</h4>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Work in Motion / Production Showcase */}
        <VideoShowcase />

        {/* Team Showcase */}
        <section className="relative py-14 lg:py-20 overflow-hidden border-t border-white/5">
          {/* Dynamic Background Image & Subtle 3D Logo Watermark */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/showcase/workflow-pipeline-bg.jpg"
              alt=""
              fill
              unoptimized
              className="object-cover object-center opacity-30 lg:opacity-35 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/80 to-[#04201c]" />
            <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-primary/10 via-transparent to-transparent" />
            {/* Alternative Watermark: Creative Studio Aperture */}
            <div className="absolute -left-12 -bottom-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-primary">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                <circle cx="100" cy="100" r="85" strokeWidth="1.5" />
                <polygon points="100,20 160,55 180,120 140,175 70,180 25,130 35,65" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 100,15 L 145,85 L 85,155 L 35,100 Z" strokeWidth="1" />
                <circle cx="100" cy="100" r="28" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-14 max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Our Talent</span>
              <h2 className="mt-2 text-balance font-heading text-2xl sm:text-3xl lg:text-[38px] font-extrabold">
                Meet The Specialists Behind Agurafi
              </h2>
              <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted">
                A dedicated multidisciplinary team of creative directors, developers, videographers, and growth strategists committed to your success.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={index * 100}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/[0.07]">
                    <div className="relative mx-auto mb-5 size-28 overflow-hidden rounded-full border-2 border-primary/30 p-1">
                      <div className="relative size-full overflow-hidden rounded-full">
                        <Image
                          src={member.imageSrc}
                          alt={member.name}
                          fill
                          sizes="112px"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                    <span className="mt-1.5 inline-block rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-accent">
                      {member.role}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Discuss - Open Editorial Studio Aesthetic (No Enclosed Box) */}
        <section className="relative py-20 lg:py-28 overflow-hidden border-t border-white/10">
          {/* Studio Ambient Background Image with Dark Emerald/Obsidian Overlay */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/about/about-studio-bg.jpg"
              alt="Creative Agency Studio Aesthetic"
              fill
              unoptimized
              className="object-cover object-center opacity-30 brightness-75 filter blur-[1px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background" />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full opacity-20 blur-[120px]"
              style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
            />
          </div>

          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-foreground">
                Ready to Discuss Your Brand&apos;s <span className="text-gradient-gold">Next Chapter?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
                Schedule a consultation to see how our brand strategy, cinematic production, and targeted digital engineering can accelerate your enterprise.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(228,172,35,0.35)] transition-all hover:-translate-y-0.5"
                >
                  Contact Our Team
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-white/12 hover:border-white/40"
                >
                  View Services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
