import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function ServicesOverview() {
  return (
    <section id="services-overview" className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Core Services
          </span>
          <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[44px] text-foreground">
            What We <span className="text-gradient-gold">Do</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">
            End-to-end digital capabilities designed to generate reach, authority, and sustainable revenue.
          </p>
        </Reveal>

        {/* 9 Services in a Modern, Legible 3-Column Card Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 50}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  {service.imageSrc && (
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04201c] via-black/20 to-transparent" />
                  
                  {/* Floating Service Icon Pill */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2 rounded-xl border border-white/15 bg-black/60 px-3 py-1.5 text-accent backdrop-blur-md shadow-md">
                    <service.icon className="size-4" />
                    <span className="text-xs font-semibold text-white/90">0{index + 1}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary transition-all duration-200 group-hover:translate-x-1 hover:text-accent"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA to Full Services Breakdown */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-8 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 hover:-translate-y-0.5"
          >
            <span>Explore Complete Services & Deliverables</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
