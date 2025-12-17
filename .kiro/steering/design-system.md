---
inclusion: always
---

# قواعد نظام التصميم - تكامل Figma مع React/Next.js

## 🎯 نظرة عامة على النظام

هذا المشروع يستخدم **Next.js 16** مع **React 19** و **TypeScript**، مبني على نظام تصميم متقدم يجمع بين **shadcn/ui** و **Tailwind CSS** مع دعم كامل للغة العربية والوضع المظلم.

## 🏗️ بنية نظام التصميم

### 1. إدارة الرموز المميزة (Design Tokens)

**الموقع:** `app/globals.css`
**النظام:** CSS Custom Properties مع دعم OKLCH للألوان

```css
:root {
  /* الألوان الأساسية */
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --brand: oklch(0.646 0.222 41.116);
  
  /* المسافات والأشعة */
  --radius: 0.625rem;
}
```

**قواعد التكامل مع Figma:**
- استخدم متغيرات CSS المحددة بدلاً من قيم Tailwind الثابتة
- حافظ على تناسق الألوان مع نظام OKLCH
- استخرج متغيرات Figma باستخدام `get_variable_defs` tool

### 2. مكتبة المكونات

**الموقع:** `components/ui/` (مكونات أساسية) + `components/` (مكونات تطبيق)
**النمط:** shadcn/ui مع تخصيصات مشروع

```typescript
// نمط المكون الأساسي
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // ... المزيد من المتغيرات
      }
    }
  }
)
```

**قواعد التكامل:**
- استخدم `class-variance-authority` للمتغيرات
- طبق `cn()` utility لدمج الفئات
- حافظ على forwardRef للمكونات المركبة

### 3. الإطارات والمكتبات

**الأساسية:**
- **React 19.2.3** - مكتبة UI الأساسية
- **Next.js 16.0.10** - إطار العمل
- **TypeScript 5.9.3** - الأمان النوعي

**التصميم:**
- **Tailwind CSS 3.4.17** - إطار CSS الأساسي
- **shadcn/ui** - مكتبة المكونات
- **Radix UI** - مكونات إمكانية الوصول
- **class-variance-authority** - إدارة متغيرات المكونات
- **tailwind-merge** - دمج فئات Tailwind

**الرسوم المتحركة:**
- **GSAP 3.14.2** - رسوم متحركة متقدمة
- **Motion 12.23.24** - رسوم متحركة React
- **tailwindcss-animate** - رسوم متحركة CSS

### 4. إدارة الأصول

**الصور:**
- **الموقع:** `public/` للأصول الثابتة
- **التحسين:** Next.js Image component مع تحسين تلقائي
- **المكون المخصص:** `components/figma/ImageWithFallback.tsx`

```typescript
// نمط استخدام الصور
import Image from 'next/image'
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'

// للصور المحسنة
<Image src="/image.jpg" alt="وصف" width={400} height={300} />

// للصور مع fallback
<ImageWithFallback src="/image.jpg" fallback="/placeholder.jpg" alt="وصف" />
```

### 5. نظام الأيقونات

**المكتبة الأساسية:** `lucide-react`
**المكتبات الإضافية:** `@mui/icons-material`

```typescript
import { Search, Menu, X } from 'lucide-react'
import SearchIcon from '@mui/icons-material/Search'

// الاستخدام المفضل
<Search className="h-4 w-4" />
```

**قواعد الأيقونات:**
- استخدم `lucide-react` كمكتبة أساسية
- حافظ على أحجام متسقة (`h-4 w-4`, `h-5 w-5`, `h-6 w-6`)
- طبق ألوان من نظام التصميم

### 6. منهجية التصميم

**النهج:** Utility-first مع مكونات مركبة
**الاستجابة:** Mobile-first responsive design
**الوضع المظلم:** CSS variables مع `next-themes`

```css
/* نمط المكونات المخصصة */
@layer components {
  .hero-animation-root {
    min-height: 100vh;
    background: radial-gradient(ellipse at 50% 30%, rgba(20, 20, 25, 1) 0%, rgba(0, 0, 0, 1) 70%);
  }
  
  .unified-text-style {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    font-family: "Cairo", "Cairo Fallback", sans-serif;
    letter-spacing: 0.2em;
    line-height: 1.05;
  }
}
```

### 7. بنية المشروع

```
├── app/                    # Next.js App Router
│   ├── globals.css        # أنماط عامة ومتغيرات CSS
│   ├── layout.tsx         # تخطيط أساسي
│   └── page.tsx          # صفحة رئيسية
├── components/
│   ├── ui/               # مكونات shadcn/ui الأساسية
│   ├── figma/           # مكونات مخصصة لتكامل Figma
│   └── *.tsx            # مكونات التطبيق
├── lib/
│   └── utils.ts         # أدوات مساعدة (cn function)
└── hooks/               # React hooks مخصصة
```

## 🎨 قواعد تكامل Figma

### 1. تحويل التصاميم إلى كود

**الأولوية:**
1. **الدقة البصرية:** تطابق 1:1 مع تصميم Figma
2. **رموز النظام:** استخدم متغيرات المشروع بدلاً من قيم Tailwind الثابتة
3. **إعادة الاستخدام:** استخدم المكونات الموجودة بدلاً من إنشاء جديدة
4. **إمكانية الوصول:** حافظ على معايير WCAG

### 2. سير العمل المطلوب

```typescript
// 1. استخراج متغيرات التصميم
const variables = await get_variable_defs(nodeId, fileKey)

// 2. الحصول على سياق التصميم
const designContext = await get_design_context(nodeId, fileKey, {
  clientLanguages: "typescript,javascript",
  clientFrameworks: "react,nextjs,tailwindcss"
})

// 3. تحويل Tailwind إلى رموز المشروع
// بدلاً من: bg-blue-500
// استخدم: bg-primary أو bg-brand

// 4. ربط المكون بـ Code Connect
await add_code_connect_map(nodeId, fileKey, {
  source: "components/MyComponent.tsx",
  componentName: "MyComponent",
  label: "React"
})
```

### 3. معايير التحويل

**الألوان:**
```typescript
// ❌ تجنب القيم الثابتة
className="bg-blue-500 text-white"

// ✅ استخدم رموز النظام
className="bg-primary text-primary-foreground"
```

**المسافات:**
```typescript
// ❌ تجنب القيم المخصصة
className="p-[24px] m-[16px]"

// ✅ استخدم مقياس Tailwind
className="p-6 m-4"
```

**الخطوط:**
```typescript
// ✅ استخدم خط المشروع
className="font-sans" // Cairo font family
```

### 4. دعم اللغة العربية (RTL)

**الخط الأساسي:** Cairo
**التكوين:**
```css
font-family: {
  sans: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
}
```

**قواعد RTL:**
- استخدم `text-right` للنصوص العربية
- طبق `dir="rtl"` على العناصر المناسبة
- استخدم `space-x-reverse` للمسافات الأفقية

### 5. تحسين الأداء

**الصور:**
- استخدم Next.js Image component
- طبق lazy loading تلقائياً
- حسن أحجام الصور للشاشات المختلفة

**الرسوم المتحركة:**
- استخدم GSAP للرسوم المعقدة
- طبق `will-change` للعناصر المتحركة
- تجنب الرسوم المتحركة على `layout` properties

### 6. اختبار التكامل

**التحقق المطلوب:**
1. مقارنة بصرية مع screenshot Figma
2. اختبار الاستجابة عبر الأجهزة
3. اختبار إمكانية الوصول
4. اختبار الأداء (Core Web Vitals)

## 🔧 أدوات التطوير

**البناء:** `npm run build`
**التطوير:** `npm run dev`
**Linting:** `npm run lint`

**أدوات Figma MCP:**
- `get_design_context` - تحويل التصاميم لكود
- `get_screenshot` - التقاط صور للمقارنة
- `get_variable_defs` - استخراج متغيرات التصميم
- `add_code_connect_map` - ربط الكود بالتصميم

## 📋 قائمة التحقق للتكامل

- [ ] استخدام رموز النظام بدلاً من قيم Tailwind الثابتة
- [ ] تطبيق مكونات shadcn/ui الموجودة
- [ ] دعم الوضع المظلم والفاتح
- [ ] دعم اللغة العربية (RTL)
- [ ] تحسين الصور والأصول
- [ ] اختبار إمكانية الوصول
- [ ] ربط Code Connect
- [ ] مقارنة بصرية مع Figma
- [ ] اختبار الأداء