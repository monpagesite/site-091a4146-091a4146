# சிமலா குள்ரிங்ஸ் (Simala Coolings)

A vibrant, modern beverage delivery website for Tamil Nadu. Built with bold electric colors, Tamil typography, and scroll-triggered animations for a premium street-market energy feel.

## 🎨 Design Features

- **Bold Vibrant Aesthetic**: Electric orange (#FF6B35), cyan (#00D9FF), and neon green (#39FF14) accents on dark backgrounds
- **Tamil-First Typography**: Black Han Sans for headings, Hind Madurai for body text
- **Bento Grid Layout**: Asymmetric product cards with varied sizes
- **Scroll Animations**: Staggered fade-up reveals powered by IntersectionObserver
- **Mobile Optimized**: Responsive design with touch-friendly interactions

## 🚀 Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Black Han Sans, Hind Madurai)
- **Animation**: CSS animations + IntersectionObserver API

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Sticky navigation with mobile menu
│   ├── HeroSection.tsx      # Hero with 3D bottle arrangement
│   ├── ProductGrid.tsx      # Filterable product catalog
│   ├── WhyUs.tsx           # Feature grid (6 benefits)
│   ├── HowItWorks.tsx      # 3-step ordering process
│   ├── DeliveryZones.tsx   # Service area map
│   └── Footer.tsx          # Contact info & links
├── lib/
│   └── siteContent.ts      # All copy, data, and content
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles & theme tokens
```

## 🎯 Key Sections

1. **Header**: Sticky navigation with WhatsApp CTA
2. **Hero**: Bold headline with 3D product showcase
3. **Products**: Filterable grid with category tabs
4. **Why Us**: 6 feature cards highlighting USPs
5. **How It Works**: 3-step ordering flow
6. **Delivery Zones**: Coverage area with delivery times
7. **Footer**: Contact, links, social media

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#FF6B35` | Brand color, bottles, energy |
| Secondary | `#00D9FF` | Ice, coolness, hover states |
| Accent | `#39FF14` | CTAs, "Order" buttons |
| Background | `#0A0A0A` | Page background |
| Surface | `#1A1A1A` | Card backgrounds |
| Border | `#2A2A2A` | Dividers, card borders |
| Text | `#F5F5F5` | Primary text |
| Text Muted | `#888888` | Secondary text |

## 📱 WhatsApp Integration

All "Order" and "Message" buttons open WhatsApp with pre-filled messages in Tamil. Update the phone number in `src/lib/siteContent.ts`:

```typescript
contact: {
  whatsapp: "919876543210", // Your WhatsApp number
  // ...
}
```

## 🖼️ Images

Product images use Unsplash placeholders. Replace with real product photos by updating the `image` URLs in `src/lib/siteContent.ts`.

## ✨ Animation System

Scroll-triggered animations use IntersectionObserver:
- Elements with `data-reveal` fade up when scrolled into view
- Stagger delays create a cascading effect
- No animation libraries needed - pure CSS + JS

## 🌐 Deployment

Ready to deploy to Vercel, Netlify, or any static host:

```bash
npm run build
# Upload the dist/ folder
```

## 📝 Content Management

All site content lives in `src/lib/siteContent.ts`. Update:
- Product catalog
- Delivery zones
- Contact information
- Feature highlights
- Copy and translations

## 🔧 Customization

### Change Colors

Edit `tailwind.config.js` and `src/index.css` (`:root` variables).

### Change Fonts

Update the Google Fonts import in `src/index.css` and font families in `tailwind.config.js`.

### Add Products

Add entries to `siteContent.products.items` in `src/lib/siteContent.ts`.

### Update Contact

Modify `siteContent.contact` with your business details.

## 🎯 Performance

- No external animation libraries
- Optimized images (Unsplash CDN)
- Tree-shaken Lucide icons
- CSS-only animations
- Lazy loading via IntersectionObserver

## 📄 License

MIT License - free to use for your beverage delivery business!

---

**Built with care for சிமலா குள்ரிங்ஸ்** 🍾
