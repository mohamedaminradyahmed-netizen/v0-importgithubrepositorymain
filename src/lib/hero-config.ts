export interface ResponsiveConfig {
  cardWidth: number
  cardHeight: number
  vShapePositions: Array<{ top: string; left: string; rotation: number }>
  surroundingGroups: {
    group1: Array<{ top: string; left: string; width: string; height: string }>;
    group2: Array<{ top: string; left: string; width: string; height: string }>;
    group3: Array<{ top: string; left: string; width: string; height: string }>;
  }
}

class HeroConfiguration {
  private static instance: HeroConfiguration
  private constructor() { }

  public static getInstance(): HeroConfiguration {
    if (!HeroConfiguration.instance) {
      HeroConfiguration.instance = new HeroConfiguration()
    }
    return HeroConfiguration.instance
  }

  public getResponsiveValues(width: number): ResponsiveConfig {
    const isMobile = width < 768;

    return {
      cardWidth: isMobile ? 120 : 220,
      cardHeight: isMobile ? 180 : 320,

      // Precise V-Shape (Centered)
      vShapePositions: [
        { top: "25%", left: "85%", rotation: 20 },   // Far Right
        { top: "45%", left: "75%", rotation: 12 },   // Mid Right
        { top: "65%", left: "65%", rotation: 6 },    // Near Right
        { top: "85%", left: "50%", rotation: 0 },    // Center Bottom
        { top: "65%", left: "35%", rotation: -6 },   // Near Left
        { top: "45%", left: "25%", rotation: -12 },  // Mid Left
        { top: "25%", left: "15%", rotation: -20 },  // Far Left
      ],

      // The 3 Groups of 4 Cards (12 Total)
      // Designed to frame the center container
      surroundingGroups: {
        // Group 1: The "Top/Outer" Layer (Enters first)
        group1: [
           { top: "5%", left: "5%", width: "18%", height: "25%" },
           { top: "5%", left: "77%", width: "18%", height: "25%" },
           { top: "15%", left: "28%", width: "12%", height: "18%" }, // Inner top left
           { top: "15%", left: "60%", width: "12%", height: "18%" }, // Inner top right
        ],
        // Group 2: The "Middle/Side" Layer (Enters second)
        group2: [
           { top: "40%", left: "2%", width: "16%", height: "22%" },
           { top: "40%", left: "82%", width: "16%", height: "22%" },
           { top: "35%", left: "22%", width: "10%", height: "14%" }, // Closer side left
           { top: "35%", left: "68%", width: "10%", height: "14%" }, // Closer side right
        ],
        // Group 3: The "Bottom" Layer (Enters last)
        group3: [
           { top: "75%", left: "5%", width: "20%", height: "20%" },
           { top: "75%", left: "75%", width: "20%", height: "20%" },
           { top: "80%", left: "30%", width: "15%", height: "15%" },
           { top: "80%", left: "55%", width: "15%", height: "15%" },
        ]
      }
    }
  }
}

export const heroConfig = HeroConfiguration.getInstance()
