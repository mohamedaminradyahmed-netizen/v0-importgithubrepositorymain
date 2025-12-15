import { ImageWithFallback } from "./figma/ImageWithFallback"

const products = [
  {
    id: 1,
    name: "Radiance Serum",
    price: "$45.00",
    image:
      "https://images.unsplash.com/photo-1759526997116-c8f4f2431869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0JTIwb3JhbmdlfGVufDF8fHx8MTc2NTc2NjgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Hydrating Cream",
    price: "$38.00",
    image:
      "https://images.unsplash.com/photo-1643836361449-90d35fd14f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NjU3NjY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Vitamin C Booster",
    price: "$52.00",
    image:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBwcm9kdWN0cyUyMGZsYXQlMjBsYXl8ZW58MXx8fHwxNzY1NzY2ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Night Recovery Oil",
    price: "$62.00",
    image:
      "https://images.unsplash.com/photo-1759526997116-c8f4f2431869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBwcm9kdWN0JTIwb3JhbmdlfGVufDF8fHx8MTc2NTc2NjgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Glow Face Mask",
    price: "$28.00",
    image:
      "https://images.unsplash.com/photo-1643836361449-90d35fd14f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NjU3NjY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Eye Revive Gel",
    price: "$42.00",
    image:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBwcm9kdWN0cyUyMGZsYXQlMjBsYXl8ZW58MXx8fHwxNzY1NzY2ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
]

export const ProductsGrid = () => {
  return (
    <section id="shop" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium beauty essentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                <ImageWithFallback
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-lg text-brand font-medium">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-brand text-brand-foreground hover:bg-brand/90 transition-colors duration-300 text-lg font-medium rounded-sm">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
