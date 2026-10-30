import Image from "next/image"
import { teamMembers } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Team() {
  return (
    <section id="team" className="relative py-20 lg:py-28 overflow-hidden bg-white/[0.01]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-foreground">
            The People Behind <span className="text-gradient-gold">Agurafi</span>
          </h2>
          <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted">
            A dedicated team of creative directors, engineers, videographers, and strategists committed to elevating your brand.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 sm:gap-5">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 60}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.3)]">
                
                {/* Team Portrait Container with standard rounded-t-lg */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04201c] via-black/20 to-transparent" />
                </div>

                {/* Member Details */}
                <div className="flex flex-1 flex-col justify-between p-5 text-center">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                      {member.name}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium leading-snug text-muted">
                      {member.role}
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
