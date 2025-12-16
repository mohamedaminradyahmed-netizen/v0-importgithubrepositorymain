export interface ResponsiveConfig {
  cardWidth: number
  cardHeight: number
  vShapePositions: Array<{ top: string; left: string; rotation: number }>
  scale: number
  surroundingGroups: {
    group1: Array<{ top: string; left: string; width: string; height: string }>
    group2: Array<{ top: string; left: string; width: string; height: string }>
    group3: Array<{ top: string; left: string; width: string; height: string }>
  }
}

const HEADER_H = 96 // matches h-24
const TOP_SAFE = HEADER_H + 24
const SAFE_BOTTOM = 80 // fixed bottom baseline
const BOTTOM_GAP = SAFE_BOTTOM + 50

class HeroConfiguration {
  private static instance: HeroConfiguration
  private constructor() {}

  public static getInstance(): HeroConfiguration {
    if (!HeroConfiguration.instance) {
      HeroConfiguration.instance = new HeroConfiguration()
    }
    return HeroConfiguration.instance
  }

  public getResponsiveValues(width: number, height = 900): ResponsiveConfig {
    const isTablet = width >= 768 && width < 1280
    const isDesktop = width >= 1280
    const isMobile = width < 768

    let cardWidth: number
    let cardHeight: number
    let scale: number
    let positions: Array<{ x: string; level: number; rotation: number }>

    if (isDesktop) {
      // Desktop: 7 cards, tight V formation
      cardWidth = 190
      cardHeight = 275
      scale = 0.82
      positions = [
        { x: "76%", level: 0, rotation: -10 }, // Far Left
        { x: "66%", level: 1, rotation: -7 },  // Scene 2 Left
        { x: "57%", level: 2, rotation: -4 },  // Near Left
        { x: "50%", level: 3, rotation: 0 },   // Center
        { x: "43%", level: 2, rotation: 4 },   // Near Right
        { x: "34%", level: 1, rotation: 7 },   // Scene 2 Right
        { x: "24%", level: 0, rotation: 10 },  // Far Right
      ]
    } else if (isTablet) {
      // Tablet: 5 cards (hide 2 outer)
      cardWidth = 160
      cardHeight = 235
      scale = 0.78
      positions = [
        { x: "66%", level: 1, rotation: -7 },  // Scene 2 Left
        { x: "57%", level: 2, rotation: -4 },  // Near Left
        { x: "50%", level: 3, rotation: 0 },   // Center
        { x: "43%", level: 2, rotation: 4 },   // Near Right
        { x: "34%", level: 1, rotation: 7 },   // Scene 2 Right
      ]
    } else {
      // Mobile: 3-4 cards (center-weighted, shallow V)
      cardWidth = 100
      cardHeight = 150
      scale = 0.74
      positions = [
        { x: "65%", level: 1, rotation: -6 },  // Left
        { x: "50%", level: 2, rotation: 0 },   // Center
        { x: "35%", level: 1, rotation: 6 },   // Right
      ]
    }

    // Compute vertical positions using fixed baseline
    const levelHeights = [20, 40, 60, 75]
    const yPositions = levelHeights.map((level) => TOP_SAFE + (level / 100) * (height - TOP_SAFE - BOTTOM_GAP))

    const vShapePositions = positions.map((pos, i) => ({
      top: `${Math.round(yPositions[pos.level])}px`,
      left: pos.x,
      rotation: pos.rotation,
    }))

    return {
      cardWidth,
      cardHeight,
      scale,
      vShapePositions,
      surroundingGroups: {
        group1: [
          { top: "5%", left: "5%", width: "18%", height: "25%" },
          { top: "5%", left: "77%", width: "18%", height: "25%" },
          { top: "15%", left: "28%", width: "12%", height: "18%" },
          { top: "15%", left: "60%", width: "12%", height: "18%" },
        ],
        group2: [
          { top: "40%", left: "2%", width: "16%", height: "22%" },
          { top: "40%", left: "82%", width: "16%", height: "22%" },
          { top: "35%", left: "22%", width: "10%", height: "14%" },
          { top: "35%", left: "68%", width: "10%", height: "14%" },
        ],
        group3: [
          { top: "75%", left: "5%", width: "20%", height: "20%" },
          { top: "75%", left: "75%", width: "20%", height: "20%" },
          { top: "80%", left: "30%", width: "15%", height: "15%" },
          { top: "80%", left: "55%", width: "15%", height: "15%" },
        ],
      },
    }
  }
}

export const heroConfig = HeroConfiguration.getInstance()
