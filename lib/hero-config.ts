export interface ResponsiveConfig {
  cardWidth: number
  cardHeight: number
  vShapePositions: Array<{ top: string; left: string; rotation: number }>
  surroundingGroups: {
    group1: Array<{ top: string; left: string; width: string; height: string }>
    group2: Array<{ top: string; left: string; width: string; height: string }>
    group3: Array<{ top: string; left: string; width: string; height: string }>
  }
}

const HEADER_H = 96 // matches h-24
const TOP_SAFE = HEADER_H + 24
const BOTTOM_GAP = 88 // space under the lowest card

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
    const isMobile = width < 768

    const cardWidth = isMobile ? 100 : 190
    const cardHeight = isMobile ? 150 : 275

    const yTop = TOP_SAFE + cardHeight / 2 + 8
    const yBottom = height - BOTTOM_GAP - cardHeight / 2
    const yMid1 = yTop + (yBottom - yTop) * 0.45
    const yMid2 = yTop + (yBottom - yTop) * 0.75

    // Calmer rotations for premium feel (was ±20, ±12, ±6, now ±14, ±10, ±6)
    const vShapePositions = isMobile
      ? [
          { top: `${Math.round(yTop)}px`, left: "82%", rotation: 12 },
          { top: `${Math.round(yMid1)}px`, left: "70%", rotation: 8 },
          { top: `${Math.round(yMid2)}px`, left: "60%", rotation: 4 },
          { top: `${Math.round(yBottom)}px`, left: "50%", rotation: 0 },
          { top: `${Math.round(yMid2)}px`, left: "40%", rotation: -4 },
          { top: `${Math.round(yMid1)}px`, left: "30%", rotation: -8 },
          { top: `${Math.round(yTop)}px`, left: "18%", rotation: -12 },
        ]
      : [
          { top: `${Math.round(yTop)}px`, left: "78%", rotation: 14 }, // Far Right (1)
          { top: `${Math.round(yMid1)}px`, left: "66%", rotation: 10 }, // Scene 2 Right (2)
          { top: `${Math.round(yMid2)}px`, left: "58%", rotation: 6 }, // Near Right (3)
          { top: `${Math.round(yBottom)}px`, left: "50%", rotation: 0 }, // Center Bottom (4)
          { top: `${Math.round(yMid2)}px`, left: "42%", rotation: -6 }, // Near Left (5)
          { top: `${Math.round(yMid1)}px`, left: "34%", rotation: -10 }, // Scene 2 Left (6)
          { top: `${Math.round(yTop)}px`, left: "22%", rotation: -14 }, // Far Left (7)
        ]

    return {
      cardWidth,
      cardHeight,
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
