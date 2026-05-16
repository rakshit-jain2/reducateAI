# EduVerse University - Modern Landing Page

A modern, responsive university landing page built with Next.js 15, TypeScript, and Tailwind CSS. Features a premium design with glassmorphism effects, smooth animations, and full mobile responsiveness.

## 🚀 Features

- **Modern Design**: Premium glassmorphism effects with gradient backgrounds
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations throughout the page
- **Fast Performance**: Optimized with Next.js 15 and image lazy loading
- **Accessibility**: Semantic HTML and keyboard-friendly navigation
- **SEO Optimized**: Meta tags and structured data

## 📋 Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **Inter Font** - Google Fonts for typography

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd eduverse-university
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Stats.tsx           # Key metrics display
│   ├── About.tsx           # About university section
│   ├── Programs.tsx        # Academic programs grid
│   ├── Features.tsx        # Why choose us features
│   ├── CampusLife.tsx      # Campus highlights
│   ├── Testimonials.tsx    # Student testimonials
│   ├── CTA.tsx             # Call to action section
│   └── Footer.tsx          # Footer with links
├── lib/
│   └── data.ts             # Content and configuration data
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs      # PostCSS configuration
└── package.json            # Project dependencies
```

## 🎨 Sections

### 1. Navbar
- Sticky navigation with backdrop blur effect
- Mobile hamburger menu with smooth animations
- Quick apply button

### 2. Hero Section
- Full-screen hero with animated background
- Animated statistics counters
- Dual CTA buttons
- Floating decorative elements

### 3. Stats Strip
- Key metrics: 20K+ Students, 500+ Faculty, etc.
- Animated number counters

### 4. About Section
- University mission and vision
- Highlighted features with icons
- Call-to-action button

### 5. Programs Section
- 6 academic programs in responsive grid
- Hover animations and gradient effects
- Program icons and descriptions

### 6. Why Choose Us
- 6 key features with icons
- Hover scale effects
- Accent borders on interaction

### 7. Campus Life
- Campus highlights showcase
- Image gallery section
- Emoji-based visual representation

### 8. Testimonials
- Student reviews with ratings
- Avatar and course information
- Statistical summary

### 9. Call to Action
- Prominent gradient banner
- Application and tour booking CTAs
- Application deadline display

### 10. Footer
- Brand information
- Quick links
- Contact information
- Social media links
- Scroll-to-top button

## 🎯 Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
- Primary: Indigo (#4F46E5)
- Secondary: Purple (#7C3AED)
- Accent: Cyan (#06B6D4)

### Content
Update content in `lib/data.ts`:
- Navigation links
- Programs information
- Features and highlights
- Testimonials
- Campus highlights

### Components
All components are in `components/` directory and can be customized:
- Modify styles in Tailwind classes
- Adjust animations in Framer Motion configs
- Update content and copy

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1024px

All components are optimized for each breakpoint.

## ⚡ Performance

- Image optimization with Next.js Image component
- Lazy loading for off-screen content
- Optimized animations with GPU acceleration
- Minimal JavaScript bundle size

## 🔧 Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# ESLint check
npm run lint
```


