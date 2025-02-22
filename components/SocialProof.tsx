"use client"

import { motion } from "framer-motion"
import { Instagram, Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment: "D.Aesthetics transformed my skin! Their HydraFacial treatment gave me a glow I've never had before.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    comment: "The laser hair removal service here is top-notch. Professional staff and amazing results!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    comment: "I've tried many spas, but D.Aesthetics is by far the best. Their anti-aging treatments are miraculous!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    comment: "The body contouring treatment at D.Aesthetics exceeded my expectations. I'm thrilled with the results!",
    rating: 5,
  },
  {
    id: 5,
    name: "Sophia Lee",
    comment: "Their skincare products are amazing. My complexion has never looked better!",
    rating: 5,
  },
]

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
            <a
              href="#"
              className="inline-block bg-[#005a5f] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#004a4f] transition-colors duration-300"
            >
              Book Your Appointment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

