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

class HeroConfiguration {
  private static instance: HeroConfiguration
  private constructor() {}

  public static getInstance(): HeroConfiguration {
    if (!HeroConfiguration.instance) {
      HeroConfiguration.instance = new HeroConfiguration()
    }
    return HeroConfiguration.instance
  }

  public getResponsiveValues(width: number): ResponsiveConfig {
    const isMobile = width < 768

    return {
      cardWidth: isMobile ? 110 : 200,
      cardHeight: isMobile ? 165 : 290,

      vShapePositions: [
        { top: "28%", left: "85%", rotation: 20 }, // Far Right (1) - أعلى اليمين
        { top: "52%", left: "72%", rotation: 12 }, // Scene 2 Right (2) - تحت الوسط يمين
        { top: "70%", left: "62%", rotation: 6 }, // Near Right (3) - أقرب للوسط
        { top: "85%", left: "50%", rotation: 0 }, // Center Bottom (4) - المنتصف
        { top: "70%", left: "38%", rotation: -6 }, // Near Left (5) - أقرب للوسط
        { top: "52%", left: "28%", rotation: -12 }, // Scene 2 Left (6) - تحت الوسط يسار
        { top: "28%", left: "15%", rotation: -20 }, // Far Left (7) - أعلى اليسار
      ],

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
