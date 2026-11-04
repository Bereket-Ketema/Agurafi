import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { services } from "@/lib/data"

export const metadata: Metadata = {
  title: "Services | AGURAFI Digital Marketing",
  description:
    "Explore our full suite of digital marketing, performance advertising, creative branding, video production, and full-stack development services.",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Services Page Hero with Rich Emerald-Obsidian Gradient Background */}
        <section className="relative pb-16 pt-10 lg:pb-20 bg-gradient-to-b from-[#021310] via-[#04201c] to-[#021310] border-b border-white/5">
          {/* Ambient Glows */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[650px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.18), transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute right-12 bottom-0 -z-10 size-[450px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)" }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-tight">
                Services Built to <span className="text-gradient-gold">Elevate &amp; Scale Your Brand</span>
              </h1>
              <p className="mt-3 text-pretty text-xs sm:text-sm text-muted">
                Creative visual production, high-ROI media buying, and scalable digital engineering.
              </p>
            </Reveal>

            {/* Symmetrically Aligned 3x3 Service Navigator */}
            <Reveal delay={100} className="mt-10">
              <div className="relative mx-auto max-w-5xl rounded-2xl border border-primary/25 bg-surface/80 p-3 sm:p-4 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-2.5">
                  {services.map((service, index) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 hover:text-accent shadow-sm"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-white/10 text-[10px] font-bold text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          0{index + 1}
                        </span>
                        <span className="truncate">{service.title.split("(")[0].trim()}</span>
                      </div>
                      <ArrowRight className="size-3 text-muted/60 transition-transform group-hover:translate-x-0.5 group-hover:text-accent shrink-0 ml-2" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Detailed Service Cards with Image on the Left Side */}
        <section className="relative py-8 lg:py-12 overflow-hidden border-t border-white/5">
          {/* Dynamic Background Image & Alternative Omnichannel Signal Watermark */}
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
            {/* Alternative Watermark: Omnichannel Hexagonal Signal Matrix */}
            <div className="absolute -left-12 -top-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-accent">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" strokeWidth="1.5" />
                <polygon points="100,45 145,72 145,128 100,155 55,128 55,72" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="22" strokeWidth="1.5" />
                <path d="M 100,20 L 100,78 M 170,60 L 120,90 M 170,140 L 120,110 M 100,180 L 100,122 M 30,140 L 80,110 M 30,60 L 80,90" strokeWidth="0.75" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <Reveal delay={index % 2 === 0 ? 0 : 50}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      {/* Left Side: Suitable Visual Image or Real Production Video */}
                      <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-full lg:col-span-4 overflow-hidden bg-black/60">
                        {service.videoSrc ? (
                          <div className="relative size-full min-h-[280px] flex items-center justify-center bg-black">
                            <video
                              src={service.videoSrc}
                              poster={service.videoPoster}
                              controls
                              playsInline
                              loop
                              muted
                              preload="metadata"
                              className="size-full max-h-[380px] lg:max-h-full object-contain bg-black"
                            />
                          </div>
                        ) : service.imageSrc && (
                          <Image
                            src={service.imageSrc}
                            alt={service.title}
                            fill
                            sizes="(min-width: 1024px) 380px, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-card" />
                        
                        {/* Overlay Category Tag & Icon */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <div className="flex size-9 items-center justify-center rounded-xl bg-black/70 border border-white/20 text-accent backdrop-blur-md shadow-md">
                            <service.icon className="size-4.5" />
                          </div>
                          <span className="rounded-full bg-black/70 border border-white/20 px-2.5 py-0.5 text-[11px] font-bold text-accent backdrop-blur-md">
                            Capability 0{index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Right Side: Service Details, Problem, Solution & Deliverables */}
                      <div className="p-6 sm:p-8 lg:col-span-8 flex flex-col justify-between">
                        <div>
                          <h2 className="font-heading text-xl font-bold sm:text-2xl text-foreground">
                            {service.title}
                          </h2>
                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                            {service.description}
                          </p>

                          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {/* The Problem It Solves */}
                            {service.problem && (
                              <div className="rounded-xl border border-red-500/15 bg-red-500/[0.03] p-3.5">
                                <div className="flex items-start gap-2">
                                  <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-400" />
                                  <div>
                                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-red-300/90">
                                      The Hurdle
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-muted">
                                      {service.problem}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Our Strategic Solution */}
                            {service.solution && (
                              <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-3.5">
                                <div className="flex items-start gap-2">
                                  <Sparkles className="mt-0.5 size-4 shrink-0 text-accent" />
                                  <div>
                                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-accent">
                                      Agurafi Solution
                                    </h3>
                                    <p className="mt-1 text-xs leading-relaxed text-muted">
                                      {service.solution}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Deliverables */}
                          {service.deliverables && (
                            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                              <h3 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-muted">
                                Deliverables Included
                              </h3>
                              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                                {service.deliverables.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-foreground/85">
                                    <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-accent" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Supplementary Production & Output Specs (Fills bottom margin for video services) */}
                          {service.videoSrc && (
                            <div className="mt-4 rounded-xl border border-primary/25 bg-gradient-to-r from-primary/[0.08] to-transparent p-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                                  <Sparkles className="size-3 text-primary" />
                                  Production &amp; Output Capabilities
                                </span>
                                <span className="text-[10px] font-mono text-muted">4K UHD / 1080p 60FPS</span>
                              </div>
                              <p className="text-xs leading-relaxed text-muted">
                                {service.id === "video-editing-motion"
                                  ? "Engineered for maximum viewer retention through precision jump-cuts, kinetic text hierarchy, sound design layering, and cinema-grade LUT color grading tailored for TikTok, Reels, and YouTube Shorts."
                                  : "Complete end-to-end community operations and short-form video publishing that drives organic reach, algorithm signals, and direct-message conversion funnels for growing businesses."}
                              </p>

                              {/* Multi-Platform Specs to Completely Balance Card Height */}
                              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                                <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                                  <span className="font-semibold text-accent block">Multi-Platform Optimization</span>
                                  <p className="text-[11px] text-muted mt-0.5">Native aspect exports for TikTok (9:16), IG Reels (9:16), Feed (4:5) &amp; YouTube Shorts.</p>
                                </div>
                                <div className="rounded-lg border border-white/10 bg-black/40 p-2.5">
                                  <span className="font-semibold text-accent block">Audio &amp; Voiceover Mastering</span>
                                  <p className="text-[11px] text-muted mt-0.5">Commercial audio licensing, crisp vocal isolation, sound design, and frequency balancing.</p>
                                </div>
                              </div>

                              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                                <span className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 text-accent font-medium">
                                  DaVinci Resolve &amp; Premiere Pro
                                </span>
                                <span className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 text-foreground/90">
                                  Kinetic Motion &amp; Sound FX
                                </span>
                                <span className="rounded-md border border-white/10 bg-black/40 px-2 py-0.5 text-foreground/90">
                                  24-48h Sprinted Turnaround
                                </span>
                                <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-accent font-medium">
                                  9:16 Mobile Native
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
                          >
                            Inquire for Your Brand
                            <ArrowRight className="size-3.5" />
                          </Link>
                          <span className="text-[11px] text-muted">
                            Fast Turnaround &bull; Measurable ROI
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* Ready to Discuss - Open Editorial CTA (Box Removed, Label Removed, Font Optimized) */}
        <section className="relative py-20 lg:py-28 overflow-hidden border-t border-white/10">
          {/* Dynamic Background Image with Depth & Obsidian-Emerald Overlay */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/showcase/workflow-pipeline-bg.jpg"
              alt="Agurafi Digital Workflow Pipeline"
              fill
              unoptimized
              className="object-cover object-center opacity-35 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/85 to-[#04201c]" />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full opacity-20 blur-[130px]"
              style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
            />
            {/* Subtle Brand Logo Watermark */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 size-96 opacity-[0.06] pointer-events-none">
              <Image
                src="/images/branding/agurafi-3d-logo.png"
                alt="Agurafi 3D Logo Watermark"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-foreground">
                Ready to Discuss Your Brand&apos;s <span className="text-gradient-gold">Growth Objectives?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
                Connect with our team to map out a clear roadmap for creative production, advertising, and digital engineering tailored to your business.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(228,172,35,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Contact Our Team
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-white/12 hover:border-white/40"
                >
                  Explore Product Suites
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
