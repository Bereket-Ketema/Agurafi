import Image from "next/image"
import { partnerLogos } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Clients() {
  return (
    <section id="portfolio" className="px-6 py-20 text-center lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.12em] text-primary">
          Our Partners
        </span>
        <Reveal>
          <h2 className="text-balance font-heading text-[32px] font-extrabold leading-tight lg:text-[42px]">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[16.5px] leading-relaxed text-muted">
            We&apos;ve helped these brands grow their business, increase sales, and strengthen their brand
            awareness.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <ul className="mt-14 flex flex-wrap justify-center gap-3 sm:gap-4">
            {partnerLogos.map((logo) => (
              <li
                key={logo.imageSrc}
                className="flex h-28 w-[calc(50%-0.375rem)] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-3 sm:h-32 sm:w-[calc(33.333%-0.675rem)] lg:w-[calc(25%-0.75rem)]"
              >
                <Image
                  src={logo.imageSrc}
                  alt={logo.name}
                  width={320}
                  height={160}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 30vw, 45vw"
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
