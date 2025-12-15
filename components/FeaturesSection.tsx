import { Leaf, Heart, Sparkles, Shield } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "Pure, organic ingredients sourced ethically from nature's best",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "Never tested on animals. Beauty with a conscience",
  },
  {
    icon: Sparkles,
    title: "Visible Results",
    description: "See the glow within weeks with our proven formulas",
  },
  {
    icon: Shield,
    title: "Dermatologist Tested",
    description: "Safe for all skin types, recommended by professionals",
  },
]

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Onsko?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Committed to excellence in every drop</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand to-destructive rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <Icon className="w-8 h-8 text-brand-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
