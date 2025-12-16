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
            LAYER 2–4: TEXT + V-SHAPE CONTAINER (Unified)
           ========================================= */}
        <div className="scene-container fixed inset-0 z-[40] flex items-center justify-center pointer-events-none">
          <div className="unified-entity relative w-full h-full flex items-center justify-center">
            {/* V-Shape Container (Moved here) */}
            <div className="v-shape-container absolute top-0 left-0 w-full h-full z-40 m-0 p-0">
              <div className="v-shape-cards-layer absolute inset-0">
                {responsiveValues.vShapePositions.map((pos, i) => {
                  const centerIndex = Math.floor(responsiveValues.vShapePositions.length / 2)
                  const distanceFromCenter = Math.abs(i - centerIndex)
                  const zIndex = 10 - distanceFromCenter

                  return (
                    <div
                      key={`v-card-${i}`}
                      className="phase-3-img hero-vcard absolute origin-center"
                      style={{
                        width: `${responsiveValues.cardWidth}px`,
                        height: `${responsiveValues.cardHeight}px`,
                        zIndex,
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
                  )
                })}
              </div>

              <div className="main-content-wrapper relative flex flex-col items-center justify-center text-center w-full h-full">
                <div className="text-content-wrapper flex flex-col items-center justify-center w-auto z-30 -ml-0.5 opacity-0">
                  <h1 className="text-main text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-tight text-center">
                    بس اصلي
                  </h1>
                </div>

                <div className="dedication-layer absolute inset-0 z-[54] flex flex-col items-center justify-center pointer-events-none">
                  <div className="dedication-wrapper flex flex-col items-center justify-center w-auto pt-32 md:pt-40 mr-8 md:mr-35 opacity-0">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium text-white/60 text-center font-sans tracking-[0.2em]">
                      اهداء ليسري نصر الله
                    </p>
                  </div>
                </div>

                <div className="phase-5-layer absolute inset-0 z-[54] flex flex-col items-center justify-center pointer-events-none">
                  <div className="phase-5-wrapper opacity-0 flex flex-col items-center justify-center w-auto pt-32 md:pt-40 mr-8 md:mr-35 opacity-0">
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium text-white/60 text-center font-sans tracking-[0.2em]">
                      النسخة
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
