import type { Metadata } from "next"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, ShieldCheck, ExternalLink } from "lucide-react"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | AGURAFI Digital Marketing",
  description:
    "Get in touch with Agurafi Digital Marketing in Addis Ababa. Discuss your project, request a marketing roadmap, or inquire about our services.",
}

const contactChannels = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send inquiries, RFP briefs, or project notes directly to our team.",
    value: "Agurafidigitalmarketing@gmail.com",
    href: "mailto:Agurafidigitalmarketing@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Direct",
    description: "Speak with our team Monday through Saturday during business hours.",
    value: "+251 95 346 4729",
    href: "tel:+251953464729",
  },
  {
    icon: MapPin,
    title: "Office Location",
    description: "Located in the business district of Addis Ababa.",
    value: "Bole Olympia, Addis Ababa, Ethiopia",
    href: "https://www.google.com/maps/search/?api=1&query=Bole+Olympia,+Addis+Ababa,+Ethiopia",
  },
]

const expectations = [
  {
    step: "01",
    title: "Immediate Review",
    description:
      "Our team reviews your submission and requirements within 24 business hours.",
  },
  {
    step: "02",
    title: "Strategy Consultation",
    description:
      "We connect via phone or video call to dive deeper into your growth goals and timeline.",
  },
  {
    step: "03",
    title: "Tailored Proposal",
    description:
      "You receive a clear scope of work, budget estimate, and actionable execution timeline.",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Rich Ambient Background Elements (Cinematic Depth, Mesh, and Subtle Logo Watermark) */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/showcase/workflow-pipeline-bg.jpg"
            alt="Agurafi Digital Studio Background"
            fill
            unoptimized
            className="object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/85 to-[#04201c]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[850px] rounded-full bg-gradient-to-b from-primary/25 via-emerald-700/20 to-transparent blur-[140px]" />
          <div className="absolute top-[28%] -left-32 size-[650px] rounded-full bg-[#0a5241]/35 blur-[130px]" />
          <div className="absolute top-[55%] -right-32 size-[600px] rounded-full bg-primary/20 blur-[130px]" />
          <div className="absolute bottom-10 left-1/3 size-[500px] rounded-full bg-emerald-900/30 blur-[140px]" />
          
          {/* Alternative Watermark: Global Communication Beacon & Signal Matrix */}
          <div className="absolute -right-16 top-1/3 w-96 h-96 opacity-[0.06] pointer-events-none select-none text-accent">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
              <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="55" strokeWidth="1.5" />
              <circle cx="100" cy="100" r="30" strokeWidth="1" />
              <circle cx="100" cy="100" r="8" fill="currentColor" />
              <path d="M 30,100 L 170,100 M 100,30 L 100,170" strokeWidth="0.75" />
              <path d="M 50,50 L 150,150 M 50,150 L 150,50" strokeWidth="0.75" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        </div>

        {/* Contact Page Hero with Rich Emerald-Obsidian Gradient Background */}
        <section className="relative pb-16 pt-12 lg:pb-20 bg-gradient-to-b from-[#021310] via-[#04201c] to-[#021310] border-b border-white/5 overflow-hidden">
          {/* Subtle Ambient Glows and Circuit Geometry in Hero */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 blur-[130px]" />
            <div className="absolute top-0 right-1/4 size-[400px] rounded-full bg-emerald-600/10 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight">
                Let&apos;s Build Your Brand&apos;s <span className="text-gradient-gold">Growth Engine</span>
              </h1>
              <p className="mt-3 text-pretty text-xs sm:text-sm text-muted max-w-xl mx-auto">
                Whether you need performance advertising, a brand overhaul, video production, or a modern website, our specialists are ready to discuss your goals.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Form and Contact Information Section with Dedicated Atmospheric Background */}
        <section className="relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-24 overflow-hidden">
          {/* Dedicated Section Background Orbs & Tech Geometry */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 -left-20 size-[500px] rounded-full bg-emerald-600/15 blur-[120px]" />
            <div className="absolute top-1/3 -right-20 size-[550px] rounded-full bg-primary/15 blur-[130px]" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-[#031d19]/80 blur-[140px]" />
            {/* Fine Decorative Grid & Rings */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
              {/* Left Column: Direct Info & What to Expect */}
              <div className="space-y-6 lg:col-span-5 mt-2 sm:mt-4">
                <Reveal>
                  <div className="space-y-2">
                    <h2 className="font-heading text-xl font-bold sm:text-2xl text-foreground">
                      Direct Channels
                    </h2>
                    <p className="text-xs text-muted sm:text-sm">
                      Submit the inquiry form on the right or reach out through phone, email, or our active social media channels.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {contactChannels.map((item) => (
                      <div
                        key={item.title}
                        className="group flex items-start gap-3.5 rounded-xl border border-white/10 bg-gradient-to-r from-card/90 to-surface/90 p-4 backdrop-blur-md transition-all duration-200 hover:border-primary/50 hover:bg-white/[0.08] hover:-translate-y-0.5"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-accent transition-transform group-hover:scale-105">
                          <item.icon className="size-4.5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xs font-bold text-foreground">{item.title}</h3>
                          <p className="text-[11px] text-muted">{item.description}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="mt-1.5 inline-block text-xs font-semibold text-accent hover:underline break-all"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="mt-1.5 inline-block text-xs font-semibold text-foreground">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Verified Social Channels */}
                  <div className="mt-6 rounded-xl border border-white/10 bg-card/90 p-4 backdrop-blur-md">
                    <h3 className="font-heading text-xs font-bold text-foreground">
                      Active Creator Channels
                    </h3>
                    <div className="mt-3 flex items-center gap-2.5">
                      <a
                        href="https://www.instagram.com/agurafi_digitalmarketing?igsh=anh5ZHY4ZGxiMmpt&igsi=anh5ZHY4ZGxiMmpt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] px-3.5 py-2 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(220,39,67,0.35)] transition-all hover:scale-105 hover:shadow-[0_6px_18px_rgba(220,39,67,0.5)]"
                      >
                        <FaInstagram className="size-3.5 text-white" />
                        Instagram
                      </a>
                      <a
                        href="https://www.tiktok.com/@agurafidigitalmarketing?_r=1&_t=ZS-98vgRwyQPXs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-[#010101] border border-[#25F4EE]/40 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all hover:scale-105 hover:border-[#FE2C55] hover:shadow-[0_0_16px_rgba(254,44,85,0.4)]"
                      >
                        <FaTiktok className="size-3.5 text-white" />
                        TikTok
                      </a>
                    </div>
                  </div>
                </Reveal>

                {/* What Happens Next Card */}
                <Reveal delay={100}>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#06241f] via-[#041c18] to-black/80 p-5 sm:p-6 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="size-4 text-accent" />
                      <h3 className="font-heading text-sm font-bold text-foreground">
                        What Happens Next
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {expectations.map((step) => (
                        <div key={step.step} className="flex items-start gap-2.5">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/25 font-heading text-[11px] font-bold text-accent">
                            {step.step}
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-foreground">{step.title}</h4>
                            <p className="text-[11px] leading-relaxed text-muted">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3 text-[11px] text-muted">
                      <ShieldCheck className="size-3.5 text-accent shrink-0" />
                      <span>Strict confidentiality guaranteed for all submissions.</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Web3Forms Contact Form on a Crisp White-Like Luxury Card */}
              <div className="lg:col-span-7 mt-2 sm:mt-4">
                <Reveal delay={60}>
                  <div className="mb-4">
                    <h2 className="font-heading text-xl font-bold sm:text-2xl text-foreground">
                      Send Us a Message
                    </h2>
                  </div>
                  <ContactForm variant="white" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Google Map Section */}
        <section className="relative pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-4 sm:p-6 backdrop-blur-md shadow-2xl">
                <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        Our Addis Ababa Office
                      </h3>
                      <p className="text-xs text-muted">
                        Bole Olympia, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bole+Olympia,+Addis+Ababa,+Ethiopia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-accent transition-all hover:border-primary/60 hover:bg-primary/20"
                  >
                    Open in Google Maps
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>

                {/* Google Map Iframe */}
                <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-white/10 sm:h-[400px]">
                  <iframe
                    title="Agurafi Digital Marketing Office - Bole Olympia, Addis Ababa"
                    src="https://maps.google.com/maps?q=Bole+Olympia%2C+Addis+Ababa%2C+Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="size-full"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
