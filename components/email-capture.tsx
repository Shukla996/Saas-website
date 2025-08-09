"use client"

import type React from "react"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import { GradientSpotlight } from "@/components/gradient-spotlight"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function EmailCapture() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Thanks for subscribing!",
      description: "We will send 20+ extra name ideas to your inbox.",
    })
    setEmail("")
  }

  return (
    <div className="relative py-24">
      <GradientSpotlight size={800} opacity={0.14} className="top-6 left-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="blur-reveal">
          <div className="mx-auto max-w-2xl rounded-2xl border border-[#021B23]/70 bg-white/5 backdrop-blur-md p-8 text-center shadow-[0_0_60px_rgba(2,27,35,0.35)]">
            <h3 className="text-xl font-semibold">{"Want even more creative names?"}</h3>
            <p className="text-zinc-400 mt-2">{"Get 20+ extra name ideas in your inbox."}</p>
            <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-black/40 border-[#021B23] text-[#F6F6F6] placeholder:text-zinc-500"
                aria-label="Email address"
              />
              <Button type="submit" className="bg-gradient-to-r from-[#045C43] to-[#0AB6BC] text-black">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
