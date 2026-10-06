import Image from "next/image"
import { partnerLogos } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Clients() {
  const marqueeLogos = [...partnerLogos, ...partnerLogos]

  return (
    <section id="portfolio" className="py-20 text-center lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
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
      </div>

      <Reveal delay={150}>
        <div className="group relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex h-16 w-28 shrink-0 items-center justify-center sm:h-20 sm:w-36">
                <Image
                  src={logo.imageSrc || "/placeholder.svg"}
                  alt={logo.name}
                  width={140}
                  height={80}
                  className="h-full w-auto max-h-16 object-contain opacity-75 grayscale transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 sm:max-h-20"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
