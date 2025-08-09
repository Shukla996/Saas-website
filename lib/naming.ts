export type NameIdea = { name: string; tagline: string }

const adjectives = [
  "Nova",
  "Quantum",
  "Spark",
  "Pulse",
  "Nimble",
  "Lumina",
  "Aero",
  "Echo",
  "Flux",
  "Vertex",
  "Neon",
  "Hyper",
  "Carbon",
  "Zen",
  "Nimbus",
  "Atlas",
  "Astro",
  "Drift",
  "Glide",
  "Prism",
]

const nouns = [
  "Forge",
  "Labs",
  "Nest",
  "Flow",
  "Craft",
  "Pilot",
  "Hub",
  "Wave",
  "Foundry",
  "Works",
  "Shift",
  "Loop",
  "Engine",
  "Stack",
  "Core",
  "Frame",
  "Pilot",
  "Field",
  "Grid",
  "Spark",
]

const tags = [
  "Launch your brand identity",
  "Names that resonate and stick",
  "Stand-out names, instantly",
  "Find your market-ready name",
  "Brandable ideas on demand",
  "Crafted by AI for you",
  "Memorable. Ownable. You.",
  "From idea to identity in seconds",
  "Catchy names with clear meaning",
]

export const seedIdeas: NameIdea[] = [
  { name: "NovaForge", tagline: "Brandable names that ignite growth." },
  { name: "EchoNest", tagline: "Memorable names that resonate." },
  { name: "FluxCraft", tagline: "Move fast with standout naming." },
  { name: "ZenFoundry", tagline: "Calm, clean names forged by AI." },
  { name: "PrismHub", tagline: "Multi-angle ideas for your brand." },
  { name: "AtlasFlow", tagline: "Strong names that carry your vision." },
]

function titleCase(s: string) {
  return s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase())
}

export function generateNameIdeas(prompt: string, count = 8): NameIdea[] {
  const words = prompt
    .split(/[\s,.-]+/)
    .filter(Boolean)
    .map((w) => titleCase(w))
  const base = words.slice(0, 2).join("") || "Brand"

  const results: NameIdea[] = []
  for (let i = 0; i < count; i++) {
    const a = adjectives[(Math.random() * adjectives.length) | 0]
    const n = nouns[(Math.random() * nouns.length) | 0]
    const flip = Math.random() > 0.5
    const mix = flip ? `${a}${n}` : `${base}${n}`
    const tagline = tags[(Math.random() * tags.length) | 0]
    results.push({ name: mix, tagline })
  }
  return results
}
