import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Beauty Enthusiast",
    content: "Onsko products have completely transformed my skin! The natural ingredients make such a difference. My skin has never looked better!",
    rating: 5,
    image: "SJ"
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Skincare Blogger",
    content: "I've tried countless brands, but Onsko stands out. The results are visible within weeks, and I love that it's all natural and cruelty-free.",
    rating: 5,
    image: "EC"
  },
  {
    id: 3,
    name: "Maya Patel",
    role: "Wellness Coach",
    content: "As someone who values natural beauty, Onsko aligns perfectly with my philosophy. The glow is real, and it comes from within!",
    rating: 5,
    image: "MP"
  }
]

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who love Onsko
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
