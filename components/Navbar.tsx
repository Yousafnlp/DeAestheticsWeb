
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#005a5f]/95 backdrop-blur supports-[backdrop-filter]:bg-[#005a5f]/60">
      <div className="px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex sm:items-center flex-col sm:flex-row md:space-x-2">
          <span className="text-2xl font-bold">D.Aesthetics</span>
          <span className="text-xs font-light">Skin | hair | Laser | Mind | body | Soul</span>
        </div>
      </div>
    </header>
  )
}

