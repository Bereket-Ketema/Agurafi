import Image from "next/image"
import { Linkedin, Instagram, Twitter } from "lucide-react"
import { teamMembers } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function Team() {
  return (
    <section id="team" className="px-6 py-24 lg:px-16 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.12em] text-primary">
            Leadership
          </span>
          <h2 className="text-balance font-heading text-[32px] font-extrabold leading-tight lg:text-[42px]">
            The People Behind Agurafi
          </h2>
          <p className="mt-4 text-pretty text-[16.5px] leading-relaxed text-muted">
            A small, senior team of strategists and creatives dedicated to turning your brand vision into
            measurable growth.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Reveal key={`${member.name}-${index}`} delay={index * 100}>
              <div className="group h-full rounded-[20px] border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/[0.07]">
                <div className="relative mx-auto mb-5 size-28 overflow-hidden rounded-full border-2 border-primary/30 p-1">
                  <div className="relative size-full overflow-hidden rounded-full">
                    <Image
                      src={member.imageSrc || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="font-heading text-lg font-bold">{member.name}</h3>
                <span className="mt-1.5 inline-block rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-accent">
                  {member.role}
                </span>
                <div className="mt-5 flex items-center justify-center gap-2.5">
                  {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label={`${member.name} on social media`}
                      className="flex size-9 items-center justify-center rounded-lg border border-border bg-white/5 text-muted transition-colors hover:border-primary/40 hover:text-accent"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
