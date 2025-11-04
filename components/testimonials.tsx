import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "أحمد محمد",
    text: "عسل ممتاز وطبيعي 100%، جربت عسل السدر وكان رائعاً. الطعم أصيل والجودة عالية جداً.",
    rating: 5,
    image: "/arabic-man-customer-portrait.jpg",
  },
  {
    id: 2,
    name: "فاطمة علي",
    text: "أفضل عسل جربته، نقي وطبيعي. التعامل راقي والتوصيل سريع. أنصح الجميع بالتجربة.",
    rating: 5,
    image: "/arabic-woman-customer-portrait-hijab.jpg",
  },
  {
    id: 3,
    name: "خالد حسن",
    text: "جودة ممتازة وسعر مناسب، التغليف فاخر والعسل أصلي. سأطلب مرة أخرى بإذن الله.",
    rating: 5,
    image: "/arabic-man-customer-smiling-portrait.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">آراء عملائنا</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">ثقة عملائنا هي أغلى ما نملك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`صورة ${testimonial.name} - عميل العودري للعسل`}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    loading="lazy"
                  />
                </div>

                <div className="flex gap-1 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed text-center italic">"{testimonial.text}"</p>
                <p className="text-foreground font-semibold text-center">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
