import Image from "next/image"
import { partnerLogos } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function SocialProof() {
  return (
    <section id="clients" className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24 overflow-hidden border-y border-white/5 bg-[#031c18]/40">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Proven Collaborations
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl text-foreground">
            Trusted by <span className="text-gradient-gold">Growing Brands</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed text-pretty">
            Delivering performance campaigns, brand identities, and modern web solutions across diverse industries.
          </p>
        </Reveal>

        <Reveal delay={120}>
          {/* Clean, Non-Duplicated Responsive Grid of All Client Logos */}
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4 lg:gap-5">
            {partnerLogos.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex h-24 sm:h-26 items-center justify-center rounded-2xl border border-white/10 bg-white/95 p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_12px_24px_rgba(228,172,35,0.18)]"
              >
                <div className="relative flex size-full items-center justify-center">
                  <Image
                    src={partner.imageSrc}
                    alt={partner.name}
                    width={180}
                    height={80}
                    sizes="(min-width: 1024px) 180px, (min-width: 640px) 150px, 120px"
                    className="max-h-12 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
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
