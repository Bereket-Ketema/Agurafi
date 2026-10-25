import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/data"
import { Reveal } from "@/components/reveal"
import { CurvedDivider } from "@/components/curved-divider"

export function ServicesOverview() {
  return (
    <section id="services-overview" className="relative px-4 pt-16 pb-24 sm:px-6 lg:px-8 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Ambient Curvature Glow Ribbons (Electric Blue & Sunset Coral) */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 size-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-24 size-[500px] rounded-full opacity-18 blur-[100px]"
        style={{ background: "radial-gradient(circle, #ff6b4a, transparent 70%)" }}
      />
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-2.5 inline-block rounded-full border border-primary/25 bg-primary/10 px-3.5 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Core Services
          </span>
          <h2 className="text-balance font-heading text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            What We Do
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted">
            End-to-end digital capabilities designed to generate reach, authority, and revenue.
          </p>
        </Reveal>

        {/* Responsive Grid with Image on the Left Side of each card */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 40}>
              <div className="group relative flex h-full overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)]">
                {/* Left Side: Suitable Image */}
                <div className="relative w-28 sm:w-32 shrink-0 overflow-hidden bg-black/40">
                  {service.imageSrc && (
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      sizes="(min-width: 640px) 140px, 110px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  {/* Subtle gradient blend on right edge */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90" />
                  
                  {/* Overlay Icon */}
                  <div className="absolute top-2.5 left-2.5 flex size-7 items-center justify-center rounded-lg bg-black/60 border border-white/20 text-accent backdrop-blur-md shadow-sm">
                    <service.icon className="size-3.5" />
                  </div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-4.5 min-w-0">
                  <div>
                    <span className="text-[10px] font-mono text-muted/60 block mb-1">
                      0{index + 1}
                    </span>
                    <h3 className="font-heading text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-accent line-clamp-1">
                      {service.title.split("(")[0].trim()}
                    </h3>
                    <p className="mt-1 text-[11.5px] leading-relaxed text-muted line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/5">
                    <Link
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-all duration-200 group-hover:translate-x-1 hover:text-accent"
                    >
                      View details
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-2.5 text-xs font-semibold text-accent transition-all hover:border-primary/60 hover:bg-primary/20 hover:-translate-y-0.5"
          >
            Explore Complete Service Breakdown
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>

      {/* Sweeping Curvature Transition */}
      <CurvedDivider position="bottom" variant="parabolic" fillColor="#04201c" showGlow={true} />
    </section>
  )
}
