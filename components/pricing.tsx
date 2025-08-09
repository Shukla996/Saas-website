"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { GradientSpotlight } from "@/components/gradient-spotlight"
import { cn } from "@/lib/utils"

type Tier = {
  name: string
  price: string
  features: string[]
  cta: string
  highlighted?: boolean
}

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    features: ["10 name ideas/day", "Basic taglines", "Copy & Save"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$12/mo",
    features: ["Unlimited ideas", "Premium taglines", "Domain & social checks", "Priority support"],
    cta: "Subscribe Now",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29/mo",
    features: ["All Pro features", "Team workspaces", "Export to CSV", "Brand kit presets"],
    cta: "Subscribe Now",
  },
]

export function Pricing() {
  return (
    <div className="relative py-20">
      <GradientSpotlight color="#021B23" size={1100} opacity={0.12} className="top-1/4 left-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold">Pricing</h2>
            <p className="text-zinc-400 mt-2">Simple plans that scale with you.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <AnimatedSection key={tier.name} animation="scale-in" delay={idx * 60}>
              <Card
                className={cn(
                  "rounded-2xl border bg-white/5 backdrop-blur-md transition-all",
                  "border-[#021B23]/70 hover:shadow-[0_0_50px_rgba(10,182,188,0.18)]",
                  tier.highlighted ? "scale-[1.02] border-[#045C43]/60" : "",
                )}
              >
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>{tier.name}</span>
                    <span className="text-xl font-semibold text-[#0AB6BC]">{tier.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-zinc-300">
                        <Check className="h-4 w-4 mt-0.5 text-[#0AB6BC]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-[#045C43] to-[#0AB6BC] text-black">{tier.cta}</Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
