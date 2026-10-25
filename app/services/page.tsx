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
        {/* Services Page Hero */}
        <section className="relative px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[650px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.15), transparent 65%)" }}
          />

          <div className="mx-auto max-w-7xl">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                Our Capabilities
              </span>
              <h1 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                Services Built to <span className="text-gradient-gold">Elevate &amp; Scale Your Brand</span>
              </h1>
              <p className="mt-4 text-pretty text-sm text-muted sm:text-base">
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
        <section className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-7xl space-y-8 lg:space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <Reveal delay={index % 2 === 0 ? 0 : 50}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                      {/* Left Side: Suitable Visual Image */}
                      <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-full lg:col-span-4 overflow-hidden bg-black/40">
                        {service.imageSrc && (
                          <Image
                            src={service.imageSrc}
                            alt={service.title}
                            fill
                            sizes="(min-width: 1024px) 380px, 100vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-card" />
                        
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

        {/* Final CTA Banner */}
        <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#062a25] via-[#0b4238] to-[#0a4d3c] px-6 py-12 text-center sm:px-10 sm:py-16">
              <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
                Ready to Discuss Your Brand&apos;s Objectives?
              </h2>
              <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-muted">
                Connect with our team to map out a clear roadmap for your business.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-6 py-3 text-xs font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
                >
                  Contact Us
                  <ArrowRight className="size-3.5" />
                </Link>
                <Link
                  href="/products"
                  className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold transition-all hover:bg-white/10"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
