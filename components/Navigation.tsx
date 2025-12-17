import { ShoppingCart, User, Search } from "lucide-react"

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-[100] border-b border-white/10 h-16 shadow-lg" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center h-full">
          <span className="tracking-widest text-white/80">النسخة</span>
        </div>
      </div>
    </nav>
  )
}
