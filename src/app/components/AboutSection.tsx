import { ImageWithFallback } from "./figma/ImageWithFallback"

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Onsko
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Onsko, we believe that true beauty comes from within. Our mission is to create 
              products that not only enhance your natural radiance but also nourish your skin 
              with the finest natural ingredients.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every product is carefully crafted with love and attention to detail, ensuring 
              that you get the best of nature's gifts. We're committed to sustainability, 
              ethical sourcing, and creating a positive impact on both your skin and the planet.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600 font-medium">Natural</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-1">0</div>
                <div className="text-sm text-gray-600 font-medium">Cruelty</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-orange-600 mb-1">Eco</div>
                <div className="text-sm text-gray-600 font-medium">Friendly</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659533770974-a2a69e471385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHdvbWFufGVufDF8fHx8MTc2NTc2NjgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="About Onsko"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-20 -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-500 rounded-full blur-3xl opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
