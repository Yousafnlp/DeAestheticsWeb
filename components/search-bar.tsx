'use client'

import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative mx-auto max-w-3xl ">
      <div className="relative group border rounded-2xl border-[#005a5f]">
        <Search className="absolute left-3 top-1/2 z-50 size-5 -translate-y-1/2 text-[#005a5f]   duration-200" />
        <input 
          type="text"
          placeholder="Search services by name or category..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-2xl border border-border/30 bg-card/60 backdrop-blur-sm py-4 pl-11 pr-4 text-primary placeholder-muted-foreground outline-none transition-all duration-300 hover:border-accent/30 hover:bg-card/80 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-card"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Clear search"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
