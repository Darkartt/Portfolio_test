# 0xDarkArt Portfolio

Modern Next.js 15 portfolio website for blockchain security researcher 0xDarkArt.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **3D Graphics:** Three.js
- **Icons:** Lucide React

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
0xdarkart-portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── sections/            # Page sections
│   ├── ui/                  # shadcn/ui components
│   ├── common/              # Shared components
│   └── icons/               # Custom icons
├── lib/
│   ├── data/                # Content data
│   │   ├── projects.ts      # Project portfolio data
│   │   ├── services.ts      # Service offerings
│   │   └── skills.ts        # Technical skills
│   ├── types/               # TypeScript types
│   ├── constants.ts         # App constants
│   └── cn.ts                # Utility functions
├── public/
│   └── images/              # Static assets
├── styles/
│   └── animations.css       # Custom animations
└── tailwind.config.ts       # Tailwind configuration
```

## 🎨 Design System

### Colors

- **Primary:** Cyber Green (#00FF7F)
- **Secondary:** Cyber Blue (#00BFFF)
- **Background:** Dark Green/Black (#0A0F0A)
- **Surface:** Dark Surface (#0F1A0F)

### Typography

- **Font:** Roboto Mono (monospace)
- **Headings:** Bold, tight tracking
- **Body:** Regular, relaxed line height

### Animations

- Fade in/out
- Slide animations
- Glitch effects
- Terminal cursor
- Neon glow effects

## 🔧 Development

### Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

### Code Formatting

```bash
npm run format
```

### Linting

```bash
npm run lint
```

## 📝 Content Management

Content is managed through TypeScript files in `lib/data/`:

- **projects.ts** - Portfolio projects and audits
- **services.ts** - Service offerings
- **skills.ts** - Technical skills and expertise

## 🚀 Deployment

This site can be deployed on:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📄 License

Proprietary - All rights reserved

## 👤 Contact

- **Twitter:** [@0x_Darkart](https://x.com/0x_Darkart)
- **GitHub:** [darkartt](https://github.com/darkartt)
- **Telegram:** [@Darkartt](https://t.me/Darkartt)
- **Website:** [0xdarkart.xyz](https://0xdarkart.xyz)
