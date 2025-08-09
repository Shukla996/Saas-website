"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Heart, Bookmark } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { GradientSpotlight } from "@/components/gradient-spotlight"
import type { NameIdea } from "@/lib/naming"
import { cn } from "@/lib/utils"

type GeneratedNamesProps = {
  ideas?: NameIdea[]
  onSave?: (idea: NameIdea) => void
}

export function GeneratedNames(
  { ideas = [], onSave = () => {} }: GeneratedNamesProps = { ideas: [], onSave: () => {} },
) {
  const [liked, setLiked] = useState<Record<string, boolean>>({})

  const copy = async (idea: NameIdea) => {
    try {
      await navigator.clipboard.writeText(`${idea.name} — ${idea.tagline}`)
    } catch {
      // ignore
    }
  }

  const toggleLike = (name: string) => {
    setLiked((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <div className="relative py-20">
      <GradientSpotlight color="#021B23" size={1000} opacity={0.14} className="top-[20%] left-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{"Generated Names"}</h2>
            <Badge className="bg-[#021B23] border border-[#0AB6BC]/30 text-[#0AB6BC]">AI Results</Badge>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, idx) => (
            <AnimatedSection key={idea.name} animation="scale-in" delay={idx * 40}>
              <Card
                className={cn(
                  "rounded-2xl border border-[#021B23]/70 bg-white/5 backdrop-blur-md",
                  "hover:shadow-[0_0_40px_rgba(10,182,188,0.15)] transition-shadow",
                )}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{idea.name}</h3>
                      <p className="text-sm text-zinc-400 mt-1">{idea.tagline}</p>
                    </div>
                    <Badge variant="outline" className="border-[#045C43]/40 text-[#0AB6BC] bg-[#021B23]/40">
                      Brandable
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent />
                <CardFooter className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#021B23] bg-black/40 text-zinc-200 hover:bg-[#021B23]/50"
                      onClick={() => copy(idea)}
                    >
                      <Copy className="h-4 w-4 mr-2 text-[#0AB6BC]" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => toggleLike(idea.name)}
                      className={cn("text-zinc-300 hover:text-[#0AB6BC] hover:bg-[#021B23]/50")}
                      aria-pressed={!!liked[idea.name]}
                    >
                      <Heart
                        className={cn(
                          "h-4 w-4 mr-2",
                          liked[idea.name] ? "fill-[#0AB6BC] text-[#0AB6BC]" : "text-zinc-300",
                        )}
                      />
                      Like
                    </Button>
                  </div>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#045C43] to-[#0AB6BC] text-black"
                    onClick={() => onSave(idea)}
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
