import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section id="final-cta" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-white/15 bg-gradient-to-b from-[#09352e] via-[#062a24] to-[#041f1b] px-6 py-16 text-center sm:px-12 lg:px-16 lg:py-24 shadow-2xl">
          
          {/* Subtle warm gold ambient radiance */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
            style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-foreground leading-[1.2]">
              Ready to Build Something <span className="text-gradient-gold">Great Together?</span>
            </h2>

            <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-muted">
              Tell us your business goals, target audience, and challenges. We will prepare a clear, strategic roadmap
              to help your brand elevate its reach and drive measurable sales.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#c99116] px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(228,172,35,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(228,172,35,0.45)] active:translate-y-0"
              >
                <span>Contact Us</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.1] hover:border-white/25 active:translate-y-0"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Direct consultation with senior strategists &bull; Clear roadmaps &bull; No obligation
            </p>
          </div>

        </div>
      </Reveal>
      </div>
    </section>
  )
}
