'use client'

import { Phone } from 'lucide-react'

export default function PricingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80">
            <span className="font-bold text-accent-foreground text-lg">✨</span>
          </div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Aesthetics Studio</h1>
        </div>
        
        <nav className="hidden items-center gap-12 md:flex">
          <a href="#services" className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200">
            Services
          </a>
          <a href="#about" className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200">
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-primary hover:text-accent transition-colors duration-200">
            Contact
          </a>
        </nav>

        <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent/80 px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Call Now</span>
        </button>
      </div>
    </header>
  )
}
