import {
  Megaphone,
  Share2,
  Sparkles,
  Palette,
  Clapperboard,
  PenTool,
  Search,
  TrendingUp,
  Code2,
  Target,
  Rocket,
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
  Compass,
  CheckCircle2,
  Layers,
  Layout,
  Video,
  FileCheck,
  ShoppingBag,
} from "lucide-react"
import type {
  ClientLogo,
  Highlight,
  NavLink,
  Service,
  Stat,
  TeamMember,
  SolutionItem,
  ChallengeSolutionItem,
  WhyChooseUsItem,
  WorkStepItem,
  ProductItem,
} from "@/lib/types"

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact Us", href: "/contact" },
]

export const heroStats: Stat[] = [
  { value: "120+", label: "Brands We Work With" },
  { value: "6.8x", label: "Avg. ROAS Lift" },
  { value: "98%", label: "Client Retention" },
]

export const aboutStats: Stat[] = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Specialists on Team" },
  { value: "60+", label: "Industries Served" },
]

export const aboutHighlights: Highlight[] = [
  {
    title: "Strategy",
    description: "Research-backed positioning and growth plans built around your real business goals.",
    icon: Target,
  },
  {
    title: "Technology",
    description: "Modern tooling, automation, and full-stack builds that scale with your brand.",
    icon: Code2,
  },
  {
    title: "Scalability",
    description: "Campaigns and systems designed to grow with you, from launch to market leader.",
    icon: Rocket,
  },
]

export const services: Service[] = [
  {
    id: "paid-advertising",
    title: "Paid Advertising (TikTok, Google & Meta Ads)",
    description: "Creating and managing performance campaigns to increase reach, leads, and sales.",
    icon: Megaphone,
    imageSrc: "/images/services/paid.jpeg",
    problem: "Businesses often spend ad budgets without seeing qualified inquiries or profitable return on investment.",
    solution: "We build targeted audience funnels, compelling ad creative, and continuous campaign optimization across TikTok, Google, and Meta Ads to maximize reach and drive high-intent leads.",
    deliverables: [
      "Audience research & targeting architecture",
      "High-converting visual ad creatives & copywriting",
      "Campaign setup, A/B testing & pixel/event tracking",
      "Ongoing ROAS optimization & weekly performance reporting",
    ],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Content calendars, community management, and platform-native creative.",
    icon: Share2,
    imageSrc: "/images/services/social-media-management.jpeg",
    problem: "Maintaining an active, high-standard social presence requires consistent creative production and daily community interaction that busy founders rarely have time for.",
    solution: "We handle end-to-end social media operations—from strategic monthly calendars to community engagement—ensuring your brand maintains an authoritative, polished presence.",
    deliverables: [
      "Monthly content calendar & scheduling",
      "Platform-specific caption writing & hashtag strategy",
      "Active comment & DM community management",
      "Monthly engagement analytics & growth insights",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Creating and managing engaging content to grow your online presence and reach your audience.",
    icon: Sparkles,
    imageSrc: "/images/services/social-marketing.jpeg",
    problem: "Generic posts fail to capture consumer attention in crowded feeds, leading to stagnant follower growth and zero conversion.",
    solution: "We devise organic viral campaigns, trend-responsive concepts, and value-led content that sparks authentic conversations and builds a loyal audience around your brand.",
    deliverables: [
      "Campaign concept ideation & narrative design",
      "Trend-jacking & platform-native content formats",
      "Audience growth & reach expansion initiatives",
      "Cross-channel organic distribution tactics",
    ],
  },
  {
    id: "branding-identity",
    title: "Branding & Brand Identity",
    description: "Strong brand strategies, logos, visual identities, and designs that help businesses stand out.",
    icon: Palette,
    imageSrc: "/images/services/brandings.jpg",
    problem: "Inconsistent visual assets, generic logos, and weak branding dilute market credibility and make your business forgettable.",
    solution: "We build timeless, distinctive visual identities that reflect your company's core values, resonate with target clients, and build enduring market trust.",
    deliverables: [
      "Primary & secondary logo system design",
      "Typography pairing, color theory & brand guidelines",
      "Brand voice, messaging pillars & positioning",
      "Corporate stationery, digital templates & brand manual",
    ],
  },
  {
    id: "video-editing-motion",
    title: "Video Editing & Motion Design",
    description: "Editing high-quality promotional videos, advertisements, and social media content.",
    icon: Clapperboard,
    imageSrc: "/images/services/video-editing.jpeg",
    problem: "Video is the highest-converting digital format, but poorly edited or low-energy videos harm brand perception and get skipped instantly.",
    solution: "Our dedicated in-house video editors craft dynamic, high-retention video content, kinetic typography, and motion graphics tailored for TikTok, Reels, and commercials.",
    deliverables: [
      "Short-form vertical video editing (Reels, TikTok, Shorts)",
      "Motion graphics, logo stingers & lower thirds",
      "Color grading, sound design & rhythm-matched pacing",
      "Promotional video ads & product showcase edits",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Designing posters, marketing materials, social media posts, and other visual assets.",
    icon: PenTool,
    imageSrc: "/images/services/graphics-design.jpeg",
    problem: "Cluttered or amateur graphics cause potential customers to question product quality and choose competitors with cleaner presentation.",
    solution: "We produce clean, modern, and impactful graphics that communicate your message quickly and maintain visual excellence across every digital and print touchpoint.",
    deliverables: [
      "Marketing posters, flyers & digital banners",
      "Social media post templates & carousel designs",
      "Packaging, merchandise & outdoor display artwork",
      "Pitch decks & client presentation designs",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description: "Technical, content, and authority-building strategies that compound organic visibility.",
    icon: Search,
    imageSrc: "/images/services/seo.jpeg",
    problem: "Relying solely on paid ads can be unsustainable; without SEO, your website remains invisible to users actively searching for your solutions on Google.",
    solution: "We execute on-page technical fixes, semantic search optimizations, and content blueprints that establish search engine trust and drive long-term organic traffic.",
    deliverables: [
      "Comprehensive website technical SEO audit",
      "Keyword research, search intent mapping & metadata optimization",
      "Internal linking architecture & content structuring",
      "Google Search Console & indexing performance tracking",
    ],
  },
  {
    id: "marketing-strategy-growth",
    title: "Marketing Strategy & Growth Solutions",
    description: "Data-driven strategies to improve brand awareness, customer engagement, and business growth.",
    icon: TrendingUp,
    imageSrc: "/images/services/strategy.jpeg",
    problem: "Scattered marketing tactics without an overarching plan lead to wasted budgets, disjointed messaging, and unpredictable results.",
    solution: "We craft integrated, multi-phase marketing roadmaps that align your creative output, distribution channels, and sales processes with concrete business milestones.",
    deliverables: [
      "Market, competitor & audience landscape analysis",
      "Full-funnel customer acquisition roadmap",
      "Key performance indicator (KPI) framework",
      "Quarterly growth reviews & strategic pivots",
    ],
  },
  {
    id: "web-mobile-development",
    title: "Full-Stack Website & Mobile Application Development",
    description: "Building fast, modern websites and mobile apps that turn your digital presence into a growth engine.",
    icon: Code2,
    imageSrc: "/images/services/web-dev.jpeg",
    problem: "Slow, broken, or outdated websites fail to convert visitors, damage search rankings, and limit business automation.",
    solution: "We build modern, blazing-fast, and responsive web and mobile applications using modern frameworks that provide seamless user experiences and drive conversions.",
    deliverables: [
      "Custom responsive web development (Next.js, React, TypeScript)",
      "Mobile-optimized user interfaces & responsive design",
      "Contact form integrations, analytics & CMS setup",
      "Technical performance optimization & zero-downtime deployment",
    ],
  },
]

export const solutionsData: SolutionItem[] = [
  {
    title: "Research & Analyze",
    description: "Deep audit of existing workflows, market positioning, and audience data to map a high-ROI digital architecture.",
    icon: Search,
    badge: "Step One",
  },
  {
    title: "Concept & Design",
    description: "Designing memorable brand identities, intuitive interfaces, and cinematic assets tailored for maximum conversion.",
    icon: Palette,
    badge: "Step Two",
  },
  {
    title: "Engine & Integrate",
    description: "Building high-speed web apps and targeted performance ad funnels across TikTok, Google, and Meta Ads.",
    icon: Code2,
    badge: "Step Three",
  },
  {
    title: "Deploy & Scale",
    description: "Launching live campaigns, monitoring real-time performance, and scaling revenue operations without friction.",
    icon: Rocket,
    badge: "Step Four",
  },
]

export const challengesData: ChallengeSolutionItem[] = [
  {
    challenge: "Low Online Visibility",
    challengeDetail: "Struggling to reach ready-to-buy customers in crowded digital spaces.",
    solution: "Targeted Ads & SEO",
    solutionDetail: "High-intent search ranking and precision ad funnels that capture active buyers.",
    icon: Search,
  },
  {
    challenge: "Inconsistent Brand Image",
    challengeDetail: "Outdated graphics and weak messaging dilute market authority.",
    solution: "Cohesive Visual Suite",
    solutionDetail: "Unified brand manuals, modern typography, and cinematic motion video.",
    icon: ShieldCheck,
  },
  {
    challenge: "Low Visitor Conversion",
    challengeDetail: "Website visitors leave without inquiring, booking, or purchasing.",
    solution: "Conversion-Engineered UX",
    solutionDetail: "Fast-loading, mobile-first websites with frictionless action pathways.",
    icon: Target,
  },
  {
    challenge: "Scattered Marketing Tactics",
    challengeDetail: "Irregular posting without a roadmap wastes budget and momentum.",
    solution: "Integrated Growth Roadmap",
    solutionDetail: "Synchronized creative production, paid distribution, and clear milestones.",
    icon: Compass,
  },
]

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    title: "Tailored Strategy",
    description: "No generic templates. Every build and campaign directly aligns with your business revenue goals.",
    icon: Target,
  },
  {
    title: "Integrated Team",
    description: "Designers, developers, videographers, and media buyers collaborating seamlessly under one roof.",
    icon: Users,
  },
  {
    title: "Measurable Results",
    description: "Clear milestone reporting, direct communication, and real business metrics you can rely on.",
    icon: CheckCircle2,
  },
  {
    title: "Scalable Systems",
    description: "Marketing funnels and technical architectures engineered to support your company's growth.",
    icon: Rocket,
  },
]

export const workStepsData: WorkStepItem[] = [
  {
    step: "01",
    title: "Discover",
    description: "Understand your needs, business goals, audience, and challenges.",
    details: "We audit your digital footprint and map target milestones.",
  },
  {
    step: "02",
    title: "Design and Deliver",
    description: "Develop and implement a suitable solution based on agreed requirements.",
    details: "Our specialists craft custom creative assets and deploy systems.",
  },
  {
    step: "03",
    title: "Improve and Grow",
    description: "Review outcomes, identify opportunities for improvement, and support future growth.",
    details: "We optimize performance metrics and support continuous scaling.",
  },
]

export const productsData: ProductItem[] = [
  {
    id: "brand-identity-kit",
    title: "Brand Identity Blueprint",
    category: "Branding",
    description: "A complete, modern brand identity suite built to establish instant market authority and recognition.",
    badge: "Most Popular",
    turnaround: "5-7 Business Days",
    icon: Palette,
    imageSrc: "/images/services/branding.jpg",
    features: [
      "Primary & secondary vector logo system",
      "Curated typography pairings & color palettes",
      "Comprehensive Brand Guidelines PDF manual",
      "Social media avatar & banner kits for all networks",
      "Corporate business card & letterhead artwork",
    ],
  },
  {
    id: "social-growth-pack",
    title: "Social Media Growth Engine",
    category: "Social Media",
    description: "Turn your social channels into active customer acquisition engines with curated monthly creative assets.",
    badge: "Turnkey Package",
    turnaround: "Monthly Retainer",
    icon: Share2,
    imageSrc: "/images/services/social-media-management.jpg",
    features: [
      "30-day structured content calendar & hooks",
      "12 high-converting vertical video templates",
      "6 carousel educational graphic designs",
      "Platform-native caption writing & hashtag matrix",
      "Bi-weekly performance analytics review",
    ],
  },
  {
    id: "performance-ad-suite",
    title: "Performance Ad Creative Suite",
    category: "Paid Advertising",
    description: "Stop wasting ad spend with custom visual ads engineered specifically for Meta, TikTok, and Google Ads.",
    badge: "High ROAS",
    turnaround: "3-5 Business Days",
    icon: Megaphone,
    imageSrc: "/images/services/paid-ads.jpg",
    features: [
      "10 high-converting static & motion ad creatives",
      "Short-form video hooks & UGC-style ad variations",
      "Compelling direct-response copy & headline matrix",
      "A/B creative testing architecture",
      "Pixel & conversion tracking consultation",
    ],
  },
  {
    id: "web-starter-engine",
    title: "Next.js High-Speed Website Engine",
    category: "Web Development",
    description: "A lightning-fast, conversion-optimized business website or landing page built with modern Next.js and TypeScript.",
    badge: "Custom Build",
    turnaround: "1-2 Weeks",
    icon: Code2,
    imageSrc: "/images/services/web-dev.jpg",
    features: [
      "Fully responsive desktop, tablet & mobile layout",
      "Sub-second load times & 95+ Google Lighthouse score",
      "Integrated Web3Forms lead capture with email alerts",
      "On-page technical SEO & Open Graph meta tags",
      "Zero-downtime deployment setup",
    ],
  },
  {
    id: "cinematic-video-pack",
    title: "Cinematic Short-Form Video Pack",
    category: "Video & Motion",
    description: "High-retention video production tailored to captivate audiences across Instagram Reels, TikTok, and YouTube Shorts.",
    badge: "Viral Formats",
    turnaround: "4-6 Business Days",
    icon: Clapperboard,
    imageSrc: "/images/services/video-editing.jpg",
    features: [
      "8 professionally edited short-form vertical videos",
      "Kinetic typography captions & dynamic sound effects",
      "Cinematic color grading & seamless transitions",
      "Animated brand logo bumper / stinger",
      "Optimized for 9:16 mobile viewing standards",
    ],
  },
  {
    id: "local-seo-blueprint",
    title: "Search & Local SEO Authority Pack",
    category: "SEO & Strategy",
    description: "Place your business at the top of Google search results and local maps for high-intent customer searches.",
    badge: "Long-Term ROI",
    turnaround: "1-2 Weeks",
    icon: Search,
    imageSrc: "/images/services/seo.jpg",
    features: [
      "Full technical website SEO audit & error resolution",
      "Google Search Console & Analytics 4 setup",
      "High-intent keyword research & metadata optimization",
      "Schema structured data markup implementation",
      "Local Google Business profile optimization guide",
    ],
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: "Zeyid Alem",
    role: "Creative Director",
    imageSrc: "/images/Ziyad_Alem.jpg",
  },
  {
    name: "Henok Fasika",
    role: "Software developer and Digital Marketer",
    imageSrc: "/images/Henok_Fasika.jpg",
  },
  {
    name: "Abubeker Semeru",
    role: "Creative Cameraman",
    imageSrc: "/images/Abubeker2.jpg",
  },
  {
    name: "Abubeker Sefa",
    role: "Video Editor & Graphic Designer",
    imageSrc: "/images/Abubeker_graphics.jpg",
  },
  {
    name: "Samrawit Teshome",
    role: "Content Creator and Host",
    imageSrc: "/images/samrawit.JPG",
  },
]

export const partnerLogos: ClientLogo[] = [
  { name: "Yegna Trading", imageSrc: "/logo/file_000000009ab88208b2ea47e20855e464.png" },
  { name: "Zephyr Auto Spare Parts", imageSrc: "/logo/photo_3_2026-07-27_08-17-16.jpg" },
  { name: "Mela Express Delivery", imageSrc: "/logo/-2147483648_-216814.jpg" },
  { name: "Willy", imageSrc: "/logo/file_000000009504821193699a47cc13c0c1.png" },
  { name: "Mela Packers & Movers", imageSrc: "/logo/-2147483648_-216832.jpg" },
  { name: "Mela Cleaning Service", imageSrc: "/logo/-2147483648_-216836.jpg" },
  { name: "Gedion Advertising", imageSrc: "/logo/file_00000000467c822f89e2751afd43dd0c.png" },
  { name: "Simple", imageSrc: "/logo/photo_2026-07-27_08-20-14.jpg" },
  { name: "Spark Edge Advertising and Trading", imageSrc: "/logo/IMG_20260921_144333_260.jpg" },
  { name: "Prime Real Estate", imageSrc: "/logo/IMG_2278.PNG" },
  { name: "Globelink Properties", imageSrc: "/logo/-2147483648_-216825.jpg" },
  { name: "Rotech Information Technology", imageSrc: "/logo/rotech.png" },
]
