"use client"
import { motion } from "framer-motion"
import Link from "next/link"

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

            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none leading-8
            ">
              One Step Solution
            </h1>
            <p className="max-w-[600px] font-extrabold text-white md:text-xl mt-1">

              Skin | hair | Laser | Mind | body | Soul
            </p>
          </div>
          <p className="max-w-[600px] text-white/80 font-bold md:text-xl">
          Holistic wellness: Mental health, nutrition, and advanced skincare.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link className="bg-white text-[#005a5f] hover:bg-white/90  h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" 
            target="_blank"
        href="https://wa.me/923083694455"
            >Book Treatment</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

