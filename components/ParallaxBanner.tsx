import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ParallaxBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  height?: string;
}

export const ParallaxBanner = ({ image, title, subtitle, buttonText, height = "h-[60vh]" }: ParallaxBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(bgRef.current, 
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className={`relative ${height} overflow-hidden flex items-center justify-center`}>
      <div ref={bgRef} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <img 
          src={image} 
          alt="Banner" 
          className="w-full h-full object-cover brightness-[0.7]"
        />
      </div>
      
      <div className="relative z-10 text-center text-white p-6 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-thin uppercase tracking-widest mb-6">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl md:text-2xl font-light italic mb-8 opacity-90">
            "{subtitle}"
          </p>
        )}
        {buttonText && (
          <Button 
            className="bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-none px-10 py-6 text-lg uppercase tracking-wider transition-all"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  );
};
