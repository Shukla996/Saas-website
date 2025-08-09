"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

type HeaderProps = {
  brand?: string
}

export function Header({ brand = "NameForge" }: HeaderProps = { brand: "NameForge" }) {
  const [open, setOpen] = useState(false)

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <nav className="flex items-center gap-6">
      <a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#home" onClick={onClick}>
        Home
      </a>
      <a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#tools" onClick={onClick}>
        Features
      </a>
      <a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#pricing" onClick={onClick}>
        Pricing
      </a>
      <a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#contact" onClick={onClick}>
        Contact
      </a>
    </nav>
  )

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50",
        "bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/40",
        "border-b border-[#021B23]/50",
      )}
    >
      <div className="relative">
        {/* subtle glow line */}
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#0AB6BC]/60 to-transparent" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Logo />
          <span className="font-semibold tracking-tight">{brand}</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <a href="#home">
            <Button className="bg-gradient-to-r from-[#045C43] to-[#0AB6BC] text-black hover:shadow-[0_0_24px_rgba(10,182,188,0.35)]">
              <Sparkles className="mr-2 h-4 w-4" />
              Try Now
            </Button>
          </a>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5 text-zinc-200" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/90 border-l border-[#021B23]/60 text-[#F6F6F6]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Logo size={18} />
                  {brand}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                <NavLinks onClick={() => setOpen(false)} />
                <a href="#home" onClick={() => setOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-[#045C43] to-[#0AB6BC] text-black">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Try Now
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
