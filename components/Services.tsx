"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  Salad,
  Apple,
  Utensils,
  Coffee,
  Dumbbell,
  Brain,
  Smile,
  Users,
  Headphones,
  BookOpen,
} from "lucide-react"

const aestheticsServices = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Laser Hair Removal",
    description: "Permanent hair reduction using advanced technology",
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

const nutritionServices = [
  {
    icon: <Salad className="h-8 w-8" />,
    title: "Personalized Meal Plans",
    description: "Customized nutrition plans tailored to your goals",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    icon: <Apple className="h-8 w-8" />,
    title: "Nutritional Counseling",
    description: "One-on-one sessions with certified nutritionists",
    gradient: "from-red-400 to-orange-600",
  },
  {
    icon: <Utensils className="h-8 w-8" />,
    title: "Dietary Workshops",
    description: "Group sessions on healthy eating habits",
    gradient: "from-yellow-400 to-amber-600",
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Detox Programs",
    description: "Guided cleanse and detox regimens",
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "Sports Nutrition",
    description: "Specialized nutrition for athletes and fitness enthusiasts",
    gradient: "from-blue-400 to-indigo-600",
  },
]

const mentalHealthServices = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Cognitive Behavioral Therapy",
    description: "Evidence-based treatment for various mental health issues",
    gradient: "from-purple-400 to-indigo-600",
  },
  {
    icon: <Smile className="h-8 w-8" />,
    title: "Mindfulness Training",
    description: "Techniques for stress reduction and emotional regulation",
    gradient: "from-yellow-400 to-orange-600",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Group Therapy Sessions",
    description: "Supportive environment for shared experiences",
    gradient: "from-green-400 to-teal-600",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "Online Counseling",
    description: "Remote therapy sessions for convenience",
    gradient: "from-red-400 to-pink-600",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Mental Health Workshops",
    description: "Educational sessions on various mental health topics",
    gradient: "from-blue-400 to-cyan-600",
  },
]
function ServiceSection({ title, services, initialDisplayCount = 3 }: { title: string; services: any[]; initialDisplayCount?: number }) {

  const [showAll, setShowAll] = useState(false)

  const displayedServices = showAll ? services : services.slice(0, initialDisplayCount)

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold tracking-tighter md:text-4xl text-[#005a5f] mb-8 text-center">{title}</h3>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayedServices.map((service: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div
              className={`bg-gradient-to-br ${service.gradient} p-[2px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
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
                    <h4 className="font-bold text-xl text-[#005a5f] group-hover:text-[#004a4f] transition-colors duration-300 text-center mb-2">
                      {service.title}
                    </h4>
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
      {services.length > initialDisplayCount && (
        <div className="mt-8 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="bg-[#005a5f] text-white hover:bg-[#004a4f]"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#005a5f] to-teal-500">
            Our Services
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed">
            Comprehensive wellness treatments tailored to your needs
          </p>
        </div>

        <ServiceSection title="Aesthetics: Skin | Hair | Laser" services={aestheticsServices} />
        <ServiceSection title="Nutrition" services={nutritionServices} />
        <ServiceSection title="Mental Health" services={mentalHealthServices} />
      </div>
    </section>
  )
}

