"use client"

import { useState, useEffect, useLayoutEffect, type RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { heroConfig, type ResponsiveConfig } from "../lib/hero-config"

gsap.registerPlugin(ScrollTrigger)

export const useHeroAnimation = (
  containerRef: RefObject<HTMLDivElement | null>,
  triggerRef: RefObject<HTMLDivElement | null>,
) => {
  const [responsiveValues, setResponsiveValues] = useState<ResponsiveConfig | null>(null)

  const HEADER_H = 96
  const SAFE_BOTTOM = 80
  const SAFE_TOP = HEADER_H + 24

  useEffect(() => {
    const handleResize = () => {
      setResponsiveValues(heroConfig.getResponsiveValues(window.innerWidth, window.innerHeight))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useLayoutEffect(() => {
    if (!responsiveValues || !containerRef.current || !triggerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=12000",
          scrub: 2.5,
          pin: true,
          anticipatePin: 1,
          id: "hero-scroll",
        },
      })

      // Phase 1: Exit Video Mask
      tl.to(".video-mask-wrapper", {
        scale: 1.5,
        y: -800,
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
        pointerEvents: "none",
      })

      // Show Header
      tl.to(
        ".fixed-header",
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=2.5",
      )

      // Phase 2: Show Main Text "بس اصلي"
      tl.fromTo(
        ".text-content-wrapper",
        { opacity: 0, y: 300, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          zIndex: 30,
        },
        "-=1.5",
      )

      // Phase 3: Animate Collage Cards In
      const collageCards = gsap.utils.toArray(".collage-card") as HTMLElement[]
      collageCards.forEach((card, i) => {
        const staggerDelay = i * 0.1
        tl.fromTo(
          card,
          { opacity: 0, scale: 0.3, y: 100 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out" },
          2 + staggerDelay,
        )
      })

      // Phase 4: Hold position
      tl.to({}, { duration: 2 })

      // Phase 5: Hide Main Text & Show Secondary "النسخة"
      tl.to(
        ".text-content-wrapper",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "+=0.5",
      )

      tl.to(
        ".phase-5-wrapper",
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<+=0.2",
      )

      // Phase 6: Shrink Collage
      tl.to(
        ".collage-wrapper",
        {
          scale: 0.5,
          duration: 4,
          ease: "power3.inOut",
        },
        "+=0.5",
      )

      tl.to(
        [".text-content-wrapper", ".phase-5-wrapper"],
        {
          scale: 0.5,
          duration: 4,
          ease: "power3.inOut",
        },
        "<",
      )

      // Phase 7: Fade out and reset text
      tl.to(
        [".text-content-wrapper", ".phase-5-wrapper"],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "+=0.5",
      )

      tl.call(() => {
        const mainTitle = document.querySelector(".text-content-wrapper h1")
        const secondaryText = document.querySelector(".phase-5-wrapper p")

        if (mainTitle && secondaryText) {
          mainTitle.textContent = "النسخة"
          secondaryText.textContent = "بس اصلي"
        }
      })

      tl.to([".text-content-wrapper", ".phase-5-wrapper"], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })

      tl.to({}, { duration: 2 })
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getById("hero-scroll")?.kill()
    }
  }, [responsiveValues])

  return { responsiveValues }
}
