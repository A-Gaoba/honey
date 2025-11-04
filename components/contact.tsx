"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Instagram, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Send via WhatsApp
    const whatsappMessage = `الاسم: ${formData.name}%0Aرقم الهاتف: ${formData.phone}%0Aالرسالة: ${formData.message}`
    window.open(`https://wa.me/967771356441?text=${whatsappMessage}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">تواصل معنا</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وتلبية طلباتكم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">أرسل لنا رسالة</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="الاسم"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-lg py-6"
                />
              </div>
              <div>
                <Textarea
                  placeholder="الرسالة"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 text-lg"
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg py-6">
                إرسال عبر واتساب
              </Button>
            </form>

            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-bold text-foreground">أو تواصل مباشرة</h3>

              <Button
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6 justify-start"
                asChild
              >
                <a
                  href="https://wa.me/967771356441"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>واتساب: +967 771 356 441</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg py-6 justify-start border-2 hover:bg-accent bg-transparent"
                asChild
              >
                <a
                  href="https://instagram.com/alaudri_honey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Instagram className="w-6 h-6" />
                  <span>إنستغرام: @alaudri_honey</span>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg py-6 justify-start border-2 hover:bg-accent bg-transparent"
                asChild
              >
                <a href="tel:+967771356441" className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>هاتف: +967 771 356 441</span>
                </a>
              </Button>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">موقعنا</p>
                  <p className="text-muted-foreground">صنعاء، اليمن</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">موقع المتجر</h3>
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.0!2d44.2!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzAwLjAiTiA0NMKwMTInMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع العودري للعسل"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
