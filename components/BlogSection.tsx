import { ImageWithFallback } from "./figma/ImageWithFallback"

const blogPosts = [
  {
    id: 1,
    title: "The Science of Radiant Skin",
    excerpt: "Discover the secrets behind achieving naturally glowing skin through science-backed skincare routines.",
    image:
      "https://images.unsplash.com/photo-1643836361449-90d35fd14f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwYmVhdXR5JTIwcHJvZHVjdHxlbnwxfHx8fDE3NjU3NjY4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Dec 10, 2024",
    category: "Skincare",
  },
  {
    id: 2,
    title: "Natural Ingredients 101",
    excerpt: "Learn about the powerful natural ingredients that transform your skin from the inside out.",
    image:
      "https://images.unsplash.com/photo-1601612628452-a2a69e471385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBwcm9kdWN0cyUyMGZsYXQlMjBsYXl8ZW58MXx8fHwxNzY1NzY2ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Dec 8, 2024",
    category: "Ingredients",
  },
  {
    id: 3,
    title: "Your Morning Glow Routine",
    excerpt: "Start your day right with this simple yet effective morning skincare routine for lasting radiance.",
    image:
      "https://images.unsplash.com/photo-1659533770974-a2a69e471385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMHdvbWFufGVufDF8fHx8MTc2NTc2NjgxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Dec 5, 2024",
    category: "Routine",
  },
]

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Beauty Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, tricks, and insights for your beauty journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand text-brand-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                <button className="text-brand font-medium hover:text-brand/80 transition-colors">Read More →</button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-brand text-brand hover:bg-brand hover:text-brand-foreground transition-all duration-300 text-lg font-medium rounded-sm">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}
