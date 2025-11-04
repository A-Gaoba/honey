import Image from "next/image"

export function HoneyBenefits() {
  return (
    <section id="benefits" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">فوائد العسل الطبيعي</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            اكتشف الفوائد الصحية المذهلة للعسل اليمني الأصيل
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-12">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 animate-fade-in-up">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">فوائد العسل للصحة العامة</h3>
              <div className="prose prose-lg text-foreground/80 space-y-4 text-right">
                <p className="text-lg">
                  العسل الطبيعي من العودري للعسل غني بالفوائد الصحية المتعددة. يحتوي على مضادات الأكسدة القوية التي
                  تحمي الجسم من الأمراض، كما يعزز مناعة الجسم ويساعد في مقاومة البكتيريا والجراثيم.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>تقوية الجهاز المناعي والوقاية من الأمراض</li>
                  <li>مضادات الأكسدة الطبيعية لحماية الخلايا</li>
                  <li>مصدر طبيعي للطاقة والسكر الطبيعي</li>
                  <li>تحسين الهضم وصحة الجهاز الهضمي</li>
                  <li>ترطيب البشرة والشعر</li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <Image
                src="/premium-honey-packaging-luxury-jars.jpg"
                alt="فوائد العسل الطبيعي - العودري للعسل"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </article>

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in-up order-2 lg:order-1">
              <Image
                src="/sidr-honey-jar-golden.jpg"
                alt="أنواع العسل اليمني - عسل السدر"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4 animate-fade-in-up order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">أنواع العسل المتوفرة</h3>
              <div className="prose prose-lg text-foreground/80 space-y-4 text-right">
                <p className="text-lg">
                  في متجر العودري للعسل، نقدم مجموعة متنوعة من أجود أنواع العسل اليمني الأصيل. كل نوع له خصائصه وفوائده
                  الفريدة:
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">عسل السدر</h4>
                    <p className="text-lg">
                      عسل السدر الجبلي الفاخر، يتميز بطعمه الغني وفوائده الصحية العديدة. يعتبر من أجود أنواع العسل
                      اليمني.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">عسل السمر</h4>
                    <p className="text-lg">
                      عسل السمر الطبيعي، غني بالعناصر الغذائية ومثالي للاستخدام اليومي. له نكهة مميزة وطعم رائع.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">عسل المجرى</h4>
                    <p className="text-lg">
                      عسل المجرى الأصيل، يتميز بنكهته المميزة وقوامه الكثيف. من أجود أنواع العسل الطبيعي.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">عسل الطلح</h4>
                    <p className="text-lg">
                      عسل الطلح النقي، معروف بخصائصه العلاجية وطعمه المميز. له فوائد صحية متعددة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

