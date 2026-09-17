import { aboutStats } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="px-6 py-24 lg:px-16 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.12em] text-primary">
            About Agurafi
          </span>
          <h2 className="mb-6 text-balance font-heading text-[32px] font-extrabold leading-tight lg:text-[42px]">
            Data-driven growth through strategic branding
          </h2>
          <p className="mb-4 text-pretty text-[16.5px] leading-relaxed text-muted">
            Agurafi is a digital marketing agency focused on building strong brands and driving business growth
            through creative and data-driven marketing strategies.
          </p>
          <p className="text-pretty text-[16.5px] leading-relaxed text-muted">
            We help businesses increase their sales, improve brand awareness, and connect with their target
            audience through modern digital solutions. Our services include social media content creation, video
            editing, graphic design, logo and brand identity design, digital advertising, and Meta Ads management.
          </p>

          <div className="mt-10 flex flex-wrap gap-8 sm:gap-10">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <h3 className="font-heading text-3xl font-extrabold text-accent">{stat.value}</h3>
                <span className="text-[13px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
