"use client"

import { useEffect, useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Twitter, Instagram, Github, Check, X, ImageIcon } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { GradientSpotlight } from "@/components/gradient-spotlight"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

type BrandToolsProps = {
  name?: string
}

type Availability = "available" | "taken"

export function BrandTools({ name = "NameForge" }: BrandToolsProps = { name: "NameForge" }) {
  const { toast } = useToast()
  const [query, setQuery] = useState(name)
  useEffect(() => setQuery(name), [name])

  const tlds = useMemo(() => [".com", ".io", ".ai"], [])
  const socials = useMemo(
    () => [
      { key: "twitter", label: "Twitter", icon: Twitter },
      { key: "instagram", label: "Instagram", icon: Instagram },
      { key: "github", label: "GitHub", icon: Github },
    ],
    [],
  )

  const [domainAvailability, setDomainAvailability] = useState<Record<string, Availability>>({})
  const [socialAvailability, setSocialAvailability] = useState<Record<string, Availability>>({})

  useEffect(() => {
    // Mock availability checks
    const d: Record<string, Availability> = {}
    tlds.forEach((tld, i) => {
      d[tld] = Math.random() > (i === 0 ? 0.6 : 0.3) ? "available" : "taken"
    })
    const s: Record<string, Availability> = {}
    socials.forEach((scl) => {
      s[scl.key] = Math.random() > 0.5 ? "available" : "taken"
    })
    setDomainAvailability(d)
    setSocialAvailability(s)
  }, [query, tlds, socials])

  const onLogo = () => {
    toast({
      title: "Logo generation coming soon",
      description: "We will notify you when logo generation is available.",
    })
  }

  return (
    <div className="relative py-20">
      <GradientSpotlight color="#0AB6BC" size={900} opacity={0.12} className="top-1/3 left-[10%]" />
      <GradientSpotlight color="#045C43" size={700} opacity={0.12} className="top-10 right-[10%]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <h2 className="text-2xl font-semibold">{"Brand Tools"}</h2>
          <p className="text-zinc-400 mt-2">{"Domain & social media availability at-a-glance."}</p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <Card className="mt-8 rounded-2xl border border-[#021B23]/70 bg-white/5 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-[#0AB6BC]" />
                {query}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm text-zinc-400 mb-2">Check another name</h4>
                <div className="flex gap-2">
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-black/40 border-[#021B23]"
                  />
                  <Button
                    className="bg-gradient-to-r from-[#045C43] to-[#0AB6BC] text-black"
                    onClick={() => setQuery(query.trim() || name)}
                  >
                    Check
                  </Button>
                </div>

                <Button
                  variant="outline"
                  onClick={onLogo}
                  className="mt-4 border-[#021B23] bg-black/40 hover:bg-[#021B23]/50 text-zinc-200"
                >
                  <ImageIcon className="h-4 w-4 mr-2 text-[#0AB6BC]" />
                  Generate Logo
                </Button>
              </div>

              <div className="lg:col-span-1">
                <h4 className="text-sm text-zinc-400 mb-2">Domains</h4>
                <div className="space-y-3">
                  {tlds.map((tld) => {
                    const state = domainAvailability[tld] ?? "available"
                    return (
                      <div
                        key={tld}
                        className="flex items-center justify-between rounded-xl border border-[#021B23] bg-black/40 px-3 py-2"
                      >
                        <div className="font-medium">
                          {query.toLowerCase()}
                          {tld}
                        </div>
                        <Badge
                          className={
                            state === "available"
                              ? "bg-[#021B23] border border-[#045C43]/50 text-[#0AB6BC]"
                              : "bg-black/60 border border-red-900/40 text-red-300"
                          }
                        >
                          {state === "available" ? "Available" : "Taken"}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="lg:col-span-1">
                <h4 className="text-sm text-zinc-400 mb-2">Socials</h4>
                <div className="space-y-3">
                  {socials.map((s) => {
                    const Icon = s.icon
                    const state = socialAvailability[s.key] ?? "available"
                    return (
                      <div
                        key={s.key}
                        className="flex items-center justify-between rounded-xl border border-[#021B23] bg-black/40 px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-[#0AB6BC]" />
                          <span className="font-medium">{s.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {state === "available" ? (
                            <Check className="h-4 w-4 text-emerald-400" />
                          ) : (
                            <X className="h-4 w-4 text-red-400" />
                          )}
                          <span className="text-sm text-zinc-300">{state === "available" ? "Available" : "Taken"}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  )
}
