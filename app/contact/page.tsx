import type { Metadata } from "next"
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
      <main className="overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Contact Page Hero */}
        <section className="relative pb-10 pt-8 lg:pb-14">
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[650px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.15), transparent 65%)" }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[40px] font-extrabold leading-tight">
                Let&apos;s Build Your Brand&apos;s <span className="text-gradient-gold">Growth Engine</span>
              </h1>
              <p className="mt-3 text-pretty text-xs sm:text-sm text-muted">
                Whether you need performance advertising, a brand overhaul, video production, or a modern website, we
                are ready to discuss your goals.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Form and Contact Information Section */}
        <section className="relative pb-12 lg:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Direct Info & What to Expect */}
              <div className="space-y-6 lg:col-span-5">
                <Reveal>
                  <div className="space-y-2">
                    <h2 className="font-heading text-xl font-bold sm:text-2xl">
                      Direct Channels
                    </h2>
                    <p className="text-xs text-muted sm:text-sm">
                      Submit the inquiry form or reach out through phone, email, or our active social media channels.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {contactChannels.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-3.5 rounded-xl border border-white/10 bg-card p-4 transition-all duration-200 hover:border-primary/40"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
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
                  <div className="mt-6 rounded-xl border border-white/10 bg-card p-4">
                    <h3 className="font-heading text-xs font-bold text-foreground">
                      Active Channels
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
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-surface to-surface-2 p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="size-4 text-accent" />
                      <h3 className="font-heading text-sm font-bold text-foreground">
                        What Happens Next
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {expectations.map((step) => (
                        <div key={step.step} className="flex items-start gap-2.5">
                          <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/20 font-heading text-[11px] font-bold text-accent">
                            {step.step}
                          </span>
                          <div>
                            <h4 className="text-xs font-bold text-foreground">{step.title}</h4>
                            <p className="text-[11px] leading-relaxed text-muted">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3 text-[11px] text-muted">
                      <ShieldCheck className="size-3.5 text-accent shrink-0" />
                      <span>Strict confidentiality guaranteed.</span>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Web3Forms Contact Form */}
              <div className="lg:col-span-7">
                <Reveal delay={60}>
                  <div className="mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                      Inquiry Form
                    </span>
                    <h2 className="mt-1 font-heading text-xl font-bold sm:text-2xl">
                      Send Us a Message
                    </h2>
                  </div>
                  <ContactForm />
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
