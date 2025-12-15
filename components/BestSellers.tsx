import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const products = [
  {
    id: 1,
    name: "سيروم الوجه المرطب",
    price: "450 ر.س",
    image: "https://images.unsplash.com/photo-1761125802333-d145773f4461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2tpbmNhcmUlMjBib3R0bGUlMjBwcm9kdWN0JTIwYmVpZ2V8ZW58MXx8fHwxNzY1Nzc1Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "كريم النهار المجدد",
    price: "320 ر.س",
    image: "https://images.unsplash.com/photo-1761125802333-d145773f4461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2tpbmNhcmUlMjBib3R0bGUlMjBwcm9kdWN0JTIwYmVpZ2V8ZW58MXx8fHwxNzY1Nzc1Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" // Using same for placeholder, would usually vary
  },
  {
    id: 3,
    name: "غسول لطيف",
    price: "180 ر.س",
    image: "https://images.unsplash.com/photo-1761125802333-d145773f4461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2tpbmNhcmUlMjBib3R0bGUlMjBwcm9kdWN0JTIwYmVpZ2V8ZW58MXx8fHwxNzY1Nzc1Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "زيت مغذي",
    price: "550 ر.س",
    image: "https://images.unsplash.com/photo-1761125802333-d145773f4461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2tpbmNhcmUlMjBib3R0bGUlMjBwcm9kdWN0JTIwYmVpZ2V8ZW58MXx8fHwxNzY1Nzc1Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export const BestSellers = () => {
  return (
    <section className="py-24 bg-background rtl" dir="rtl">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light text-center mb-16 uppercase tracking-[0.1em]">
          Best Sellers
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <Button 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-10/12 bg-white text-black hover:bg-white/90"
                >
                  أضف للسلة
                </Button>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2 group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground font-light">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
