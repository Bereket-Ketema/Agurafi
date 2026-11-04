"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, Pause, Volume2, VolumeX, Clapperboard, Share2, Sparkles, CheckCircle2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

interface VideoCardProps {
  src: string
  poster: string
  tag: string
  title: string
  description: string
  clientContext: string
  icon: typeof Clapperboard
}

function VideoCard({ src, poster, tag, title, description, clientContext, icon: Icon }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#0a352f]/90 to-[#041d19]/95 p-4 sm:p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
      {/* Top Meta Details */}
      <div className="mb-3.5 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary/20 text-accent">
            <Icon className="size-3.5" />
          </span>
          <span className="text-xs font-bold text-foreground">{tag}</span>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-accent">
          <Sparkles className="size-2.5" />
          Real Production
        </span>
      </div>

      {/* Video Player Display - Equal Heights */}
      <div
        className="relative mx-auto h-[380px] sm:h-[420px] aspect-[9/16] w-full max-w-[320px] sm:max-w-[340px] cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-black/80 shadow-2xl"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          loop
          muted={isMuted}
          preload="metadata"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        {/* Central Play/Pause Watermark Overlay (shows when paused) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all">
            <div className="flex size-14 items-center justify-center rounded-full border-2 border-primary/80 bg-primary/30 text-white shadow-[0_0_25px_rgba(228,172,35,0.45)] transition-transform hover:scale-110 active:scale-95">
              <Play className="ml-1 size-6 fill-white text-white" />
            </div>
          </div>
        )}

        {/* Floating Sound Toggle Control */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="absolute top-3 right-3 z-20 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-105 active:scale-95"
        >
          {isMuted ? <VolumeX className="size-4 text-muted-foreground" /> : <Volume2 className="size-4 text-accent" />}
        </button>

        {/* Playback Badge on Video */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white">
          <div className="flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-0.5 backdrop-blur-md border border-white/10 text-[10.5px]">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="font-medium text-white/90">{isPlaying ? "Playing" : "Click to Play"}</span>
          </div>
          <span className="text-[10px] text-white/70 bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
            HD 1080p
          </span>
        </div>
      </div>

      {/* Simplified Bottom Text - Clean, Concise, and Balanced */}
      <div className="mt-3.5 pt-2.5 border-t border-white/5">
        <h3 className="font-heading text-sm sm:text-base font-bold text-foreground group-hover:text-accent transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="mt-1 text-xs text-muted line-clamp-1">
          {clientContext}
        </p>
      </div>
    </div>
  )
}

export function VideoShowcase() {
  return (
    <section id="work-in-action" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Dynamic Background Image & Subtle 3D Logo Watermark */}
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
        {/* Alternative Watermark: Cinema Film Reel & Waveform Spectrum */}
        <div className="absolute -right-12 -bottom-12 w-80 h-80 opacity-[0.06] select-none pointer-events-none text-accent">
          <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
            <circle cx="100" cy="100" r="80" strokeWidth="2" />
            <circle cx="100" cy="100" r="28" strokeWidth="2" />
            <circle cx="100" cy="50" r="14" strokeWidth="1.5" />
            <circle cx="100" cy="150" r="14" strokeWidth="1.5" />
            <circle cx="50" cy="100" r="14" strokeWidth="1.5" />
            <circle cx="150" cy="100" r="14" strokeWidth="1.5" />
            {/* Film sprockets & radial lines */}
            <circle cx="100" cy="100" r="8" fill="currentColor" />
            <line x1="20" y1="100" x2="180" y2="100" strokeWidth="0.75" strokeDasharray="3 3" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-foreground">
            Our Work in <span className="text-gradient-gold">Action</span>
          </h2>
          <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted">
            Behind the lens at real client shoots and live on social feeds. Authentic production by the Agurafi team.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-w-7xl mx-auto">
          {/* Video 1: New Essential Video 1 (AGM C11) */}
          <Reveal delay={40}>
            <VideoCard
              src="/video/AGM C11.mp4"
              poster="/video/c11-poster.jpg"
              tag="Commercial Production"
              title="Brand Story & Visual Campaign"
              description="High-impact brand commercial with cinematic color grading, sound design, and rhythm-matched motion pacing."
              clientContext="Signature Brand Commercial & Visual Campaign"
              icon={Clapperboard}
            />
          </Reveal>

          {/* Video 2: New Essential Video 2 (AGM C12) */}
          <Reveal delay={80}>
            <VideoCard
              src="/video/AGM C12.mp4"
              poster="/video/c12-poster.jpg"
              tag="Creative Direction"
              title="High-Energy Digital Promo"
              description="Engaging commercial spot engineered for social-first audience retention with dynamic typography and punchy transitions."
              clientContext="Promotional Commercial & Social Rollout"
              icon={Sparkles}
            />
          </Reveal>

          {/* Video 3: Former Video 1 (AGM C30) */}
          <Reveal delay={120}>
            <VideoCard
              src="/video/AGM C30.mp4"
              poster="/video/c30-poster.jpg"
              tag="Event & Broadcast"
              title="On-Site Production & Event Filming"
              description="Live multi-camera broadcast coverage and high-energy stage videography executed on-location by the Agurafi production team."
              clientContext="Live Corporate Summit & Brand Activation Coverage"
              icon={Clapperboard}
            />
          </Reveal>

          {/* Video 4: Former Video 2 (AGM C31) */}
          <Reveal delay={160}>
            <VideoCard
              src="/video/AGM C31.mp4"
              poster="/video/c31-poster.jpg"
              tag="Social & Creator"
              title="Viral Short-Form & Creator Content"
              description="Platform-native TikTok and Instagram Reels engineered with creator chemistry, conversational hooks, and dynamic Ethiopian captions."
              clientContext="Organic Social Campaign: 'POV: We Handle Your Social Media'"
              icon={Share2}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
