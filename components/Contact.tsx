import { useFormik } from "formik"
import * as Yup from "yup"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, PhoneIcon, MapPin } from "lucide-react"

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
})

export function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      // Handle form submission here
    },
  })

  return (
    <section id="contact" className="py-20 bg-white text-[#005a5f]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="text-gray-600">Have questions? Fill out the form below and we'll get back to you shortly.</p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600">
                <PhoneIcon className="mr-2 h-5 w-5" />
                0308-3694455
              </p>
              <p className="flex items-center text-gray-600">
                <MapPin className="mr-2 h-5 w-5" />
                123 Beauty Street, Lahore, Pakistan
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#005a5f] hover:text-[#005a5f]/80">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#005a5f] hover:text-[#005a5f]/80">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <Card>
            <CardContent className="p-6 space-y-4">
              <form onSubmit={formik.handleSubmit} className="grid gap-4">
                <Input
                  placeholder="Name"
                  {...formik.getFieldProps("name")}
                  className={`border-[#005a5f]/20 ${formik.touched.name && formik.errors.name ? "border-red-500" : ""}`}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-sm">{formik.errors.name}</div>
                )}

                <Input
                  placeholder="Email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className={`border-[#005a5f]/20 ${formik.touched.email && formik.errors.email ? "border-red-500" : ""}`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                )}

                <Input
                  placeholder="Phone"
                  type="tel"
                  {...formik.getFieldProps("phone")}
                  className={`border-[#005a5f]/20 ${formik.touched.phone && formik.errors.phone ? "border-red-500" : ""}`}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-red-500 text-sm">{formik.errors.phone}</div>
                )}

                <Textarea
                  placeholder="Message"
                  {...formik.getFieldProps("message")}
                  className={`border-[#005a5f]/20 ${formik.touched.message && formik.errors.message ? "border-red-500" : ""}`}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-sm">{formik.errors.message}</div>
                )}

                <Button type="submit" className="w-full bg-[#005a5f] text-white hover:bg-[#005a5f]/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

