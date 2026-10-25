interface CurvedDividerProps {
  position?: "top" | "bottom"
  variant?: "swoop" | "wave" | "parabolic"
  fillColor?: string
  className?: string
  showGlow?: boolean
}

export function CurvedDivider({
  position = "bottom",
  variant = "swoop",
  fillColor = "#04201c",
  className = "",
  showGlow = true,
}: CurvedDividerProps) {
  const isTop = position === "top"

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 w-full overflow-hidden leading-none z-10 ${
        isTop ? "-top-1" : "-bottom-1"
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-10 sm:h-16 lg:h-24 ${isTop ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        {/* Optional glowing multi-color curved accent stroke (Electric Blue -> Gold -> Coral) */}
        {showGlow && (
          <path
            d={
              variant === "swoop"
                ? "M0,35 C380,105 1060,-15 1440,65"
                : variant === "parabolic"
                ? "M0,15 C480,105 960,105 1440,15"
                : "M0,45 C320,95 640,15 960,65 C1200,105 1360,45 1440,55"
            }
            stroke="url(#curved-accent-gradient)"
            strokeWidth="3"
            strokeOpacity="0.45"
            fill="none"
          />
        )}

        {/* Main Solid Curvature Fill */}
        <path
          d={
            variant === "swoop"
              ? "M0,35 C380,105 1060,-15 1440,65 L1440,120 L0,120 Z"
              : variant === "parabolic"
              ? "M0,15 C480,105 960,105 1440,15 L1440,120 L0,120 Z"
              : "M0,45 C320,95 640,15 960,65 C1200,105 1360,45 1440,55 L1440,120 L0,120 Z"
          }
          fill={fillColor}
        />

        <defs>
          <linearGradient id="curved-accent-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#e4ac23" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff6b4a" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
