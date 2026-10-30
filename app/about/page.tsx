import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Compass, Target, Lightbulb, Users, CheckCircle2, ShieldCheck, Zap } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { aboutStats, aboutHighlights, teamMembers } from "@/lib/data"

export const metadata: Metadata = {
  title: "About Us | AGURAFI Digital Marketing",
  description:
    "Learn about Agurafi Digital Marketing—our mission, vision, core values, and the multidisciplinary team dedicated to scaling your brand.",
}

const coreValues = [
  {
    icon: Target,
    title: "Strategy-First Mindset",
    description:
      "We believe creative assets and ad campaigns must always serve tangible business objectives—never creative vanity for its own sake.",
  },
  {
    icon: Lightbulb,
    title: "Creative Integrity",
    description:
      "From bespoke visual identities to high-retention video production, we hold our craft to the highest modern aesthetic standards.",
  },
  {
    icon: Zap,
    title: "Execution Velocity",
    description:
      "In digital markets, speed and agility matter. We move fast from discovery to launch, testing and refining in real-time.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description:
      "We operate with clear communication, honest reporting, and direct access to the specialists working on your brand.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* About Hero Section */}
        <section className="relative pb-16 pt-8 lg:pb-24">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[650px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.15), transparent 65%)" }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-tight">
                Empowering Brands Through <span className="text-gradient-gold">Creative Strategy &amp; Technology</span>
              </h1>
              <p className="mt-4 text-pretty text-sm sm:text-base leading-relaxed text-muted">
                Agurafi is a modern digital marketing and development agency based in Addis Ababa. We partner with
                ambitious businesses to build memorable brand identities, launch high-performing ad campaigns, and
                engineer custom digital platforms that accelerate growth.
              </p>
            </Reveal>

            {/* Key Agency Statistics */}
            <Reveal delay={150} className="mt-14">
              <div className="grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-surface/60 p-6 backdrop-blur-md sm:grid-cols-3 sm:p-8">
                {aboutStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center justify-center text-center ${
                      index > 0 ? "sm:border-l sm:border-white/10" : ""
                    }`}
                  >
                    <span className="font-heading text-3xl font-extrabold text-accent sm:text-4xl lg:text-5xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 text-sm font-medium text-muted">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-card p-8 sm:p-10 transition-all duration-300 hover:border-primary/40">
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Target className="size-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">Our Mission</span>
                    <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
                      Turning Brand Potential into Predictable Growth
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      Our mission is to help businesses eliminate marketing guesswork. We combine research-driven
                      positioning, compelling visual content, and targeted digital acquisition to ensure every dollar
                      spent generates measurable business traction.
                    </p>
                  </div>
                  <ul className="mt-8 space-y-3 border-t border-white/5 pt-6 text-sm text-muted">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4.5 text-accent shrink-0" />
                      Data-backed campaigns tailored to real business goals
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4.5 text-accent shrink-0" />
                      Creative excellence that elevates brand perception
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-card p-8 sm:p-10 transition-all duration-300 hover:border-primary/40">
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Compass className="size-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">Our Vision</span>
                    <h2 className="mt-2 font-heading text-2xl font-bold sm:text-3xl">
                      The Leading Growth Partner for Modern Businesses
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      We envision a digital landscape where growing enterprises can access tier-one creative
                      storytelling and high-performance digital engineering without prohibitive enterprise barriers,
                      allowing exceptional brands to thrive in local and global markets.
                    </p>
                  </div>
                  <ul className="mt-8 space-y-3 border-t border-white/5 pt-6 text-sm text-muted">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4.5 text-accent shrink-0" />
                      Scalable architectures designed for sustainable growth
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4.5 text-accent shrink-0" />
                      Long-term partnerships rooted in tangible ROI
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[42px]">
                Core Values &amp; Working Philosophy
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
                These principles guide every design review, ad optimization, and technical architecture we produce.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((value, index) => (
                <Reveal key={value.title} delay={index * 80}>
                  <div className="flex h-full flex-col justify-start rounded-2xl border border-white/10 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <value.icon className="size-5.5" />
                    </div>
                    <h3 className="mb-2.5 font-heading text-lg font-bold">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How We Approach Client Challenges */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-surface to-surface-2 p-8 sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
                    How We Approach Client Challenges
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    We start by dissecting your market positioning and sales funnel before writing a single headline or
                    allocating ad spend. By aligning creative messaging directly with customer intent, we engineer
                    solutions that convert attention into sustainable revenue.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      Explore Our Services
                      <ArrowRight className="size-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:bg-white/10"
                    >
                      Talk With Our Team
                    </Link>
                  </div>
                </div>

                <div className="space-y-4 lg:col-span-5">
                  {aboutHighlights.map((highlight) => (
                    <div
                      key={highlight.title}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-4.5 backdrop-blur-sm"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <highlight.icon className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-bold">{highlight.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{highlight.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Showcase */}
        <section className="relative py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-balance font-heading text-3xl font-extrabold sm:text-4xl lg:text-[42px]">
                Meet The Specialists Behind Agurafi
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted">
                A dedicated team of creative directors, developers, videographers, and growth strategists committed to
                your success.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {teamMembers.map((member, index) => (
                <Reveal key={member.name} delay={index * 100}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white/[0.07]">
                    <div className="relative mx-auto mb-5 size-28 overflow-hidden rounded-full border-2 border-primary/30 p-1">
                      <div className="relative size-full overflow-hidden rounded-full">
                        <Image
                          src={member.imageSrc}
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
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="pb-24 pt-8 lg:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#062a25] via-[#0b4238] to-[#0a4d3c] px-6 py-14 text-center sm:px-12 sm:py-20">
              <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">
                Ready to Discuss Your Brand&apos;s Next Chapter?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted sm:text-lg">
                Schedule a consultation to see how our strategy and creative execution can accelerate your growth.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
