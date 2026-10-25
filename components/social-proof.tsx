import Image from "next/image"
import { partnerLogos } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function SocialProof() {
  // 12 verified partner brands duplicated for seamless infinite marquee loop
  const row1 = [...partnerLogos, ...partnerLogos]
  const row2 = [...partnerLogos.slice(6), ...partnerLogos.slice(0, 6), ...partnerLogos.slice(6), ...partnerLogos.slice(0, 6)]

  return (
    <section id="credibility" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-2.5 inline-block rounded-full border border-primary/25 bg-primary/10 px-3.5 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Proven Collaborations
          </span>
          <h2 className="text-balance font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Trusted by <span className="text-gradient-gold">Growing Brands</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted">
            Delivering performance campaigns, brand identities, and modern web solutions across diverse industries.
          </p>
        </Reveal>

        <Reveal delay={100}>
          {/* Subtle Continuous Motion Marquee Container with edge gradients */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Left and Right Smooth Edge Gradient Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-36 z-10 bg-gradient-to-r from-[#04201c] via-[#04201c]/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-36 z-10 bg-gradient-to-l from-[#04201c] via-[#04201c]/90 to-transparent" />

            {/* Row 1: Slow Gentle Drift to Left */}
            <div className="mb-4 flex overflow-hidden">
              <div className="animate-marquee-slow-left flex gap-4 sm:gap-5 py-1">
                {row1.map((partner, idx) => (
                  <div
                    key={`row1-${partner.name}-${idx}`}
                    className="group flex h-28 sm:h-32 w-52 sm:w-60 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:scale-[1.04] hover:border-primary/50 hover:shadow-[0_12px_28px_rgba(228,172,35,0.25)]"
                  >
                    <div className="relative flex size-full items-center justify-center">
                      <Image
                        src={partner.imageSrc}
                        alt={partner.name}
                        width={240}
                        height={120}
                        sizes="(min-width: 640px) 240px, 200px"
                        className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Slow Gentle Drift to Right */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee-slow-right flex gap-4 sm:gap-5 py-1">
                {row2.map((partner, idx) => (
                  <div
                    key={`row2-${partner.name}-${idx}`}
                    className="group flex h-28 sm:h-32 w-52 sm:w-60 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:scale-[1.04] hover:border-primary/50 hover:shadow-[0_12px_28px_rgba(228,172,35,0.25)]"
                  >
                    <div className="relative flex size-full items-center justify-center">
                      <Image
                        src={partner.imageSrc}
                        alt={partner.name}
                        width={240}
                        height={120}
                        sizes="(min-width: 640px) 240px, 200px"
                        className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Hint Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] text-muted/70">
            <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Continuous Client Ecosystem &bull; Hover over any brand card to pause</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
