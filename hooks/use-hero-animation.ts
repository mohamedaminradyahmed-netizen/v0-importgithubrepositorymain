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

  useEffect(() => {
    const handleResize = () => {
      setResponsiveValues(heroConfig.getResponsiveValues(window.innerWidth))
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

      // Show Fixed Header with Video fade out
      tl.to(
        ".fixed-header",
        {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "-=2.5",
      )

      // Show text content wrapper
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

      // Show dedication wrapper
      tl.fromTo(
        ".dedication-wrapper",
        { opacity: 0, y: 300, scale: 0.9 },
        {
          opacity: 1,
          y: -240,
          scale: 1,
          duration: 2,
          ease: "power2.out",
          zIndex: 30,
        },
        "<",
      )

      tl.set(
        ".phase-5-wrapper",
        {
          y: -240,
          scale: 1,
        },
        "<",
      )

      // Phase 3: Text Lock in Place & Cards Start Appearing
      tl.to(
        ".text-content-wrapper",
        {
          y: -240,
          duration: 1,
          ease: "none",
        },
        0.5,
      )

      tl.to(
        ".dedication-wrapper",
        {
          y: -240,
          duration: 1,
          ease: "none",
        },
        "<",
      )

      // Phase 3: Card Animation Setup
      const phase3Images = gsap.utils.toArray(".phase-3-img") as HTMLElement[]
      phase3Images.forEach((img, i) => {
        const staggerDelay = i * 0.15
        const randomX = (i % 2 === 0 ? -1 : 1) * (Math.random() * 30 + 10)
        const randomAngle = (Math.random() - 0.5) * 20

        tl.fromTo(
          img,
          { y: "120vh", rotation: randomAngle, opacity: 0, xPercent: randomX },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          1.2 + staggerDelay,
        )
      })

      // Phase 4: V-Shape Formation
      tl.to(
        ".phase-3-img",
        {
          top: (i) => {
            if (i < 7) return responsiveValues.vShapePositions[i]?.top || "50%"
            return "100vh"
          },
          left: (i) => {
            if (i < 7) return responsiveValues.vShapePositions[i]?.left || "50%"
            return "50%"
          },
          xPercent: -50,
          yPercent: -50,
          rotation: (i) => (i < 7 ? responsiveValues.vShapePositions[i]?.rotation || 0 : 0),
          scale: 0.85,
          opacity: (i) => (i < 7 ? 1 : 0),
          duration: 1.5,
          ease: "power3.inOut",
        },
        2,
      )

      // Phase 5: Hide Dedication & Shrink to Center

      // 5.1: Hide Dedication Text First
      tl.to(
        ".dedication-wrapper",
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

      // 5.3: Shrink THE UNIFIED ENTITY + النصين معاهم (كلهم سوياً)
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

      // Scale النصين مع الحاوية (وهم في مكانهم فوق)
      tl.to(
        [".text-content-wrapper", ".phase-5-wrapper"],
        {
          scale: 0.5,
          duration: 4,
          ease: "power3.inOut",
        },
        "<",
      )

      // 5.4: TEXT SWAP - بعد التموضع (في نفس أماكنهم - كل واحدة مكان التانية)
      tl.to(
        [".text-content-wrapper", ".phase-5-wrapper"],
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "+=0.5",
      )

      // Swap positions & content
      tl.call(() => {
        const mainTitle = document.querySelector(".text-content-wrapper h1")
        const secondaryText = document.querySelector(".phase-5-wrapper p")

        if (mainTitle && secondaryText) {
          // النسخة becomes big (main title)
          mainTitle.textContent = "النسخة"
          // بس اصلي becomes small (secondary)
          secondaryText.textContent = "بس اصلي"

          console.log("✅ TEXT SWAP في نفس الأماكن:", {
            big: mainTitle.textContent,
            small: secondaryText.textContent,
          })
        }
      })

      tl.to([".text-content-wrapper", ".phase-5-wrapper"], {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      })

      // 6. PARALLAX JOURNEY - DYNAMIC STACKING & DESCENT
      const group1 = gsap.utils.toArray(".grid-card-g1")
      const group2 = gsap.utils.toArray(".grid-card-g2")
      const group3 = gsap.utils.toArray(".grid-card-g3")

      // STAGE 1: Group1 appears around container
      tl.to(
        group1,
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.15,
          ease: "power3.out",
        },
        "+=0.5",
      )

      // STAGE 2: Container + Group1 descend as ONE entity, Group2 appears during descent
      tl.to(
        ".scene-container",
        {
          y: -150,
          duration: 3,
          ease: "power2.inOut",
        },
        "+=0.8",
      )

      tl.to(
        group1,
        {
          y: -150,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      )

      // Group2 appears while everything descends
      tl.to(
        group2,
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=2",
      )

      // STAGE 3: Container + Group1 + Group2 descend together, Group3 appears
      tl.to(
        ".scene-container",
        {
          y: -300,
          duration: 3,
          ease: "power2.inOut",
        },
        "+=0.5",
      )

      tl.to(
        group1,
        {
          y: -300,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      )

      tl.to(
        group2,
        {
          y: -150,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      )

      // Group3 appears during descent
      tl.to(
        group3,
        {
          y: 0,
          opacity: 1,
          duration: 2,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=2",
      )

      // STAGE 4: Final descent - ALL layers move together to final position
      tl.to(
        ".scene-container",
        {
          y: -450,
          duration: 3,
          ease: "power2.inOut",
        },
        "+=0.5",
      )

      tl.to(
        group1,
        {
          y: -450,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      )

      tl.to(
        group2,
        {
          y: -300,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      )

      tl.to(
        group3,
        {
          y: -150,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      )

      tl.to({}, { duration: 2 }) // Final hold
    }, containerRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getById("hero-scroll")?.kill()
    }
  }, [responsiveValues])

  return { responsiveValues }
}
