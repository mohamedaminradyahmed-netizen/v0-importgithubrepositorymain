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

  // Fixed baseline constants for symmetric spacing
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

      // Phase 1: Reveal Video + Show Header
      tl.to(".video-mask-wrapper", {
        scale: 5,
        y: -600,
        opacity: 0,
        duration: 3,
        ease: "power2.inOut",
        pointerEvents: "none",
      })

      tl.to(
        ".fixed-header",
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=2.5",
      )

      // Phase 2: Title + Dedication
      tl.fromTo(
        ".text-content-wrapper",
        { opacity: 0, y: 300, scale: 0.9 },
        {
          opacity: 1,
          y: -240,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          zIndex: 30,
        },
        "-=1.5",
      )

      tl.fromTo(
        ".dedication-wrapper",
        { opacity: 0, y: 300, scale: 0.95 },
        {
          opacity: 1,
          y: -240,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          zIndex: 29,
        },
        "-=1.45",
      )

      tl.set(
        ".phase-5-wrapper",
        {
          y: -270,
          scale: 1,
        },
        "<",
      )

      tl.to(
        [".text-content-wrapper", ".dedication-wrapper"],
        {
          y: -240,
          duration: 1,
          ease: "none",
        },
        0.5,
      )

      // Phase 3: Card Animation Setup (V-Shape Valley with zero rotation)
      const phase3Images = gsap.utils.toArray(".phase-3-img") as HTMLElement[]

      phase3Images.forEach((img, i) => {
        const staggerDelay = i * 0.15

        tl.fromTo(
          img,
          { y: "120vh", rotation: 0, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          3.3 + staggerDelay,
        )
      })

      tl.to(
        ".phase-3-img",
        {
          top: (i) => {
            if (i < responsiveValues.vShapePositions.length) {
              return responsiveValues.vShapePositions[i]?.top || "50%"
            }
            return "100vh"
          },
          left: (i) => {
            if (i < responsiveValues.vShapePositions.length) return responsiveValues.vShapePositions[i]?.left || "50%"
            return "50%"
          },
          rotation: 0,
          scale: responsiveValues.scale,
          opacity: (i) => (i < responsiveValues.vShapePositions.length ? 1 : 0),
          duration: 1.8,
          ease: "power3.inOut",
        },
        2,
      )

      // Phase 5: Hide Title & Show Secondary Text
      tl.to(
        ".dedication-wrapper",
        {
          opacity: 0,
          duration: 0.45,
          ease: "power2.inOut",
        },
        "+=0.4",
      )

      tl.to(
        ".text-content-wrapper",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<+=0.15",
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

      // 5.3: Shrink THE UNIFIED ENTITY - DO NOT MODIFY FROM HERE
      tl.to(
        ".unified-entity",
        {
          scale: 0.5,
          duration: 4,
          ease: "power3.inOut",
        },
        "+=0.5",
      )

      tl.to(
        ".v-shape-container",
        {
          borderRadius: "2rem",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
          duration: 4,
          ease: "power3.inOut",
        },
        "<",
      )

      tl.to(
        [".text-content-wrapper", ".dedication-wrapper", ".phase-5-wrapper"],
        {
          scale: 0.5,
          duration: 4,
          ease: "power3.inOut",
        },
        "<",
      )

      tl.to(
        [".text-content-wrapper", ".dedication-wrapper", ".phase-5-wrapper"],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "+=0.5",
      )

      tl.call(() => {
        const mainTitle = document.querySelector(".text-content-wrapper h1")
        const dedication = document.querySelector(".dedication-wrapper p")
        const secondaryText = document.querySelector(".phase-5-wrapper p")

        if (mainTitle && dedication && secondaryText) {
          mainTitle.textContent = "بس اصلي"
          dedication.textContent = "اهداء ليسري نصر الله"
          secondaryText.textContent = "النسخة"
        }
      })

      tl.to([".text-content-wrapper", ".dedication-wrapper", ".phase-5-wrapper"], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })

      tl.to(
        ".scene-container",
        {
          y: -150,
          duration: 3,
          ease: "power2.inOut",
        },
        "+=0.8",
      )

      tl.to({}, { duration: 2 })
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getById("hero-scroll")?.kill()
    }
  }, [responsiveValues])

  return { responsiveValues }
}
