export const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Transform Your Skin?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          Join thousands of happy customers and experience the Onsko difference today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-white text-orange-600 hover:bg-orange-50 transition-all duration-300 text-lg font-semibold rounded-sm shadow-xl hover:shadow-2xl transform hover:scale-105">
            Shop Collection
          </button>
          <button className="px-10 py-4 border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg font-semibold rounded-sm backdrop-blur-sm">
            View Ingredients
          </button>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">50K+</div>
            <div className="text-sm opacity-90">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">4.9★</div>
            <div className="text-sm opacity-90">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-1">100%</div>
            <div className="text-sm opacity-90">Natural Formula</div>
          </div>
        </div>
      </div>
    </section>
  )
}
