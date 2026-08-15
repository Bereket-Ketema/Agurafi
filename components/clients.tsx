import Image from "next/image"
import { clientLogos } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Clients() {
  return (
    <section id="portfolio" className="px-6 py-24 text-center lg:px-16 lg:py-36">
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
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="glass flex h-28 items-center justify-center rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-primary/[0.06]"
              >
                <Image
                  src={client.imageSrc || "/placeholder.svg"}
                  alt={client.name}
                  width={100}
                  height={48}
                  className="h-auto max-h-12 w-auto max-w-full object-contain opacity-90 grayscale transition-all group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
