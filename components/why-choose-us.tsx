import Image from "next/image"
import { whyChooseUsData, aboutStats } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-20 md:py-28 lg:py-32 overflow-hidden border-t border-white/10">
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
        {/* Alternative Watermark: Concentric Orbital Growth Gyroscope */}
        <div className="absolute -left-12 -top-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-primary">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
            <ellipse cx="100" cy="100" rx="85" ry="35" strokeWidth="1.5" transform="rotate(-30 100 100)" />
            <ellipse cx="100" cy="100" rx="85" ry="35" strokeWidth="1.5" transform="rotate(30 100 100)" />
            <ellipse cx="100" cy="100" rx="85" ry="35" strokeWidth="1" strokeDasharray="4 4" transform="rotate(90 100 100)" />
            <circle cx="100" cy="100" r="16" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="5" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14 lg:mb-20 max-w-2xl text-left">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-foreground leading-[1.18]">
            Why Partner With <span className="text-gradient-gold">Agurafi</span>
          </h2>
          <p className="mt-3.5 text-pretty text-sm sm:text-base leading-relaxed text-muted max-w-xl">
            Creative ambition paired with engineering and performance discipline. We treat your growth as our mandate.
          </p>
        </Reveal>

        {/* Medco Analytics Architectural Hub-and-Spoke Grid */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center mt-10 lg:mt-16 pb-6 lg:pb-0">
          
          {/* SVG Connecting Branch Lines (Desktop: Connects Hub to 4 Sharp Rows) */}
          <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none w-full h-[620px] top-0">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              {/* Subtle Guide Lines */}
              <g className="text-primary/20" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeLinecap="round">
                <path d="M 28,45.4 C 38,45.4 42,12.5 54,12.5" />
                <path d="M 28,45.4 C 38,45.4 42,37.5 54,37.5" />
                <path d="M 28,45.4 C 38,45.4 42,62.5 54,62.5" />
                <path d="M 28,45.4 C 38,45.4 42,87.5 54,87.5" />
              </g>
              {/* Flowing Highlight Branch Lines */}
              <g className="text-primary/75 drop-shadow-[0_0_8px_rgba(228,172,35,0.7)]" fill="none" stroke="currentColor" strokeWidth="0.35" vectorEffect="non-scaling-stroke" strokeLinecap="round">
                <path d="M 28,45.4 C 38,45.4 42,12.5 54,12.5" strokeDasharray="3 3" />
                <path d="M 28,45.4 C 38,45.4 42,37.5 54,37.5" />
                <path d="M 28,45.4 C 38,45.4 42,62.5 54,62.5" />
                <path d="M 28,45.4 C 38,45.4 42,87.5 54,87.5" strokeDasharray="3 3" />
              </g>
            </svg>
          </div>

          {/* Left Hub: Circular Glowing Emblem (Medco Style with spinning orbit ring) */}
          <div className="relative z-20 shrink-0 mb-12 lg:mb-0 lg:absolute lg:left-0 lg:top-[137.5px]">
            <Reveal>
              <div className="relative flex items-center justify-center">
                {/* Radial ambient glow */}
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl animate-pulse" />

                {/* Spinning Half-Orbit Ring */}
                <div
                  className="absolute -inset-3.5 border-[8px] lg:border-[12px] border-primary/50 rounded-full hidden lg:block opacity-90 animate-[spin_12s_linear_infinite]"
                  style={{ clipPath: "inset(0 0 0 50%)" }}
                />

                {/* Center Core Hub Disk */}
                <div className="group relative size-56 sm:size-64 lg:size-72 rounded-full bg-gradient-to-br from-[#0c3832] via-[#062621] to-[#041c18] shadow-[0_0_50px_rgba(228,172,35,0.25)] flex flex-col items-center justify-center p-6 sm:p-8 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-primary/80 hover:shadow-[0_0_70px_rgba(228,172,35,0.4)]">
                  <Image
                    src="/images/agurafi-logo.jpg"
                    alt="Agurafi Digital"
                    width={3508}
                    height={2480}
                    style={{ width: "auto" }}
                    className="h-16 sm:h-20 lg:h-22 w-auto rounded-lg object-contain brightness-95 drop-shadow-[0_0_15px_rgba(228,172,35,0.3)] transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <span className="mt-3 font-heading text-xs sm:text-sm font-extrabold tracking-widest uppercase text-accent">
                    AGURAFI
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-muted/80 tracking-wider">
                    Growth Engine
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: 4 Rows of Sharp (rounded-none) Architectural Cards */}
          <div className="relative z-10 w-full lg:w-1/2 lg:ml-auto grid grid-cols-1 gap-6 lg:gap-0 lg:grid-rows-4 lg:h-[620px]">
            {/* Mobile Continuous Vertical Connector Line */}
            <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[28px] w-[2px] bg-primary/40 -translate-x-1/2 z-0 rounded-full" />

            {whyChooseUsData.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="relative flex flex-row items-start lg:items-center h-full gap-4 lg:gap-6 group">
                  
                  {/* Step Circular Node with Primary Ring */}
                  <div className="relative z-20 size-14 lg:size-16 rounded-full bg-gradient-to-br from-[#0c3832] to-[#041c18] shadow-[0_0_20px_rgba(0,0,0,0.5)] shrink-0 flex items-center justify-center border-2 lg:border-[3px] border-primary transition-transform duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(228,172,35,0.4)] lg:mt-1">
                    <span className="font-heading font-black text-lg lg:text-xl text-accent transition-colors group-hover:text-white">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Sharp Architectural Card without Border Radius (Medco Style) */}
                  <div className="flex-1 text-left bg-white/[0.03] backdrop-blur-md p-5 lg:p-6 rounded-none border border-white/10 w-full shadow-2xl group-hover:bg-white/[0.08] group-hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Left Accent Indicator Bar on Hover */}
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    
                    {/* Card Title Row with Icon */}
                    <div className="flex items-center justify-start gap-3 mb-2">
                      <item.icon className="size-5 text-primary group-hover:text-accent transition-colors shrink-0" />
                      <h4 className="font-heading font-black text-white text-[15px] lg:text-[17px] tracking-[0.1em] uppercase group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    {/* Card Description */}
                    <p className="text-muted text-[13px] lg:text-[13.5px] leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

        {/* Experience & Credibility Metrics — Architectural Sharp Divider */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 gap-6 sm:grid-cols-3 pt-10 border-t border-white/10">
          {aboutStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col text-center sm:text-left ${
                i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : "sm:pl-2"
              }`}
            >
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs sm:text-sm text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

