import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Text Parallax (Moves faster/slower)
      gsap.to(textRef.current, {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1635866110391-bdfeaaea1a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMHdvbWFuJTIwYmVpZ2UlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2NTc3NTY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero Fashion"
          className="w-full h-full object-cover brightness-[0.85]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4" ref={textRef}>
        <h1 className="text-6xl md:text-9xl font-thin tracking-[0.2em] uppercase mb-4 font-sans">
          onsko
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide mb-12 max-w-2xl text-white/90">
          اكتشفي جمال الأناقة البسيطة مع تشكيلتنا الجديدة
        </p>
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-white/90 rounded-none px-12 py-8 text-lg uppercase tracking-widest transition-transform hover:scale-105"
        >
          تسوقي الآن
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <div className="w-[1px] h-16 bg-white/50 mx-auto mb-2" />
        <span className="text-xs uppercase tracking-widest opacity-70">Scroll</span>
      </div>
    </div>
  );
};
