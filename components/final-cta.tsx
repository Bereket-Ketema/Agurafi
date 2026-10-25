import Link from "next/link"
import { ArrowRight, MessageSquareQuote } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section id="final-cta" className="relative px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-36 lg:pt-14 overflow-hidden">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-[#062a25] via-[#0b4238] to-[#041f1b] px-6 py-16 text-center sm:rounded-[52px] sm:px-10 lg:px-16 lg:py-24 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
          {/* Multi-Color Ambient Curvature Glow Ribbons (Gold, Electric Blue & Coral) */}
          <div
            className="pointer-events-none absolute left-1/2 top-[-220px] size-[600px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.22), transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-32 size-[450px] rounded-full opacity-25 blur-[90px]"
            style={{ background: "radial-gradient(circle, #3b82f6, transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute -top-32 -right-32 size-[450px] rounded-full opacity-22 blur-[90px]"
            style={{ background: "radial-gradient(circle, #ff6b4a, transparent 65%)" }}
          />

          <div className="relative z-10">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
              <MessageSquareQuote className="size-3.5" />
              Let&apos;s Connect
            </span>

            <h2 className="mx-auto max-w-3xl text-balance font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[46px]">
              Ready to Build Something <span className="text-gradient-gold">Great Together?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Tell us your business goals, target audience, and challenges. We will prepare a clear, strategic roadmap
              to help your brand elevate its reach and drive measurable sales.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-10 py-4 text-base font-semibold text-primary-foreground shadow-[0_10px_28px_rgba(228,172,35,0.38)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(228,172,35,0.55)] active:scale-95"
              >
                Contact Us
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/services"
                className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 active:scale-95"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
