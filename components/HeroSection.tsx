import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // التحقق من وجود العناصر المطلوبة
      if (!containerRef.current || !bgRef.current || !textRef.current) {
        console.warn('HeroSection: Required refs not available for animations');
        return;
      }

      const ctx = gsap.context(() => {
        try {
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
        } catch (animationError) {
          console.error('HeroSection: Animation setup failed:', animationError);
        }
      }, containerRef);

      return () => {
        try {
          ctx.revert();
        } catch (cleanupError) {
          console.error('HeroSection: Animation cleanup failed:', cleanupError);
        }
      };
    } catch (error) {
      console.error('HeroSection: useEffect failed:', error);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Image - آمن مع ImageWithFallback */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <ImageWithFallback 
          src="/placeholder.jpg"
          alt="Hero Fashion - أناقة النسخة"
          className="w-full h-full object-cover brightness-[0.85]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4" ref={textRef}>
        <h1 
          className="text-6xl md:text-9xl font-thin tracking-[0.2em] uppercase mb-4 font-sans"
          role="banner"
          aria-label="أونسكو - العلامة التجارية"
        >
          onsko
        </h1>
        <p 
          className="text-xl md:text-2xl font-light tracking-wide mb-12 max-w-2xl text-white/90"
          role="text"
          aria-describedby="hero-description"
        >
          اكتشفي جمال الأناقة البسيطة مع تشكيلتنا الجديدة
        </p>
        <Button 
          size="lg" 
          className="bg-white text-black hover:bg-white/90 rounded-none px-12 py-8 text-lg uppercase tracking-widest transition-transform hover:scale-105"
          aria-label="ابدئي التسوق الآن"
          role="button"
        >
          تسوقي الآن
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
        role="img"
        aria-label="مؤشر التمرير - مرر لأسفل لاستكشاف المحتوى"
      >
        <div className="w-[1px] h-16 bg-white/50 mx-auto mb-2" aria-hidden="true" />
        <span className="text-xs uppercase tracking-widest opacity-70">Scroll</span>
      </div>
    </div>
  );
};
