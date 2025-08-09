"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PencilLine, Sparkles, Bookmark } from "lucide-react"
import { GradientSpotlight } from "@/components/gradient-spotlight"

export function HowItWorks() {
  const steps = [
    { icon: PencilLine, title: "Describe", text: "Tell us about your startup or product." },
    { icon: Sparkles, title: "Generate", text: "Get a list of brandable names + taglines." },
    { icon: Bookmark, title: "Save", text: "Copy, like, and save your favorites." },
  ]
  return (
    <div className="relative py-20">
      <GradientSpotlight color="#045C43" size={900} opacity={0.1} className="top-1/3 left-[15%]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold">How It Works</h2>
            <p className="text-zinc-400 mt-2">Three simple steps to the perfect name.</p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon
            return (
              <AnimatedSection key={s.title} animation="fade-up" delay={idx * 80}>
                <Card className="rounded-2xl border border-[#021B23]/70 bg-white/5 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#021B23] bg-black/50">
                        <Icon className="h-5 w-5 text-[#0AB6BC]" />
                      </span>
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-zinc-300">{s.text}</CardContent>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </div>
  )
}
