import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function FinalCta() {
  return (
    <section id="final-cta" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/10">
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative py-10 text-center lg:py-14">
            <div className="relative z-10 mx-auto max-w-3xl">
              <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-foreground leading-tight">
                Ready to Build Something <span className="text-gradient-gold">Great Together?</span>
              </h2>

              <p className="mt-4 text-pretty text-base sm:text-lg leading-relaxed text-muted max-w-2xl mx-auto">
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.1] hover:border-white/30 active:translate-y-0"
                >
                  <span>Explore Services</span>
                </Link>
              </div>

              <p className="mt-8 text-xs text-muted-foreground font-medium">
                Direct consultation with senior strategists &bull; Clear roadmaps &bull; No obligation
              </p>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}
