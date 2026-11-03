import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  Building2,
  Share2,
  Palette,
  Megaphone,
  Code2,
  Clapperboard,
  Search,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Products & Packages | AGURAFI Digital Marketing",
  description:
    "Explore Agurafi's turnkey digital products—pre-packaged brand systems, social acquisition engines, performance ad launchpads, and web builds deployed for leading Ethiopian brands.",
}

interface ProductItem {
  id: string
  title: string
  category: string
  description: string
  badge: string
  turnaround: string
  icon: typeof Palette
  imageSrc: string
  deliverablesHighlight: string
  features: string[]
}

const turnkeyProducts: ProductItem[] = [
  {
    id: "social-audience-engine",
    title: "360° Social Audience Acquisition Engine",
    category: "Turnkey Social Growth",
    description: "A complete turnkey social media acquisition ecosystem engineered to turn feeds into customer conversion funnels.",
    badge: "Flagship System",
    turnaround: "7-10 Days Deployment",
    icon: Share2,
    imageSrc: "/images/branding/agurafi-audience-social.png",
    deliverablesHighlight: "30-Day Campaign Blueprint + 12 High-Retention Vertical Videos",
    features: [
      "Platform-native TikTok, Instagram & Facebook format adaptation",
      "12 viral short-form videos with kinetic captions & audio design",
      "Full month content schedule with hook angles and CTA mapping",
      "Audience conversion workflows (DM automation & lead capture)",
      "Weekly algorithmic performance reviews and trend-jacking alerts",
    ],
  },
  {
    id: "brand-identity-suite",
    title: "Enterprise Brand Identity System",
    category: "Brand Architecture",
    description: "An authoritative 2D/3D visual identity system that positions your company as an indisputable market leader.",
    badge: "Most Requested",
    turnaround: "5-7 Business Days",
    icon: Palette,
    imageSrc: "/images/branding/agurafi-vertical-emerald.png",
    deliverablesHighlight: "Vector Logo Suite + 3D Render System + Brand Manual",
    features: [
      "Primary, secondary, and badge logo variants in all vector formats",
      "Photorealistic 3D embossed logo renders for signage & packaging",
      "Typography styling, color tokens, and accessibility contrast guide",
      "Complete brand manual covering digital, print, and corporate assets",
      "Print-ready stationery: business cards, envelopes & letterheads",
    ],
  },
  {
    id: "performance-ad-launchpad",
    title: "Omnichannel Performance Ad Launchpad",
    category: "Paid Acquisition",
    description: "Stop burning ad budgets on guesswork. Pre-tested direct-response ad creative bundles engineered to maximize ROAS.",
    badge: "High ROAS",
    turnaround: "3-5 Business Days",
    icon: Megaphone,
    imageSrc: "/images/services/paid.jpeg",
    deliverablesHighlight: "10 High-Converting Creatives + Headline Matrix + Pixel Setup",
    features: [
      "10 bespoke visual ad creatives formatted for Meta, TikTok & Google",
      "Multi-angle direct-response copy matrix tested for Ethiopian buyers",
      "Campaign funnel setup (Top, Middle, Bottom-of-Funnel architecture)",
      "Conversion tracking pixel installation and custom event verification",
      "Targeting blueprints tailored to local high-purchasing demographics",
    ],
  },
  {
    id: "nextjs-web-engine",
    title: "High-Velocity Next.js Web Engine",
    category: "Digital Platform",
    description: "A custom-engineered, sub-second web application built to convert organic & paid visitors into signed contracts.",
    badge: "Custom Build",
    turnaround: "1-2 Weeks",
    icon: Code2,
    imageSrc: "/images/products/nextjs-engine.jpg",
    deliverablesHighlight: "Next.js App + 95+ Lighthouse Score + Direct Lead Funnel",
    features: [
      "Sub-second load times engineered with modern Next.js and React",
      "Ultra-fluid mobile-first UI with dark luxury aesthetic",
      "Automated lead capture form delivered directly to your email/phone",
      "On-page technical SEO, schema structured data & OpenGraph tags",
      "Zero-downtime deployment setup with automatic SSL security",
    ],
  },
  {
    id: "cinematic-production-pack",
    title: "Cinematic Commercial Production Suite",
    category: "Commercial Film",
    description: "Broadcast-quality commercial video production combining on-location camera crew, drone capture, and sound engineering.",
    badge: "Cinema Grade",
    turnaround: "5-8 Business Days",
    icon: Clapperboard,
    imageSrc: "/images/products/cinema-rig.jpg",
    deliverablesHighlight: "On-Location Shoot + Master Commercial + 3 Vertical Cutdowns",
    features: [
      "Dedicated Agurafi production crew with cinema 4K camera gear",
      "Scriptwriting, storyboard direction & professional voiceover",
      "Hollywood-standard DaVinci color grading & dynamic sound mix",
      "1 master widescreen commercial + 3 platform-optimized vertical cutdowns",
      "Commercial broadcast and digital streaming licensing rights",
    ],
  },
  {
    id: "local-seo-dominance",
    title: "Local Search & Authority Dominance Blueprint",
    category: "Organic Visibility",
    description: "Own Google search for your target industry. We optimize your local profiles and organic ranking so buyers call you first.",
    badge: "Long-Term ROI",
    turnaround: "7 Business Days",
    icon: Search,
    imageSrc: "/images/services/seo.jpeg",
    deliverablesHighlight: "Google Maps Domination + Keyword Authority Mapping",
    features: [
      "Full technical audit and remediation of website search bottlenecks",
      "Google Business Profile optimization to capture top 'near me' queries",
      "High-intent commercial keyword mapping with localized search intent",
      "Schema structured metadata for rich Google search snippets",
      "3-month actionable organic content and citation roadmap",
    ],
  },
]

// Real Brand Implementations using the actual client logos
const brandCaseStudies = [
  {
    name: "Awash Bank & Financial Summits",
    logo: "/images/branding/agurafi-team-polo.png",
    industry: "Banking & Financial Services",
    deployedProduct: "Commercial Video Production & Live Event Media",
    tagline: "Corporate Brand Authority at Major Ethiopian Summits",
    description:
      "Agurafi's on-site production team deployed cinema-grade event capture and multi-camera broadcasting at prime corporate summits sponsored by Awash Bank. High-fidelity video assets elevated the event's digital reach across regional media channels.",
    results: "98% Broadcast Retention &bull; Premium Institutional Trust",
  },
  {
    name: "Rotech Information Technology",
    logo: "/logo/rotech.png",
    industry: "IT & Software Engineering",
    deployedProduct: "Enterprise Brand System & High-Speed Digital Platform",
    tagline: "Modernizing IT Solutions for Enterprise Clients",
    description:
      "Rotech is a premier information technology solutions provider in Ethiopia. Agurafi engineered a refined corporate visual language and a high-performance digital presence that positions Rotech's software and enterprise infrastructure services for high-value B2B contracts.",
    results: "+220% Inbound B2B Inquiries &bull; Unified Brand Guidelines",
  },
  {
    name: "Yegna Trading & Distribution",
    logo: "/logo/file_000000009ab88208b2ea47e20855e464.png",
    industry: "Import, Export & FMCG Trading",
    deployedProduct: "360° Social Growth & Commercial Catalog Suite",
    tagline: "Scaling Consumer & Wholesale Market Penetration",
    description:
      "Yegna Trading is an established commercial enterprise managing diverse distribution lines. Agurafi designed dynamic catalog assets, high-engagement social campaigns, and digital sales collateral that expanded Yegna's distributor reach across regional hubs.",
    results: "+180% Wholesale Reach &bull; Multi-Product Digital Catalogs",
  },
  {
    name: "Mela Express Delivery & Logistics",
    logo: "/logo/-2147483648_-216814.jpg",
    industry: "Logistics, Moving & Facility Services",
    deployedProduct: "Performance Ad Launchpad & Conversion Funnels",
    tagline: "Rapid Urban Customer Acquisition in Addis Ababa",
    description:
      "Mela operates nationwide delivery, professional packing & moving, and industrial cleaning services. Agurafi deployed geo-targeted ad funnels and TikTok/Reels video campaigns driving direct booking calls and mobile app reservations every week.",
    results: "4.8x Return on Ad Spend &bull; 1,200+ Monthly Delivery Bookings",
  },
  {
    name: "Gedion Advertising & Media",
    logo: "/logo/file_00000000467c822f89e2751afd43dd0c.png",
    industry: "Outdoor Media & Large-Format Print",
    deployedProduct: "Brand Digital Architecture & Visual Asset Production",
    tagline: "Bridging Outdoor Billboards with Digital Authority",
    description:
      "A prominent name in commercial advertising and signage. Agurafi partnered to translate large-scale physical billboard campaigns into dynamic digital motion assets, providing clients with unified print-plus-digital marketing dominance.",
    results: "Unified Multi-Channel Campaign Execution for Corporate Advertisers",
  },
  {
    name: "Willy & Consumer Lifestyle Brands",
    logo: "/logo/file_000000009504821193699a47cc13c0c1.png",
    industry: "Consumer Goods & Retail",
    deployedProduct: "Social Media Audience Engine & Influencer Creative",
    tagline: "Viral Short-Form Content Driving Shelf Velocity",
    description:
      "For consumer retail and lifestyle brands like Willy, Agurafi creates high-energy, relatable video hooks and social marketing that build rapid cultural relevance among younger demographic segments across TikTok and Instagram.",
    results: "350k+ Organic Views &bull; Measurable Retail Sell-Through Lift",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        {/* Products Hero with Rich Emerald-Obsidian Gradient Background */}
        <section className="relative pb-16 pt-10 lg:pb-20 bg-gradient-to-b from-[#021310] via-[#04201c] to-[#021310] border-b border-white/5">
          {/* Ambient Glows */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[650px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(228,172,35,0.18), transparent 65%)" }}
          />
          <div
            className="pointer-events-none absolute right-12 bottom-0 -z-10 size-[450px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)" }}
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[42px] font-extrabold leading-tight">
                Productized Suites Built for <span className="text-gradient-gold">Rapid Market Dominance</span>
              </h1>
              <p className="mt-3 text-pretty text-sm sm:text-base text-muted max-w-2xl mx-auto">
                While our services provide ongoing custom agency support, our <strong className="text-foreground">Products</strong> are pre-engineered, fixed-scope growth packages delivered with guaranteed timelines, transparent scopes, and proven ROI.
              </p>
            </Reveal>

            {/* Clear Differentiation: Services vs Products */}
            <Reveal delay={80} className="mt-8 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/[0.08] via-surface/90 to-primary/[0.08] p-4 sm:p-5 backdrop-blur-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 border-b sm:border-b-0 sm:border-r border-white/10 pb-3 sm:pb-0 sm:pr-4">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-muted">
                      <Layers className="size-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-wider text-muted">Agurafi Services</h2>
                      <p className="mt-1 text-xs text-muted leading-relaxed">
                        Custom agency engagements, ongoing monthly retainers, bespoke consulting, and end-to-end multi-team campaigns tailored over time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 sm:pl-2">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-accent">
                      <Zap className="size-4.5" />
                    </div>
                    <div>
                      <h2 className="text-xs font-bold uppercase tracking-wider text-accent">Agurafi Products</h2>
                      <p className="mt-1 text-xs text-foreground/90 leading-relaxed">
                        Ready-to-deploy turnkey systems. Fixed deliverables, guaranteed turnaround, battle-tested templates, and zero guesswork.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Product Cards Grid */}
        <section className="relative py-10 lg:py-16 overflow-hidden border-t border-white/5">
          {/* Dynamic Background Image & Alternative Modular Cube Engine Watermark */}
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
            {/* Alternative Watermark: Isometric Modular Cube Engine */}
            <div className="absolute -left-12 -top-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-primary">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                {/* Isometric Cube Faces */}
                <polygon points="100,20 170,60 100,100 30,60" strokeWidth="1.5" />
                <polygon points="30,60 100,100 100,180 30,140" strokeWidth="1.5" />
                <polygon points="170,60 100,100 100,180 170,140" strokeWidth="1.5" />
                <line x1="100" y1="20" x2="100" y2="180" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="14" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-10 text-center max-w-xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-foreground">
                Select Your Turnkey Product Suite
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-muted">
                Each product is engineered from real campaign data and packaged for fast execution.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {turnkeyProducts.map((product, index) => (
                <Reveal key={product.id} delay={index * 60}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-card p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
                    <div>
                      {/* Product Visual Container - Centered to ensure full visual accuracy */}
                      <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl bg-black/60 border border-white/10">
                        <Image
                          src={product.imageSrc}
                          alt={product.title}
                          fill
                          unoptimized
                          sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-black/30 to-transparent" />
                        
                        <div className="absolute top-2.5 left-2.5 flex size-8 items-center justify-center rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-accent">
                          <product.icon className="size-4" />
                        </div>
                        <span className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full border border-primary/30 bg-black/80 px-2.5 py-0.5 text-[10px] font-bold text-accent backdrop-blur-md">
                          <Sparkles className="size-2.5" />
                          {product.badge}
                        </span>

                        <div className="absolute bottom-2 left-2.5 right-2.5">
                          <span className="inline-block rounded-md bg-black/75 px-2 py-0.5 text-[10px] font-semibold text-accent border border-white/10 backdrop-blur-md">
                            {product.deliverablesHighlight}
                          </span>
                        </div>
                      </div>

                      {/* Category & Turnaround */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-muted uppercase tracking-wider">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-medium text-muted/80">
                          <Clock className="size-3 text-accent" />
                          <span>{product.turnaround}</span>
                        </div>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                        {product.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted">
                        {product.description}
                      </p>

                      {/* Included Deliverables */}
                      <div className="mt-4 space-y-2 border-t border-white/5 pt-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent/80 block">
                          Included In This Suite
                        </span>
                        <ul className="space-y-1.5">
                          {product.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2 text-xs text-foreground/85">
                              <CheckCircle2 className="mt-0.5 size-3 shrink-0 text-accent" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <Link
                        href={`/contact?product=${product.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[#c68c12] px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 active:scale-95"
                      >
                        Deploy This Package
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Dedicated Brand Deployments: Real Brands Agurafi Serves (Enhanced Background) */}
        <section className="relative py-16 lg:py-24 border-t border-white/10 overflow-hidden">
          {/* Dynamic Background Image with Depth & Obsidian-Emerald Overlay */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/showcase/workflow-pipeline-bg.jpg"
              alt="Agurafi Enterprise Pipeline"
              fill
              unoptimized
              className="object-cover object-center opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/85 to-[#04201c]" />
            
            {/* Alternative Watermark: Exponential Growth Trajectory & Data Vector */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.06] pointer-events-none select-none text-accent">
              <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                <path d="M 20,180 L 180,180 M 20,180 L 20,20" strokeWidth="1.5" />
                <path d="M 20,160 Q 70,150 110,100 T 180,30" strokeWidth="2.5" />
                <path d="M 20,160 Q 70,150 110,100 T 180,30 L 180,180 L 20,180 Z" fill="currentColor" fillOpacity="0.05" />
                <circle cx="180" cy="30" r="5" fill="currentColor" />
                <circle cx="110" cy="100" r="4" fill="currentColor" />
                <line x1="60" y1="180" x2="60" y2="155" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="110" y1="180" x2="110" y2="100" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="150" y1="180" x2="150" y2="60" strokeWidth="1" strokeDasharray="2 2" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground">
                How Leading Brands Deploy <span className="text-gradient-gold">Agurafi Products</span>
              </h2>
              <p className="mt-3 text-pretty text-xs sm:text-sm text-muted max-w-2xl mx-auto">
                Discover how financial institutions, tech innovators, logistics leaders, and consumer brands leverage our product packages to accelerate revenue and market authority.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandCaseStudies.map((brand, index) => (
                <Reveal key={brand.name} delay={index * 70}>
                  <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-[#06241f]/90 via-[#031a16]/95 to-black/90 p-5 sm:p-6 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                    <div>
                      {/* Brand Logo & Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/[0.08] backdrop-blur-md p-1.5 shadow-md flex items-center justify-center">
                            <Image
                              src={brand.logo}
                              alt={brand.name}
                              fill
                              unoptimized
                              className="object-contain p-1"
                            />
                          </div>
                          <div>
                            <h3 className="font-heading text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                              {brand.name}
                            </h3>
                            <span className="text-[11px] text-muted flex items-center gap-1">
                              <Building2 className="size-3 text-accent" />
                              {brand.industry}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Deployed Package Tag */}
                      <div className="mt-3.5">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10.5px] font-semibold text-accent">
                          <Sparkles className="size-2.5" />
                          {brand.deployedProduct}
                        </span>
                        <h4 className="mt-2 text-xs sm:text-[13px] font-bold text-foreground">
                          {brand.tagline}
                        </h4>
                        <p className="mt-2 text-xs text-muted leading-relaxed">
                          {brand.description}
                        </p>
                      </div>
                    </div>

                    {/* Results Footer */}
                    <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2 text-[11px] font-medium text-emerald-400">
                      <ShieldCheck className="size-3.5 text-primary shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: brand.results }} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Discuss - Open Editorial CTA (Box Removed, Label Removed, Font Optimized) */}
        <section className="relative py-20 lg:py-28 overflow-hidden border-t border-white/10">
          {/* Dynamic Background Image with Depth & Obsidian-Emerald Overlay */}
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/images/showcase/workflow-pipeline-bg.jpg"
              alt="Agurafi Digital Workflow Pipeline"
              fill
              unoptimized
              className="object-cover object-center opacity-35 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#04201c] via-[#021310]/85 to-[#04201c]" />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full opacity-20 blur-[130px]"
              style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
            />
            {/* Subtle Brand Logo Watermark */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 size-96 opacity-[0.06] pointer-events-none">
              <Image
                src="/images/branding/agurafi-3d-logo.png"
                alt="Agurafi 3D Logo Watermark"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-foreground">
                Ready to Deploy Your <span className="text-gradient-gold">Growth Suite?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted leading-relaxed">
                Connect directly with our creative directors and technical leads to launch your customized brand, social, or digital package in days.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-[#c68c12] px-7 py-3.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(228,172,35,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Order a Package
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3.5 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-md transition-all hover:bg-white/12 hover:border-white/40"
                >
                  Learn About Our Team
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
