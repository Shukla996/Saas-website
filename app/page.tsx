"use client"

import { useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { GeneratedNames } from "@/components/generated-names"
import { BrandTools } from "@/components/brand-tools"
import { Pricing } from "@/components/pricing"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { EmailCapture } from "@/components/email-capture"
import { Footer } from "@/components/footer"
import { type NameIdea, seedIdeas, generateNameIdeas } from "@/lib/naming"

export default function Page() {
  const [ideas, setIdeas] = useState<NameIdea[]>(seedIdeas)
  const [saved, setSaved] = useState<NameIdea[]>([])

  const onGenerate = (prompt: string) => {
    const next = generateNameIdeas(prompt, 8)
    setIdeas(next)
    // Optionally scroll to results
    const el = document.getElementById("generated")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const onSave = (idea: NameIdea) => {
    setSaved((prev) => {
      if (prev.find((x) => x.name === idea.name)) return prev
      return [idea, ...prev]
    })
  }

  const primaryName = useMemo(() => ideas[0]?.name ?? "NameForge", [ideas])

  return (
    <main className="min-h-screen bg-black text-[#F6F6F6] antialiased">
      <Header brand="NameForge" />
      {/* Hero */}
      <section id="home">
        <Hero onGenerate={onGenerate} />
      </section>

      {/* Generated Names */}
      <section id="generated" className="scroll-mt-24">
        <GeneratedNames ideas={ideas} onSave={onSave} />
      </section>

      {/* Brand Tools */}
      <section id="tools" className="scroll-mt-24">
        <BrandTools name={primaryName} />
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24">
        <Pricing />
      </section>

      {/* How it works */}
      <section>
        <HowItWorks />
      </section>

      {/* Use Cases */}
      <section>
        <UseCases />
      </section>

      {/* Email Capture */}
      <section id="contact" className="scroll-mt-24">
        <EmailCapture />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
