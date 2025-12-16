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
      className="bg-black text-white relative overflow-hidden"
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.9) 80%)",
      }}
    >
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-[9999] h-24 flex justify-center items-center pointer-events-none shadow-[0_4px_20px_rgba(0,0,0,0.9)] bg-black/95 backdrop-blur-md border-b border-white/5 opacity-0 fixed-header">
        <span className="font-bold tracking-[0.25em] text-[22px] text-white/90 font-sans uppercase">النسخة</span>
      </div>

      <div ref={triggerRef} className="h-screen w-full relative flex flex-col items-center justify-center">
        {/* LAYER 1: VIDEO MASK (exits during scroll) */}
        <div className="video-mask-wrapper absolute inset-0 z-[60] bg-white pointer-events-none">
          <VideoTextMask
            videoSrc="https://cdn.pixabay.com/video/2025/11/09/314880.mp4"
            text="النسخة"
            className="w-full h-full"
          />
        </div>

        {/* LAYER 2: TEXT (Bas Asli + Dedication) */}
        <div className="text-layer-container absolute inset-0 z-[55] flex flex-col items-center justify-center pointer-events-none">
          <div className="text-content-wrapper flex flex-col items-center justify-center gap-y-3 opacity-0">
            {/* Bas Asli */}
            <h1
              className="text-main font-black tracking-tight leading-[0.9] text-center"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              بس اصلي
            </h1>
            {/* Dedication */}
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-medium text-white/70 text-center font-sans tracking-[0.2em]">
              اهداء ليسري نصر الله
            </p>
          </div>
        </div>

        {/* LAYER 3: COLLAGE CARDS */}
        <div className="collage-container fixed inset-0 z-[40] flex items-center justify-center pointer-events-none">
          <div className="collage-wrapper relative w-full h-full flex items-center justify-center">
            {/* Cinema-style collage of cards */}
            {responsiveValues.collagePositions.map((pos, i) => (
              <div
                key={`collage-card-${i}`}
                className="collage-card absolute origin-center"
                style={{
                  width: `${pos.width}px`,
                  height: `${pos.height}px`,
                  left: pos.left,
                  top: pos.top,
                  opacity: 0,
                  transform: `translate(-50%, -50%) rotate(${pos.rotation}deg)`,
                }}
              >
                <div
                  className="card-elite w-full h-full overflow-hidden relative transition-transform duration-500 ease-out hover:-translate-y-1"
                  style={{
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backgroundColor: "rgba(10,10,10,0.15)",
                    backdropFilter: "blur(8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  <ImageWithFallback
                    src={images[i] || "/placeholder.svg"}
                    alt={`Card ${i}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%)",
                      opacity: 0.6,
                      borderRadius: "24px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LAYER 4: SECONDARY TEXT "النسخة" */}
        <div className="phase-5-layer absolute inset-0 z-[54] flex flex-col items-center justify-center pointer-events-none">
          <div className="phase-5-wrapper opacity-0 flex flex-col items-center justify-center gap-y-3">
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-medium text-white/70 text-center font-sans tracking-[0.2em]">
              النسخة
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
