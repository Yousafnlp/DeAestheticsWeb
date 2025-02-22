"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-steps-of-a-hydrafacial-1200x800-OzqtkW9QXfBmV8G7HrNyKc333GSMK8.webp"
          alt="HydraFacial Treatment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#005a5f]/60 mix-blend-multiply" />
      </div>
      <div className="container relative px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl space-y-6"
        >
          <div>

          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Experience Luxury Skincare at DeAesthetics
          </h1>
          <p className="max-w-[600px] font-extrabold text-white/80 md:text-xl">
           
skin | hair | laser
          </p>
          </div>
          <p className="max-w-[600px] text-white/80 md:text-xl">
            Premium HydraFacial treatments and advanced skincare solutions for radiant, healthy skin.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="bg-white text-[#005a5f] hover:bg-white/90">Book Treatment</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#005a5f]">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

