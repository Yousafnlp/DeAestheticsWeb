"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { SocialProof } from "@/components/SocialProof"
import { PhoneIcon as WhatsApp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#005a5f] text-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Services />

        {/* Map Section */}
        <section id="location" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Spa</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed">Located in the heart of the city</p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d74.328522!3d31.534437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000" 
               width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <SocialProof />
      </main>

      <footer className="border-t border-white/10 py-6 md:py-0">
        <div className="container flex flex-col gap-4 md:h-24 md:flex-row md:items-center">
          <div className="flex flex-1 items-center justify-center md:justify-start gap-4 text-sm">
            <span className="text-white/80">© 2024 DeAesthetics. All rights reserved.</span>
          </div>
          <nav className="flex items-center justify-center gap-4 text-sm">
            <a href="#" className="text-white/80 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              Terms of Service
            </a>
          </nav>
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
        <WhatsApp size={24} />
      </motion.a>
    </div>
  )
}

