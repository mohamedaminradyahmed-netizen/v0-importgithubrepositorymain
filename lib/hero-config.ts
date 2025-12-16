export interface CardPosition {
  top: string
  left: string
  rotation: number
  width: number
  height: number
}

export interface ResponsiveConfig {
  collagePositions: CardPosition[]
}

const HEADER_H = 96

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
    const isDesktop = width >= 1280

    // Cinema-style organized collage layout (symmetrical around center)
    // Positions are based on 9-card layout with center emphasis
    const collagePositions: CardPosition[] = isDesktop
      ? [
          // Left side - upper
          { top: "12%", left: "5%", rotation: -5, width: 160, height: 220 },
          // Left side - middle grid (smaller cards)
          { top: "28%", left: "8%", rotation: 3, width: 100, height: 140 },
          { top: "28%", left: "14%", rotation: -2, width: 100, height: 140 },
          { top: "35%", left: "8%", rotation: 2, width: 100, height: 140 },
          { top: "35%", left: "14%", rotation: -4, width: 100, height: 140 },

          // Center top
          { top: "15%", left: "40%", rotation: 2, width: 140, height: 190 },
          // Center - yellow popcorn card
          { top: "38%", left: "38%", rotation: -3, width: 130, height: 180 },
          // Center bottom
          { top: "62%", left: "40%", rotation: 1, width: 140, height: 190 },

          // Right side - upper
          { top: "12%", left: "75%", rotation: 4, width: 160, height: 220 },
          // Right side - cinema/nature card
          { top: "28%", left: "70%", rotation: -3, width: 110, height: 160 },
          // Right side - pink cinema
          { top: "35%", left: "76%", rotation: 2, width: 110, height: 160 },
        ]
      : width >= 768
        ? [
            // Tablet layout - reduced to 7 cards
            { top: "15%", left: "8%", rotation: -4, width: 120, height: 170 },
            { top: "30%", left: "12%", rotation: 2, width: 80, height: 110 },

            { top: "18%", left: "38%", rotation: 1, width: 110, height: 150 },
            { top: "40%", left: "35%", rotation: -2, width: 100, height: 140 },
            { top: "62%", left: "38%", rotation: 0, width: 110, height: 150 },

            { top: "15%", left: "72%", rotation: 3, width: 120, height: 170 },
            { top: "30%", left: "68%", rotation: -1, width: 80, height: 110 },
          ]
        : [
            // Mobile layout - 5 cards stacked
            { top: "15%", left: "10%", rotation: -3, width: 100, height: 140 },
            { top: "30%", left: "25%", rotation: 2, width: 90, height: 125 },

            { top: "20%", left: "40%", rotation: 0, width: 95, height: 135 },
            { top: "45%", left: "32%", rotation: -2, width: 85, height: 120 },

            { top: "15%", left: "70%", rotation: 2, width: 100, height: 140 },
          ]

    return {
      collagePositions,
    }
  }
}

export const heroConfig = HeroConfiguration.getInstance()
