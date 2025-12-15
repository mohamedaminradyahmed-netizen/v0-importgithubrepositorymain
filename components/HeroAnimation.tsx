"use client"

import { useRef } from "react"
import { VideoTextMask } from "./VideoTextMask"
import { useHeroAnimation } from "../../hooks/use-hero-animation"
import images from "../../lib/images"

export const HeroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const { responsiveValues } = useHeroAnimation(containerRef, triggerRef)

  if (!responsiveValues) return <div className="min-h-screen bg-black" />

  return (
    <div
      ref={containerRef}
      className="bg-black text-white relative overflow-hidden"
      dir="rtl"
      style={{ minHeight: "100vh" }}
    >
      {/* HEADER: STRICTLY "النسخة" CENTERED ONLY - INITIALLY HIDDEN */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-20 flex justify-center items-center pointer-events-none shadow-[0_4px_12px_rgba(0,0,0,0.8)] bg-black/90 backdrop-blur-sm border-b border-white/10 opacity-0 fixed-header">
        <span className="font-bold tracking-widest text-[24px] text-white font-sans">النسخة</span>
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
            Refactored to match user's preferred structure with nested wrappers.
           ========================================= */}

        {/* Main Title Wrapper */}
        <div className="text-layer-container absolute top-0 left-0 w-full h-full z-[55] m-0 p-0 pointer-events-none">
          <div className="main-content-wrapper relative flex flex-col items-center justify-center text-center w-full h-full">
            <div className="text-content-wrapper flex flex-col items-center justify-center w-auto -ml-0.5 opacity-0">
              {/* Bas Asli */}
              <h1 className="text-main text-[36px] sm:text-[48px] md:text-[72px] lg:text-[128px] font-black tracking-tighter leading-tight text-center">
                بس اصلي
              </h1>
            </div>
          </div>
        </div>

        {/* Dedication Layer - Independent to fade out first */}
        <div className="dedication-layer absolute inset-0 z-[54] flex flex-col items-center justify-center pointer-events-none">
          <div className="dedication-wrapper flex flex-col items-center justify-center w-auto pt-28 md:pt-36 mr-8 md:mr-20 opacity-0">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold text-white/80 text-center font-sans tracking-widest">
              اهداء ليسري نصر الله
            </p>
          </div>
        </div>

        {/* =========================================
            LAYER 3: THE V-SHAPE CONTAINER
           ========================================= */}
        <div className="scene-container fixed inset-0 z-[40] flex items-center justify-center pointer-events-none">
          {/* UNIFIED ENTITY WRAPPER - All elements scale together as ONE */}
          <div className="unified-entity relative w-full h-full flex items-center justify-center">
            <div
              className="v-shape-container relative bg-transparent overflow-visible flex items-center justify-center"
              style={{
                width: "100vw",
                height: "100vh",
              }}
            >
              {/* The 7 V-Shape Cards */}
              {responsiveValues.vShapePositions.map((pos, i) => (
                <div
                  key={`v-card-${i}`}
                  className="phase-3-img absolute shadow-2xl origin-center"
                  style={{
                    width: `${responsiveValues.cardWidth}px`,
                    height: `${responsiveValues.cardHeight}px`,
                    left: "50%",
                    top: "150%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 40 - Math.abs(i - 3),
                  }}
                >
                  <div className="w-full h-full rounded-[12px] overflow-hidden border border-white/20 bg-[#111]">
                    <img
                      src={images[i] || "/placeholder.svg"}
                      alt={`Scene ${i}`}
                      className="w-full h-full object-cover"
                    />
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
        <div className="phase-5-layer fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none">
          <div className="phase-5-wrapper opacity-0 flex flex-col items-center justify-center w-auto pt-24 md:pt-32">
            <p className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-light text-white/80 text-center">
              النسخة
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
