import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { FaInstagram, FaTiktok } from "react-icons/fa6"
import { navLinks, services } from "@/lib/data"

const socialLinks = [
  {
    icon: Mail,
    label: "Email Agurafi",
    href: "mailto:Agurafidigitalmarketing@gmail.com",
    // Real Gmail/Mail vibrant red color
    containerClass:
      "bg-[#EA4335] text-white shadow-[0_4px_14px_rgba(234,67,53,0.4)] hover:shadow-[0_6px_20px_rgba(234,67,53,0.6)] hover:scale-110",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/agurafi_digitalmarketing?igsh=anh5ZHY4ZGxiMmpt&igsi=anh5ZHY4ZGxiMmpt",
    // Signature Instagram gradient color
    containerClass:
      "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_4px_14px_rgba(220,39,67,0.4)] hover:shadow-[0_6px_20px_rgba(220,39,67,0.6)] hover:scale-110",
  },
  {
    icon: FaTiktok,
    label: "TikTok",
    href: "https://www.tiktok.com/@agurafidigitalmarketing?_r=1&_t=ZS-98vgRwyQPXs",
    // Authentic TikTok black with cyan and magenta accents
    containerClass:
      "bg-[#010101] text-white border border-[#25F4EE]/40 shadow-[0_4px_14px_rgba(0,0,0,0.6)] hover:border-[#FE2C55] hover:shadow-[0_0_18px_rgba(254,44,85,0.45)] hover:scale-110",
  },
]

export function Footer() {
  // Filter out "Marketing Strategy..." and "Search Engine Optimization (SEO)" as requested
  const footerServices = services.filter(
    (s) => s.id !== "marketing-strategy-growth" && s.id !== "seo"
  )

  return (
    <footer className="border-t border-white/10 bg-[#031916] text-foreground">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-5 sm:px-6 sm:pt-12 sm:pb-6 lg:px-8 lg:pt-12 lg:pb-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block" aria-label="AGURAFI Home">
              <Image
                src="/images/agurafi-logo.jpg"
                alt="AGURAFI Digital Marketing"
                width={160}
                height={56}
                style={{ width: "auto" }}
                className="h-11 w-auto rounded-md"
              />
            </Link>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-muted sm:text-sm">
              A digital marketing and engineering agency helping brands grow through creative visuals, targeted ads,
              and data-driven strategy.
            </p>

            {/* Real Branded Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex size-10 items-center justify-center rounded-xl transition-all duration-300 ${social.containerClass}`}
                >
                  <social.icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Site Navigation with Sleek Glowing Accent Dots */}
          <nav className="lg:col-span-2 lg:col-start-5" aria-label="Footer Navigation">
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-accent">Navigate</h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2.5 text-xs text-muted transition-all duration-200 hover:translate-x-1 hover:text-primary sm:text-sm"
                  >
                    <span className="size-1.5 rounded-full bg-primary/40 transition-all duration-200 group-hover:scale-125 group-hover:bg-accent shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Filtered Services List with Sleek Glowing Accent Dots */}
          <nav className="lg:col-span-3" aria-label="Services Navigation">
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-accent">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group flex items-center gap-2.5 text-xs text-muted transition-all duration-200 hover:translate-x-1 hover:text-primary sm:text-sm"
                  >
                    <span className="size-1.5 rounded-full bg-primary/40 transition-all duration-200 group-hover:scale-125 group-hover:bg-accent shrink-0" />
                    <span className="line-clamp-1">{service.title.split("(")[0].trim()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="mb-3.5 text-xs font-bold uppercase tracking-wider text-accent">Contact</h3>
            <ul className="flex flex-col gap-3 text-xs text-muted sm:text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-3.5 shrink-0 text-[#EA4335]" />
                <a
                  href="mailto:Agurafidigitalmarketing@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  Agurafidigitalmarketing@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 text-primary" />
                <a href="tel:+251953464729" className="hover:text-primary transition-colors">
                  +251 95 346 4729
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <span>Addis Ababa, Bole Olympia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-7 flex flex-col items-center justify-between gap-2.5 border-t border-white/10 pt-4 text-xs text-muted sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Agurafi Digital Marketing. All rights reserved.</span>
          <span className="text-muted/70">
            Strategy &bull; Technology &bull; Scalability
          </span>
        </div>
      </div>
    </footer>
  )
}