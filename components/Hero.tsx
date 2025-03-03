"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex pt-20 md:pt-0 md:items-center  overflow-hidden">
      <div className="absolute inset-0">
        <img src="/cover.png" alt="Beauty Treatment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005a5f]/90 via-[#005a5f]/70 to-transparent" />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6"
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl font-extrabold leading-8 tracking-tight  md:text-5xl lg:text-5xl">
            D.Aesthetics Clinic and Wellness Lounge
            </h1>
            <p className="text-xl md:text-2xl font-semibold tracking-wide text-teal-200">
              Laser | Skin | Hair | Mind | Body | Soul
            </p>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
Glow Inside & Out: Advanced Skincare, Mental Wellness & Nutrition!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-[280px] md:w-[350px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="https://wa.me/923083694455"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#005a5f] transition-all hover:bg-teal-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 shadow-lg"
            >
              Book Treatment
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
         
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#005a5f] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  )
}

