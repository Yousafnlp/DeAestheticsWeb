"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { SocialProof } from "@/components/SocialProof"
import { PhoneIcon as WhatsApp } from "lucide-react"
import Location from "@/components/Location"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#005a5f] text-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Services />
    <Location/>
        <SocialProof />
      </main>

      <footer className="border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col gap-4 md:h-24 md:flex-row md:items-center">
          <div className="flex flex-1 items-center justify-center gap-4 text-sm">
            <span className="text-white/80">© 2025 D.Aesthetics. All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/923083694455"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-green-500 text-white p-3 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.1, 1],
          transition: {
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          },
        }}
      >
        <WhatsApp size={26} />
      </motion.a>
    </div>
  )
}

