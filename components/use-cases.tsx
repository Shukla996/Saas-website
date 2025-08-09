"use client"

import { AnimatedSection } from "@/components/animated-section"
import { GradientSpotlight } from "@/components/gradient-spotlight"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Case = { title: string; text: string }

export function UseCases() {
  const cases: Case[] = [
    { title: "Startups", text: "Stand out to investors and customers with memorable names." },
    { title: "Creators", text: "Name your podcast, channels, newsletters, and more." },
    { title: "eCommerce", text: "Find brandable store names and product line identities." },
    { title: "Mobile Apps", text: "App names that pop in app stores and social feeds." },
  ]

  return (
    <div className="relative py-20">
      <GradientSpotlight color="#0AB6BC" size={900} opacity={0.08} className="top-10 left-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold">Use Cases</h2>
            <p className="text-zinc-400 mt-2">Built for modern teams and creators.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, idx) => (
            <AnimatedSection key={c.title} animation="scale-in" delay={idx * 60}>
              <Card className="group rounded-2xl border border-[#021B23]/70 bg-white/5 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(10,182,188,0.15)]">
                <CardHeader>
                  <CardTitle className="text-[#F6F6F6]">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-zinc-300">{c.text}</CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
