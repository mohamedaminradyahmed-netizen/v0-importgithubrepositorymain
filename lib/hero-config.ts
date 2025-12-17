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
        { left: "26%", top: "30%", rotation: 0 }, // Left cluster (back)
        { left: "32%", top: "36%", rotation: 0 }, // Left cluster (mid)
        { left: "40%", top: "46%", rotation: 0 }, // Left cluster (front)
        { left: "50%", top: "54%", rotation: 0 }, // Center (front - lowest)
        { left: "58%", top: "54%", rotation: 0 }, // Center (front - lowest)
        { left: "66%", top: "40%", rotation: 0 }, // Right cluster (mid)
        { left: "72%", top: "32%", rotation: 0 }, // Right cluster (back)
      ]
    } else if (isTablet) {
      // Tablet: 5 cards in V-shape
      cardWidth = 160
      cardHeight = 235
      scale = 0.78
      positions = [
        { left: "30%", top: "34%", rotation: 0 }, // Left (back)
        { left: "40%", top: "46%", rotation: 0 }, // Left (front)
        { left: "50%", top: "56%", rotation: 0 }, // Center (front - lowest)
        { left: "60%", top: "46%", rotation: 0 }, // Right (front)
        { left: "70%", top: "34%", rotation: 0 }, // Right (back)
      ]
    } else {
      // Mobile: 3 cards in V-shape
      cardWidth = 100
      cardHeight = 150
      scale = 0.74
      positions = [
        { left: "38%", top: "44%", rotation: 0 }, // Left (back)
        { left: "50%", top: "56%", rotation: 0 }, // Center (front - lowest)
        { left: "62%", top: "44%", rotation: 0 }, // Right (back)
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
