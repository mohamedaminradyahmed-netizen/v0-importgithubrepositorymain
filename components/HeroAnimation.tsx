"use client"

import { useRef } from "react"
import { VideoTextMask } from "./VideoTextMask"
import { useHeroAnimation } from "@/hooks/use-hero-animation"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import images from "@/lib/images"

export const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const { responsiveValues } = useHeroAnimation(containerRef, triggerRef)

  if (!responsiveValues) return <div className="min-h-screen bg-black" />

  return (
    <div
      ref={containerRef}
      className="hero-animation-root bg-black text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* HEADER: STRICTLY "النسخة" CENTERED ONLY - INITIALLY HIDDEN */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-24 flex justify-center items-center pointer-events-none shadow-[0_4px_20px_rgba(0,0,0,0.9)] bg-black/95 backdrop-blur-md border-b border-white/5 opacity-0 fixed-header">
        <span className="font-bold tracking-[0.25em] text-[22px] text-white/90 font-sans uppercase">النسخة</span>
      </div>

      <div ref={triggerRef} className="h-screen w-full relative flex flex-col items-center justify-center">
        {/* =========================================
            LAYER 1: INTRO (Video)
           ========================================= */}
        <div className="video-mask-wrapper absolute inset-0 z-[60] bg-white pointer-events-none">
          <VideoTextMask
            videoSrc="https://cdn.pixabay.com/video/2025/11/09/314880.mp4"
            text="النسخة"
            className="w-full h-full"
          />
        </div>

        {/* =========================================
            LAYER 2: TEXT BLOCK (Bas Asli + Dedication)
           ========================================= */}

        {/* Main Title & Subtitle Wrapper */}
        <div className="text-layer-container absolute inset-0 z-[55] flex flex-col items-center justify-center pointer-events-none">
          <div className="text-content-group flex flex-col items-center justify-center">
            <div className="main-title-wrapper opacity-0">
              {/* Bas Asli */}
              <h1 className="hero-main-title text-main font-black tracking-tight leading-[0.9] text-center">
                بس اصلي
              </h1>
            </div>

            <div className="dedication-wrapper opacity-0 mt-55">
              {/* Dedication */}
              <p className="hero-dedication">
                اهداء ليسري نصر الله
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            LAYER 3: THE V-SHAPE CONTAINER
           ========================================= */}
        <div className="scene-container fixed inset-0 z-[40] flex items-center justify-center pointer-events-none">
          {/* UNIFIED ENTITY WRAPPER - All elements scale together as ONE */}
          <div className="unified-entity relative w-full h-full flex items-center justify-center">
            <div className="v-shape-container relative bg-transparent overflow-visible flex items-center justify-center w-screen h-screen">
              {/* The V-Shape Cards */}
              {responsiveValues.vShapePositions.map((pos, i) => (
                <div
                  key={`v-card-${i}`}
                  className="phase-3-img hero-vcard absolute origin-center"
                  style={{
                    width: `${responsiveValues.cardWidth}px`,
                    height: `${responsiveValues.cardHeight}px`,
                    zIndex: 40 - Math.abs(i - 3),
                  }}
                >
                  <div className="card-elite w-full h-full overflow-hidden relative">
                    <ImageWithFallback
                      src={images[i] || "/placeholder.svg"}
                      alt={`Scene ${i}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="hero-card-sheen absolute inset-0 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            LAYER 4: SECONDARY TEXT "النسخة"
            (Appears AFTER dedication fades - SAME position & size)
           ========================================= */}
        <div className="phase-5-layer absolute inset-0 z-[54] flex flex-col items-center justify-center pointer-events-none">
          <div className="phase-5-wrapper hero-title-stack opacity-0">
            <p className="hero-secondary-label">النسخة</p>
          </div>
        </div>
      </div>
    </div>
  )
}
