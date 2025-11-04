import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import { products } from "@/lib/products-data"

export function Products() {
  return (
    <section id="products" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">منتجاتنا</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم لكم مجموعة متنوعة من أجود أنواع العسل الطبيعي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-muted relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} - ${product.description} - العودري للعسل`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{product.name}</CardTitle>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <a
                    href="https://wa.me/967771356441"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    اطلب الآن
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
