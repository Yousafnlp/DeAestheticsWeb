"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import Link from "next/link"

export function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#005a5f] leading-7">
 Satisfied Clients Nationwide!
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Experience the D.Aesthetics difference and see why our clients love us
          </p>
        </div>

        {/* Instagram Logo */}
        <div className="mb-16 text-center">
          <a
            href="https://www.instagram.com/d.aesthetics.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-2 rounded-2xl"
            >
              <Instagram size={48} className="text-white" />
            </motion.div>
          </a>
          <p className="mt-4 text-lg font-semibold text-gray-700">Follow Us on Instagram</p>
          <p className="text-gray-500">@d.aesthetics.pk</p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4  text-[#005a5f] leading-7">Ready to Experience the D.Aesthetics Difference?</h3>
            <p className="text-gray-600 mb-6">
              Join our community of satisfied clients and transform your beauty routine today!
            </p>
            <Link

           className="bg-white text-[#005a5f] hover:bg-white/90  h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0" 
           href="https://wa.me/923083694455"
           target="_blank"
            >
                 
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

