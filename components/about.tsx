import Image from "next/image"

export function About() {
  return (
    <article id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23D4A574' strokeWidth='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <header className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">قصتنا - العودري للعسل</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              متجر العسل الطبيعي اليمني الأصيل - نكهة الأصالة وجودة الطبيعة
            </p>
          </header>

          <div className="prose prose-lg mx-auto text-foreground/80 leading-relaxed space-y-6 text-right">
            <section>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">من نحن</h3>
              <p className="text-lg md:text-xl">
                منذ أجيال، نحافظ على سر استخراج العسل اليمني الأصيل… نختار أفضل المناحل ونقدمه لكم بأيدي خبراء العسل.
                العودري للعسل هو اسم موثوق في عالم العسل الطبيعي، نفخر بتقديم أجود أنواع العسل اليمني الأصيل المستخرج من
                أفضل المناحل الطبيعية في قلب الجبال اليمنية.
              </p>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">جودة العسل الطبيعي</h3>
              <p className="text-lg md:text-xl">
                نحن نؤمن بأن العسل الطبيعي هو هدية الطبيعة للإنسان، لذلك نحرص على تقديم منتجات نقية 100% دون أي إضافات أو
                مواد حافظة. كل قطرة من عسلنا تحمل نكهة الأصالة وجودة الطبيعة. نضمن أن جميع منتجاتنا من العسل الطبيعي
                الخالص، مستخرجة بعناية من أفضل المناحل اليمنية.
              </p>
            </section>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <figure className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Image
                src="/honeycomb9.webp"
                alt="تربية النحل التقليدية في الجبال اليمنية - العودري للعسل"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <Image
                src="/honey-packaging.jpg"
                alt="تغليف العسل الفاخر - منتجات العودري للعسل"
                width={600}
                height={500}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </article>
  )
}
