"use client"

import { cn } from "@/lib/utils"

type GradientSpotlightProps = {
  className?: string
  size?: number
  opacity?: number
  color?: string // hex or rgba
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "")
  const bigint = Number.parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16,
  )
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b }
}

export function GradientSpotlight(
  { className = "", size = 800, opacity = 0.12, color = "#0AB6BC" }: GradientSpotlightProps = {
    className: "",
    size: 800,
    opacity: 0.12,
    color: "#0AB6BC",
  },
) {
  const { r, g, b } = hexToRgb(color)
  const bg = `radial-gradient(closest-side, rgba(${r}, ${g}, ${b}, ${opacity}) 0%, rgba(${r}, ${g}, ${b}, 0) 70%)`
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute -z-10 rounded-full blur-3xl", className)}
      style={{ width: size, height: size, background: bg }}
    />
  )
}
