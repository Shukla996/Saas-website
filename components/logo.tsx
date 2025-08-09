"use client"

import { Sparkles } from "lucide-react"

type LogoProps = {
  size?: number
}

export function Logo({ size = 20 }: LogoProps = { size: 20 }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[#021B23] bg-black/60">
        <Sparkles style={{ width: size, height: size }} className="text-[#0AB6BC]" />
      </span>
      <span className="sr-only">NameForge</span>
    </span>
  )
}
