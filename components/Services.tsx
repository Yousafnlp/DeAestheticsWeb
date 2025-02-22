"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Zap,
  Syringe,
  Paintbrush,
  Sparkles,
  Weight,
  FlaskRoundIcon as Flask,
  Scissors,
  Heart,
  Scale,
  Eraser,
} from "lucide-react"

const services = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Laser Hair Removal",
    description: "Permanent hair reduction using treatment",
    gradient: "from-purple-400 to-pink-600",
  },
  {
    icon: <Syringe className="h-8 w-8" />,
    title: "Injectables",
    description: "Botox, Fillers & Thread Face Lift treatments",
    gradient: "from-blue-400 to-teal-600",
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Semi Permanent Makeup",
    description: "Microblading and permanent makeup solutions",
    gradient: "from-red-400 to-yellow-600",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Body Treatments",
    description: "Body Whitening & Detoxification services",
    gradient: "from-green-400 to-cyan-600",
  },
  {
    icon: <Weight className="h-8 w-8" />,
    title: "Fat Reduction",
    description: "Advanced fat reduction and body contouring",
    gradient: "from-orange-400 to-red-600",
  },
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Hair Loss Treatment",
    description: "Specialized solutions for hair restoration",
    gradient: "from-indigo-400 to-purple-600",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Anti-Aging Solutions",
    description: "Skin Rejuvenation & Anti-aging treatments",
    gradient: "from-pink-400 to-rose-600",
  },
  {
    icon: <Flask className="h-8 w-8" />,
    title: "Advanced Treatments",
    description: "PRP, Microneedling & Mesotherapy",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    icon: <Scale className="h-8 w-8" />,
    title: "Weight Management",
    description: "Weight Loss & Body Slimming programs",
    gradient: "from-teal-400 to-green-600",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Skin Concerns",
    description: "Treatment for Melasma, Freckles & Acne Scars",
    gradient: "from-yellow-400 to-amber-600",
  },
  {
    icon: <Eraser className="h-8 w-8" />,
    title: "Minor Procedures",
    description: "Mole, Tags & Cysts Removal",
    gradient: "from-rose-400 to-red-600",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <div>

        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#005a5f] to-teal-500">
            Our Services
          </h2> 
          <h3 className="text-2xl font-semibold tracking-tighter md:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#005a5f] to-teal-500">
   
          Skin | hair | Laser
          </h3>
          </div>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Comprehensive skin treatments tailored to your needs
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`bg-gradient-to-br ${service.gradient} p-[2px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <Card className="h-full bg-white rounded-xl overflow-hidden">
                  <CardContent className="p-6">
                    <div className="relative z-10">
                      <div className="mb-4 flex items-center justify-center">
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
                        >
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="font-bold text-xl text-[#005a5f] group-hover:text-[#004a4f] transition-colors duration-300 text-center mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-center">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

