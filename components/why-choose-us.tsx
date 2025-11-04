import { CheckCircle, Shield, Truck, Gift, Award, BadgeCheck } from "lucide-react"

const features = [
  {
    icon: CheckCircle,
    title: "100% طبيعي",
    description: "عسل نقي بدون أي إضافات أو مواد حافظة",
  },
  {
    icon: Shield,
    title: "جودة مضمونة",
    description: "نضمن لكم أعلى معايير الجودة والنقاء",
  },
  {
    icon: Truck,
    title: "شحن لجميع المناطق",
    description: "نوصل منتجاتنا إلى جميع أنحاء اليمن والخليج",
  },
  {
    icon: Gift,
    title: "تغليف فاخر",
    description: "عبوات أنيقة تحافظ على جودة العسل",
  },
  {
    icon: Award,
    title: "خبرة أكثر من 20 سنة",
    description: "عقود من الخبرة في مجال العسل الطبيعي",
  },
  {
    icon: BadgeCheck,
    title: "شهادة جودة معتمدة",
    description: "منتجاتنا معتمدة ومطابقة للمواصفات الدولية",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">لماذا تختار العودري للعسل؟</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نلتزم بتقديم أفضل تجربة لعملائنا الكرام - جودة العسل الطبيعي اليمني الأصيل
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <article
                key={index}
                className="text-center space-y-4 p-6 rounded-xl bg-card hover:bg-accent/10 transition-all duration-300 hover:scale-105 animate-fade-in-up border border-border/50 hover:shadow-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary" aria-hidden="true">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
