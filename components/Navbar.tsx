import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#005a5f]/95 backdrop-blur supports-[backdrop-filter]:bg-[#005a5f]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">DeAesthetics</span>
          <span className="text-sm font-light">skin | hair | laser</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#services" className="text-sm font-medium hover:text-white/80">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-white/80">
            About
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-white/80">
            Contact
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#005a5f]">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  )
}

