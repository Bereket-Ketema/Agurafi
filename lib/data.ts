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
} from "lucide-react"
import type { ClientLogo, Highlight, NavLink, Service, Stat, TeamMember } from "@/lib/types"

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
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
    title: "Paid Advertising (TikTok, Google & Meta Ads)",
    description: "Creating and managing performance campaigns to increase reach, leads, and sales.",
    icon: Megaphone,
  },
  {
    title: "Social Media Management",
    description: "Content calendars, community management, and platform-native creative.",
    icon: Share2,
  },
  {
    title: "Social Media Marketing",
    description: "Creating and managing engaging content to grow your online presence and reach your audience.",
    icon: Sparkles,
  },
  {
    title: "Branding & Brand Identity",
    description: "Strong brand strategies, logos, visual identities, and designs that help businesses stand out.",
    icon: Palette,
  },
  {
    title: "Video Editing & Motion Design",
    description: "Editing high-quality promotional videos, advertisements, and social media content.",
    icon: Clapperboard,
  },
  {
    title: "Graphic Design",
    description: "Designing posters, marketing materials, social media posts, and other visual assets.",
    icon: PenTool,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Technical, content, and authority-building strategies that compound organic visibility.",
    icon: Search,
  },
  {
    title: "Marketing Strategy & Growth Solutions",
    description: "Data-driven strategies to improve brand awareness, customer engagement, and business growth.",
    icon: TrendingUp,
  },
  {
    title: "Full-Stack Website & Mobile Application Development",
    description: "Building fast, modern websites and mobile apps that turn your digital presence into a growth engine.",
    icon: Code2,
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
    role: "Website Developer & Digital Marketer",
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

export const clientLogos: ClientLogo[] = [
  { name: "Simple", imageSrc: "/images/Simple.png" },
  { name: "Mela", imageSrc: "/images/mela.png" },
  { name: "Yegna", imageSrc: "/images/Yegna.png" },
  { name: "Zefir", imageSrc: "/images/Zefir.png" },
  { name: "Eye", imageSrc: "/images/eye.png" },
  { name: "Visa", imageSrc: "/images/visa.png" },
]

export const partnerLogos: ClientLogo[] = [
  { name: "Partner", imageSrc: "/logo/-2147483648_-216814.jpg" },
  { name: "Partner", imageSrc: "/logo/-2147483648_-216825.jpg" },
  { name: "Partner", imageSrc: "/logo/-2147483648_-216832.jpg" },
  { name: "Partner", imageSrc: "/logo/-2147483648_-216836.jpg" },
  { name: "Partner", imageSrc: "/logo/IMG_20260921_144333_260.jpg" },
  { name: "Partner", imageSrc: "/logo/IMG_2278.PNG" },
  { name: "Partner", imageSrc: "/logo/file_00000000467c822f89e2751afd43dd0c.png" },
  { name: "Partner", imageSrc: "/logo/file_000000009504821193699a47cc13c0c1.png" },
  { name: "Partner", imageSrc: "/logo/file_000000009ab88208b2ea47e20855e464.png" },
  { name: "Partner", imageSrc: "/logo/photo_2026-07-27_08-20-14.jpg" },
  { name: "Partner", imageSrc: "/logo/photo_3_2026-07-27_08-17-16.jpg" },
  { name: "Rotech", imageSrc: "/logo/rotech.png" },
  { name: "Pice", imageSrc: "/logo/pice.png" },
  { name: "Mela", imageSrc: "/logo/mela.png" },
  { name: "Eye", imageSrc: "/logo/eye.png" },
  { name: "Visa", imageSrc: "/logo/visa.png" },
]
