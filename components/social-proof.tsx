import Image from "next/image"
import { partnerLogos } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function SocialProof() {
  return (
    <section id="clients" className="relative py-16 lg:py-24 overflow-hidden border-y border-white/5">
      {/* Dynamic Background Image & Subtle 3D Logo Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/showcase/workflow-pipeline-bg.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/80 to-[#04201c]" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-primary/10 via-transparent to-transparent" />
        {/* Alternative Watermark: Commercial Market Constellation */}
        <div className="absolute -left-12 -bottom-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-accent">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
            <circle cx="100" cy="100" r="85" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="60" cy="80" r="5" fill="currentColor" />
            <circle cx="140" cy="70" r="6" fill="currentColor" />
            <circle cx="110" cy="130" r="5" fill="currentColor" />
            <circle cx="150" cy="140" r="4" fill="currentColor" />
            <circle cx="50" cy="130" r="4" fill="currentColor" />
            <line x1="60" y1="80" x2="140" y2="70" strokeWidth="1" />
            <line x1="140" y1="70" x2="110" y2="130" strokeWidth="1" />
            <line x1="110" y1="130" x2="50" y2="130" strokeWidth="1" />
            <line x1="50" y1="130" x2="60" y2="80" strokeWidth="1" />
            <line x1="110" y1="130" x2="150" y2="140" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-foreground">
            Trusted by <span className="text-gradient-gold">Growing Brands</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed text-pretty">
            Delivering performance campaigns, brand identities, and modern web solutions across diverse industries.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {/* Dark Glassmorphic Responsive Grid with Enhanced Icon Visibility */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4 lg:gap-5">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex h-24 sm:h-28 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] p-3 shadow-md backdrop-blur-md opacity-90 transition-all duration-300 hover:opacity-100 hover:bg-white/[0.08] hover:border-primary/50 hover:shadow-[0_10px_25px_rgba(228,172,35,0.18)] hover:-translate-y-0.5"
              >
                <div className="relative flex size-full items-center justify-center">
                  <Image
                    src={partner.imageSrc}
                    alt={partner.name}
                    width={220}
                    height={100}
                    style={{ width: "auto" }}
                    sizes="(min-width: 1024px) 200px, (min-width: 640px) 160px, 140px"
                    className="max-h-16 sm:max-h-18 w-auto max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-108"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
