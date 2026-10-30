import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { productsData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Products & Packages | AGURAFI Digital Marketing",
  description:
    "Explore our ready-to-deploy digital products, branding kits, social growth packages, and high-speed web engines.",
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Products Hero */}
        <section className="relative pb-12 pt-8 lg:pb-16">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[650px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.15), transparent 65%)" }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-tight">
                Curated Products &amp; <span className="text-gradient-gold">Growth Packages</span>
              </h1>
              <p className="mt-3 text-pretty text-xs sm:text-sm text-muted">
                Pre-engineered creative and technical deliverables designed to launch fast, look exceptional, and
                drive measurable business outcomes.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="relative pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productsData.map((product, index) => (
                <Reveal key={product.id} delay={index * 60}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/45 hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                    <div>
                      {/* Visual Preview Image */}
                      {product.imageSrc && (
                        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-xl bg-black/40 border border-white/10">
                          <Image
                            src={product.imageSrc}
                            alt={product.title}
                            fill
                            sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-card via-black/20 to-transparent" />
                          <div className="absolute top-2.5 left-2.5 flex size-8 items-center justify-center rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-accent">
                            <product.icon className="size-4" />
                          </div>
                          {product.badge && (
                            <span className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full border border-primary/30 bg-black/70 px-2.5 py-0.5 text-[10px] font-bold text-accent backdrop-blur-md">
                              <Sparkles className="size-2.5" />
                              {product.badge}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Top Category Badge */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-muted uppercase tracking-wider">
                          {product.category}
                        </span>
                        {product.turnaround && (
                          <div className="flex items-center gap-1 text-[11px] font-medium text-muted/80">
                            <Clock className="size-3 text-accent" />
                            <span>{product.turnaround}</span>
                          </div>
                        )}
                      </div>

                      <h2 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                        {product.title}
                      </h2>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {product.description}
                      </p>

                      {/* Turnaround Time */}
                      {product.turnaround && (
                        <div className="mt-4 flex items-center gap-1.5 text-[11px] font-medium text-muted/80">
                          <Clock className="size-3.5 text-accent" />
                          <span>Delivery: {product.turnaround}</span>
                        </div>
                      )}

                      {/* Feature Bullet Points */}
                      <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted/70">
                          Included Deliverables
                        </span>
                        <ul className="space-y-1.5">
                          {product.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2 text-xs text-foreground/85">
                              <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-accent" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <Link
                        href={`/contact?product=${product.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[#c68c12] px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 active:scale-95"
                      >
                        Inquire About This Package
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Scope / Questions Banner */}
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#062a25] via-[#0b4238] to-[#0a4d3c] px-6 py-12 text-center sm:px-10 sm:py-16">
              <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">
                Need a Custom Package or Retainer?
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-muted">
                We regularly assemble custom combinations of ad management, content production, and full-stack
                development tailored to your unique requirements.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-xs font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
                >
                  Contact Our Team
                  <ArrowRight className="size-3.5" />
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
