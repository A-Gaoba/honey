import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { GoldenSparkles } from "@/components/golden-sparkles"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient if video doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800/50 to-yellow-900" />
      </div>

      <GoldenSparkles />

      {/* Floating honey drops animation */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        <div className="honey-drop" style={{ left: "10%", animationDelay: "0s" }} />
        <div className="honey-drop" style={{ left: "30%", animationDelay: "2s" }} />
        <div className="honey-drop" style={{ left: "50%", animationDelay: "4s" }} />
        <div className="honey-drop" style={{ left: "70%", animationDelay: "1s" }} />
        <div className="honey-drop" style={{ left: "90%", animationDelay: "3s" }} />
      </div>

      {/* Content */}
      <div className="relative z-[10] container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="display-text text-white leading-tight text-balance">
            العودري للعسل
          </h1>
          <p className="subtitle text-accent font-medium text-balance">نكهة الأصالة وجودة الطبيعة</p>
          <p className="lead text-white/90 max-w-2xl mx-auto text-pretty">
            من قلب الجبال اليمنية، نقدم لكم أجود أنواع العسل الطبيعي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/967771356441"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                اطلب الآن عبر واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/967777777777"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
