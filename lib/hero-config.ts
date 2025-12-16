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

const HEADER_H = 96
const TOP_SAFE = HEADER_H + 24
const SAFE_BOTTOM = 80
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
    let positions: Array<{ left: string; top: string; rotation: number }>

    if (isDesktop) {
      // Desktop: 7 cards in V-shape valley (center lowest, outer highest)
      cardWidth = 190
      cardHeight = 275
      scale = 0.82
      positions = [
        { left: "10%", top: "20%", rotation: 0 }, // Far Left (highest)
        { left: "23%", top: "35%", rotation: 0 }, // Left
        { left: "36%", top: "45%", rotation: 0 }, // Inner Left
        { left: "50%", top: "55%", rotation: 0 }, // CENTER (lowest)
        { left: "64%", top: "45%", rotation: 0 }, // Inner Right
        { left: "77%", top: "35%", rotation: 0 }, // Right
        { left: "90%", top: "20%", rotation: 0 }, // Far Right (highest)
      ]
    } else if (isTablet) {
      // Tablet: 5 cards in V-shape
      cardWidth = 160
      cardHeight = 235
      scale = 0.78
      positions = [
        { left: "15%", top: "30%", rotation: 0 }, // Left
        { left: "30%", top: "42%", rotation: 0 }, // Inner Left
        { left: "50%", top: "55%", rotation: 0 }, // CENTER (lowest)
        { left: "70%", top: "42%", rotation: 0 }, // Inner Right
        { left: "85%", top: "30%", rotation: 0 }, // Right
      ]
    } else {
      // Mobile: 3 cards in V-shape
      cardWidth = 100
      cardHeight = 150
      scale = 0.74
      positions = [
        { left: "20%", top: "35%", rotation: 0 }, // Left
        { left: "50%", top: "50%", rotation: 0 }, // CENTER (lowest)
        { left: "80%", top: "35%", rotation: 0 }, // Right
      ]
    }

    const vShapePositions = positions.map((pos) => ({
      top: pos.top,
      left: pos.left,
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
