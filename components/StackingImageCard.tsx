interface StackingImageCardProps {
  src: string
  alt: string
  index: number
  className?: string
  width?: string
  height?: string
}

export const StackingImageCard = ({
  src,
  alt,
  index,
  className = "",
  width = "clamp(200px, 30vw, 400px)",
  height = "auto"
}: StackingImageCardProps) => {
  return (
    <div
      className={`stacking-card absolute rounded-xl shadow-2xl overflow-hidden border-2 border-white/20 ${className}`}
      style={{
        width: width,
        height: height,
        aspectRatio: height === "auto" ? "16/9" : "unset",
        transformOrigin: "center center",
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading={index < 2 ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
