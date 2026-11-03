import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function ServicesOverview() {
  return (
    <section id="services-overview" className="relative py-14 sm:py-16 lg:py-20 overflow-hidden border-t border-white/5">
      {/* Dynamic Background Image & Subtle 3D Logo Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/showcase/workflow-pipeline-bg.jpg"
          alt=""
          fill
          unoptimized
          className="object-cover object-center opacity-30 lg:opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/80 to-[#04201c]" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-primary/10 via-transparent to-transparent" />
        {/* Alternative Watermark: 9-Node Capabilities Matrix */}
        <div className="absolute -left-12 -top-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-primary">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
            <rect x="30" y="30" width="140" height="140" rx="16" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
            <circle cx="100" cy="50" r="8" strokeWidth="1.5" />
            <circle cx="150" cy="50" r="8" fill="currentColor" />
            <circle cx="50" cy="100" r="8" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="12" strokeWidth="2" />
            <circle cx="150" cy="100" r="8" strokeWidth="1.5" />
            <circle cx="50" cy="150" r="8" fill="currentColor" />
            <circle cx="100" cy="150" r="8" strokeWidth="1.5" />
            <circle cx="150" cy="150" r="8" fill="currentColor" />
            <line x1="50" y1="50" x2="150" y2="150" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="150" y1="50" x2="50" y2="150" strokeWidth="0.75" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-10 lg:mb-12 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-foreground">
            What We <span className="text-gradient-gold">Do</span>
          </h2>
          <p className="mt-2.5 text-pretty text-xs sm:text-sm leading-relaxed text-muted">
            End-to-end digital capabilities designed to generate reach, authority, and sustainable revenue.
          </p>
        </Reveal>

        {/* 9 Services in a Compact, Sharp Architectural Card Layout (rounded-none) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4.5">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 40}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-none border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.06] hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
                
                {/* Visual Image Header (rounded-none) */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none bg-black/40">
                  {service.imageSrc && (
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04201c] via-black/20 to-transparent" />
                  
                  {/* Service Icon Pill (rounded-none) */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 rounded-none border border-white/15 bg-black/75 px-2 py-0.5 text-accent backdrop-blur-md shadow-xs">
                    <service.icon className="size-3 text-primary" />
                    <span className="font-mono text-[10.5px] font-semibold text-white/90">0{index + 1}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5">
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary transition-all duration-200 group-hover:translate-x-1 hover:text-accent"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="size-3" />
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
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-8 py-3.5 text-sm font-semibold text-accent transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 hover:-translate-y-0.5"
          >
            <span>Explore Complete Services & Deliverables</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
