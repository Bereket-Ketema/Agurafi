import Image from "next/image"
import { whyChooseUsData, aboutStats } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 -z-10 size-[500px] -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl text-left">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-foreground">
            Why Partner With <span className="text-gradient-gold">Agurafi</span>
          </h2>
          <p className="mt-2.5 text-pretty text-sm sm:text-base leading-relaxed text-muted">
            Creative ambition paired with engineering and performance discipline. We treat your growth as our mandate.
          </p>
        </Reveal>

        {/* Reference Image 1: Hub & Spoke Curved Branching Architecture */}
        <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Hub: Circular Emblem with Enforced Prominent Logo */}
          <div className="flex flex-col items-center justify-center lg:col-span-4 xl:col-span-4">
            <Reveal>
              <div className="group relative flex size-56 sm:size-64 lg:size-72 items-center justify-center rounded-full border-2 border-primary/40 bg-gradient-to-br from-[#0a352f] via-[#062621] to-[#041c18] p-5 shadow-[0_0_50px_rgba(228,172,35,0.18)] transition-all duration-500 hover:border-primary/80 hover:shadow-[0_0_70px_rgba(228,172,35,0.3)]">
                {/* Outer Orbit Light Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary/80 animate-[spin_16s_linear_infinite]" />
                
                {/* Inner Glowing Center */}
                <div className="relative flex size-full flex-col items-center justify-center rounded-full border border-white/10 bg-[#041d19]/90 p-5 text-center backdrop-blur-md">
                  <Image
                    src="/images/agurafi-logo.jpg"
                    alt="Agurafi Digital Marketing"
                    width={220}
                    height={80}
                    className="h-16 sm:h-20 lg:h-22 w-auto rounded-lg object-contain shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="mt-2.5 font-heading text-xs sm:text-sm font-extrabold tracking-widest uppercase text-accent">
                    AGURAFI
                  </span>
                  <span className="mt-0.5 text-[10px] sm:text-[11px] font-medium text-muted/80">
                    Growth Engine
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Spoke Cards: 01, 02, 03, 04 connected with sleek branches */}
          <div className="relative flex flex-col gap-4 sm:gap-5 lg:col-span-8 xl:col-span-8">
            
            {/* SVG Connecting Branch Lines (visible on desktop) */}
            <svg
              className="pointer-events-none absolute -left-16 top-0 hidden h-full w-20 stroke-primary/35 lg:block"
              viewBox="0 0 80 440"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Curve 1: to 01 */}
              <path d="M 0 220 C 35 220, 45 45, 80 45" strokeWidth="2" strokeDasharray="3 3" />
              {/* Curve 2: to 02 */}
              <path d="M 0 220 C 35 220, 45 155, 80 155" strokeWidth="2" />
              {/* Curve 3: to 03 */}
              <path d="M 0 220 C 35 220, 45 285, 80 285" strokeWidth="2" />
              {/* Curve 4: to 04 */}
              <path d="M 0 220 C 35 220, 45 395, 80 395" strokeWidth="2" strokeDasharray="3 3" />
            </svg>

            {whyChooseUsData.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="group relative flex items-start gap-4 sm:gap-5 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.05] via-white/[0.03] to-transparent p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-x-1 hover:border-primary/50 hover:bg-white/[0.07]">
                  
                  {/* Number Node Circle (01, 02, 03, 04) */}
                  <div className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/50 bg-[#062621] font-heading text-base font-black text-accent shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary group-hover:bg-primary/20">
                    0{index + 1}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <item.icon className="size-4 text-primary shrink-0" />
                      <h3 className="font-heading text-sm sm:text-base font-bold uppercase tracking-wider text-foreground transition-colors group-hover:text-accent">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Experience & Credibility Bar Below */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 rounded-xl border border-white/10 bg-[#052621]/70 p-6 backdrop-blur-md">
          {aboutStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col text-center sm:text-left ${
                i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : "sm:pl-4"
              }`}
            >
              <span className="font-heading text-2xl sm:text-3xl font-extrabold text-accent">
                {stat.value}
              </span>
              <span className="mt-1 text-xs sm:text-sm text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
