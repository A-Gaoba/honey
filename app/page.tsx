import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HoneyBenefits } from "@/components/honey-benefits"
import { Products } from "@/components/products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ProductSchema, BreadcrumbSchema, ReviewSchema, FAQSchema } from "@/components/structured-data"

export const metadata = {
  title: "العودري للعسل - عسل يمني أصيل طبيعي 100%",
  description:
    "متجر العودري للعسل - أجود أنواع العسل اليمني الأصيل: عسل السدر، عسل السمر، عسل المجرى، عسل الطلح. عسل طبيعي 100% من قلب الجبال اليمنية.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  return (
    <>
      <ProductSchema />
      <BreadcrumbSchema />
      <ReviewSchema />
      <FAQSchema />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <HoneyBenefits />
        <Products />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
