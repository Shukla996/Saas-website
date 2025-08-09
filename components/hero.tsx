"use client"

import type React from "react"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Wand2 } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { GradientSpotlight } from "@/components/gradient-spotlight"

type HeroProps = {
  onGenerate?: (prompt: string) => void
}

export function Hero({ onGenerate = () => {} }: HeroProps = { onGenerate: () => {} }) {
  const examples = useMemo(
    () => [
      "Try: AI Fitness App",
      "Try: Sustainable Fashion Store",
      "Try: Crypto Portfolio Tracker",
      "Try: Remote Team Tool",
      "Try: Mindfulness Journal App",
    ],
    [],
  )

  const [placeholder, setPlaceholder] = useState(examples[0])
  const [prompt, setPrompt] = useState("")

  useEffect(() => {
    const id = setInterval(() => {
      setPlaceholder((prev) => {
        const idx = examples.indexOf(prev)
        const next = (idx + 1) % examples.length
        return examples[next]
      })
    }, 2500)
    return () => clearInterval(id)
  }, [examples])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const p = prompt.trim() || placeholder.replace(/^Try:\s*/i, "")
    onGenerate(p)
  }

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-64px)]">
      {/* Spline 3D background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated iframe (hidden for users preferring reduced motion) */}
        <iframe
          title="Spline 3D background"
          src="https://my.spline.design/retrofuturisticcircuitloop-rmRwefB4x3MqQO3E1C1AsK1H/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="h-full w-full pointer-events-none motion-reduce:hidden"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          loading="lazy"
          aria-hidden="true"
        />
        {/* prefers-reduced-motion fallback image (from provided Source URL) */}
        <img
          src="https://sjc.microlink.io/wb2u_e_r7xhkVSZYQmgZSd4fSf6XKHbelznpZ_WKOD8BZ3AlY5UVm65inHeeju-FOkszFkUrVxdqYMxYGgtZUQ.jpeg"
          alt="Retro-futuristic circuit 3D background poster"
          className="hidden h-full w-full object-cover motion-reduce:block"
          decoding="async"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Readability overlay above the 3D canvas */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/60 to-black/80"
        aria-hidden="true"
      />

      {/* Background spotlights above overlay but below content */}
      <GradientSpotlight size={900} opacity={0.18} className="top-24 left-1/2 -translate-x-1/2 z-0" />
      <GradientSpotlight color="#045C43" size={700} opacity={0.12} className="top-0 right-[15%] z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <AnimatedSection animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#021B23] bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[#0AB6BC]" />
              AI-Powered Startup/Product Namer
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">
              {"Name Your Startup in Seconds with AI"}
            </h1>
            <p className="mt-4 text-zinc-300">{"Generate catchy, brandable names + taglines instantly."}</p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="blur-reveal" delay={120}>
          <form onSubmit={submit} className="mx-auto mt-8 max-w-2xl">
            <div className="relative rounded-2xl border border-[#021B23]/80 bg-white/5 backdrop-blur-md p-2 shadow-[0_0_60px_rgba(2,27,35,0.35)]">
              <div className="flex items-center gap-2 p-2">
                <Wand2 className="h-5 w-5 text-[#0AB6BC]" aria-hidden />
                <Input
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 bg-transparent border-none focus-visible:ring-0 placeholder:text-zinc-500 text-[#F6F6F6]"
                  aria-label="Describe your startup or product"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-[#045C43] to-[#0AB6BC] text-black hover:shadow-[0_0_24px_rgba(10,182,188,0.35)]"
                >
                  Generate Name
                </Button>
              </div>
            </div>
          </form>
        </AnimatedSection>

        {/* Motion-reduce fallback note (visually hidden) */}
        <span className="sr-only">
          If you prefer reduced motion, a static gradient poster is shown instead of the animated 3D background.
        </span>
      </div>
    </div>
  )
}
