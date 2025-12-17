import { ImageWithFallback } from "./figma/ImageWithFallback"

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Onsko</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Onsko, we believe that true beauty comes from within. Our mission is to create products that not only
              enhance your natural radiance but also nourish your skin with the finest natural ingredients.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every product is carefully crafted with love and attention to detail, ensuring that you get the best of
              nature's gifts. We're committed to sustainability, ethical sourcing, and creating a positive impact on
              both your skin and the planet.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-brand mb-1">100%</div>
                <div className="text-sm text-muted-foreground font-medium">Natural</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-brand mb-1">0</div>
                <div className="text-sm text-muted-foreground font-medium">Cruelty</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-brand mb-1">Eco</div>
                <div className="text-sm text-muted-foreground font-medium">Friendly</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/placeholder.jpg"
                alt="عن النسخة - رحلة الجمال والأناقة"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-destructive rounded-full blur-3xl opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
