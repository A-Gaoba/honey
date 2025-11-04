import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Business Info */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">العودري للعسل</h3>
            <p className="text-lg md:text-xl opacity-90 mb-4">طعم الطبيعة في كل قطرة 🍯</p>
            <p className="text-sm opacity-75">
              متجر العسل الطبيعي اليمني الأصيل
              <br />
              عسل طبيعي 100% من قلب الجبال اليمنية
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right space-y-4">
            <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <a
                href="tel:+967771356441"
                className="flex items-center justify-center md:justify-end gap-2 hover:opacity-80 transition-opacity"
                aria-label="رقم الهاتف"
              >
                <Phone className="w-5 h-5" />
                <span>+967 771 356 441</span>
              </a>
              <a
                href="https://wa.me/967771356441"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 hover:opacity-80 transition-opacity"
                aria-label="واتساب"
              >
                <MessageCircle className="w-5 h-5" />
                <span>واتساب</span>
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-5 h-5" />
                <span>صنعاء، اليمن</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=15.3694,44.1910"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-75 hover:opacity-100 transition-opacity underline"
              >
                عرض على خرائط جوجل
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-bold mb-4">تابعنا</h4>
            <div className="flex items-center justify-center md:justify-end gap-6">
              <a
                href="https://wa.me/967771356441"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="واتساب"
              >
                <MessageCircle className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/alaudri_honey"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
                aria-label="إنستغرام"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
            <p className="text-sm opacity-75 mt-6">
              متجر العسل الطبيعي اليمني الأصيل
              <br />
              شراء عسل يمني طبيعي 100%
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-75">
            جميع الحقوق محفوظة © {currentYear} العودري للعسل - عسل يمني أصيل طبيعي 100%
          </p>
        </div>
      </div>
    </footer>
  )
}
