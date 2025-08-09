"use client"

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      {/* bottom-aligned radial glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(10,182,188,0.2),transparent_80%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="text-sm text-zinc-400">{"Built with ❤️ by [PayalsCode]"}</div>
          <nav className="flex items-center gap-6 justify-start sm:justify-end text-sm">
            <a href="#" className="text-zinc-400 hover:text-zinc-200">
              About
            </a>
            <a href="#" className="text-zinc-400 hover:text-zinc-200">
              Privacy
            </a>
            <a href="#" className="text-zinc-400 hover:text-zinc-200">
              Terms
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-zinc-200">
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-zinc-500">© {new Date().getFullYear()} NameForge. All rights reserved.</div>
      </div>
    </footer>
  )
}
