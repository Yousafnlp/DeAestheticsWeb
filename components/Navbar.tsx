
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#005a5f]/95 backdrop-blur supports-[backdrop-filter]:bg-[#005a5f]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex sm:items-center flex-col sm:flex-row md:space-x-2">
          <span className="text-2xl font-bold">DeAesthetics</span>
          <span className="text-sm font-light">skin | hair | laser</span>
        </div>
        <h3 className="font-semibold text-xl">
          Dr Anum
        </h3>
      </div>
    </header>
  )
}

