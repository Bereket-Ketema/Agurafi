import Image from "next/image"
import { partnerLogos } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function SocialProof() {
  return (
    <section id="clients" className="relative py-16 lg:py-24 overflow-hidden border-y border-white/5 bg-[#031c18]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-foreground">
            Trusted by <span className="text-gradient-gold">Growing Brands</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-muted leading-relaxed text-pretty">
            Delivering performance campaigns, brand identities, and modern web solutions across diverse industries.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {/* Clean, Non-Duplicated Responsive Grid with Prominent Logo Sizing and Restrained Radius */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4 lg:gap-5">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex h-24 sm:h-28 items-center justify-center rounded-xl border border-white/10 bg-white/95 p-2 sm:p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_24px_rgba(228,172,35,0.18)]"
              >
                <div className="relative flex size-full items-center justify-center">
                  <Image
                    src={partner.imageSrc}
                    alt={partner.name}
                    width={220}
                    height={100}
                    sizes="(min-width: 1024px) 200px, (min-width: 640px) 160px, 140px"
                    className="max-h-16 sm:max-h-20 w-auto max-w-[88%] object-contain transition-transform duration-300 group-hover:scale-105"
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
