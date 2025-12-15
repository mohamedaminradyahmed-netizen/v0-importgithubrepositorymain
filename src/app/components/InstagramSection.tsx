import { Instagram } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1654440828348-f81102151a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBsaWZlc3R5bGUlMjBiZWlnZSUyMGluc3RhZ3JhbXxlbnwxfHx8fDE3NjU3NzU2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1763888476830-75c71621c0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHNob3AlMjBtaW5pbWFsaXN0JTIwYmVpZ2UlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzY1Nzc1Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1635866110391-bdfeaaea1a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHdvbWFuJTIwYmVpZ2UlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NTc3NTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1761125802333-d145773f4461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc2tpbmNhcmUlMjBib3R0bGUlMjBwcm9kdWN0JTIwYmVpZ2V8ZW58MXx8fHwxNzY1Nzc1Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1636837955417-2d8a4e49368f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNvZnQlMjBiZWlnZSUyMHRleHR1cmV8ZW58MXx8fHwxNzY1Nzc1Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1654440828348-f81102151a44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXN0aGV0aWMlMjBsaWZlc3R5bGUlMjBiZWlnZSUyMGluc3RhZ3JhbXxlbnwxfHx8fDE3NjU3NzU2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export const InstagramSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
        <h2 className="text-3xl font-light uppercase tracking-widest mb-4">
          Follow us on Instagram
        </h2>
        <a href="#" className="flex items-center gap-2 text-secondary hover:text-foreground transition-colors">
          <Instagram className="w-5 h-5" />
          <span className="text-lg">@onsko_official</span>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {images.map((img, i) => (
          <div key={i} className="aspect-square relative group overflow-hidden cursor-pointer">
            <img 
              src={img} 
              alt={`Instagram post ${i+1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
