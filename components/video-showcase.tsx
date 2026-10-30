"use client"

import { useState, useRef } from "react"
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

      {/* Video Player Display (Vertical 9:16 Aspect) */}
      <div
        className="relative mx-auto aspect-[9/16] w-full max-w-[320px] sm:max-w-[340px] cursor-pointer overflow-hidden rounded-xl border border-white/15 bg-black/80 shadow-2xl"
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
            <span className={`size-1.5 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
            <span className="font-medium text-white/90">{isPlaying ? "Playing" : "Click to Play"}</span>
          </div>
          <span className="text-[10px] text-white/70 bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
            HD 1080p
          </span>
        </div>
      </div>

      {/* Bottom Description & Context */}
      <div className="mt-4 pt-3 border-t border-white/5">
        <h3 className="font-heading text-base sm:text-[17px] font-bold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-accent">
          <CheckCircle2 className="size-3.5 text-primary shrink-0" />
          <span>{clientContext}</span>
        </div>
      </div>
    </div>
  )
}

export function VideoShowcase() {
  return (
    <section id="work-in-action" className="relative py-20 lg:py-28 overflow-hidden bg-white/[0.01]">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, #e4ac23, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-balance font-heading text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-foreground">
            Our Work in <span className="text-gradient-gold">Action</span>
          </h2>
          <p className="mt-3 text-pretty text-sm sm:text-base leading-relaxed text-muted">
            Behind the lens at real client shoots and live on social feeds. Authentic production by the Agurafi team.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 max-w-4xl mx-auto">
          {/* Video 1: Real On-Site Event Videography & Production */}
          <Reveal delay={60}>
            <VideoCard
              src="/video/AGM C30.mp4"
              poster="/video/c30-poster.jpg"
              tag="Commercial & Event Production"
              title="On-Site Production & Event Filming"
              description="Live multi-camera broadcast coverage and high-energy stage videography executed on-location by the Agurafi production team."
              clientContext="Live Corporate Summit & Brand Activation Coverage"
              icon={Clapperboard}
            />
          </Reveal>

          {/* Video 2: Real TikTok / Reel Viral Creator Campaign */}
          <Reveal delay={120}>
            <VideoCard
              src="/video/AGM C31.mp4"
              poster="/video/c31-poster.jpg"
              tag="Social Media & Creator Campaign"
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
