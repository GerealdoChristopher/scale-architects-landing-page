<div align="center">

<img src="https://raw.githubusercontent.com/GerealdoChristopher/scale-architects-landing-page/main/images/hero-portrait.png" alt="Scale Architects" width="120" style="border-radius: 50%; border: 3px solid #D4A853;">

# Scale Architects

### Landing Page & Portfolio

*A high-conversion, expert-level landing page for a business growth consulting firm helping mid-sized companies achieve predictable, scalable growth.*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://makeapullrequest.com)

</div>

<br>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Quick Start](#-quick-start)
- [Deploy to GitHub Pages](#-deploy-to-github-pages)
- [Image Assets](#-image-assets)
- [Design System](#-design-system)
- [Customization Guide](#-customization-guide)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

**Scale Architects** is a premium, expert-level landing page designed for an independent business growth consultant. It combines lead generation, portfolio showcase, and trust-building into a single, high-performance page with modern 3D animations and particle effects.

### What This Page Does:

| Goal | Implementation |
|:---|:---|
| 🎣 **Lead Generation** | Strategic CTAs throughout, risk-reversal guarantee, "Free Growth Diagnostic" funnel |
| 🏆 **Portfolio Showcase** | 3 detailed case studies with real metrics — logistics, SaaS, F&B |
| 🤝 **Trust Building** | Testimonials with star animations, authority stats, animated counters, no-questions-asked guarantee |
| 📱 **Every Device** | Fully responsive — mobile, tablet, desktop — with swipe-enabled carousel |
| ✨ **Expert Animations** | 3D tilt, scroll reveal, particle canvas, parallax, shimmer buttons, floating badges |

---

## 🌐 Live Demo

<p align="center">
  <a href="https://GerealdoChristopher.github.io/scale-architects-landing-page/">
    <img src="https://img.shields.io/badge/🚀_View_Live_Demo-0A2647?style=for-the-badge&logo=github&logoColor=white" alt="View Live Demo">
  </a>
</p>


## ✨ Key Features

<div align="center">

| | | |
|:---:|:---:|:---:|
| 🎨 **Design Tokens** | 📐 **SMACSS Architecture** | 🧩 **Modular JavaScript** |
| 200+ CSS custom properties | Base → Layouts → Components | ES modules, zero dependencies |
| | | |
| ♿ **Accessible** | ⚡ **Performance First** | 📱 **Fully Responsive** |
| ARIA labels, focus rings, keyboard nav | Semantic HTML, lazy loading, optimized | Mobile-first with 3 breakpoints |
| | | |
| 🔍 **SEO Optimized** | 🎬 **3D Animations** | 📊 **Conversion Focused** |
| Open Graph, Twitter Cards, meta tags | Tilt.js-style effects, parallax, particles | Strategic CTA placement, urgency cues |

</div>

---

## 🛠️ Tech Stack

| Technology | Usage | Why |
|:---|:---|:---|
| **HTML5** | Semantic structure | Accessibility, SEO, clean markup |
| **CSS3** | Visual styling & animations | Custom properties, SMACSS, fluid typography, keyframes |
| **Vanilla JavaScript** | Interactivity & effects | Zero dependencies, ES modules, particle system, tilt |
| **Google Fonts** | Typography | Inter — clean, modern, highly readable |
| **GitHub Pages** | Hosting | Free, fast, SSL included |

> **Zero build tools. Zero frameworks. Zero npm install.** Open via a local server and it works.

---

## 📁 Project Architecture
scale-architects-landing-page/
│
├── index.html # Main entry — all 9 sections with animations
│
├── css/
│ ├── base/ # Foundation layer
│ │ ├── _reset.css # Modern CSS reset + perspective
│ │ ├── _variables.css # 200+ design tokens + gradients
│ │ └── _typography.css # Full typography system + utilities
│ │
│ ├── layouts/ # Layout utilities
│ │ └── _grid.css # Grid, container, spacing, reveal animations
│ │
│ ├── components/ # One file per section (expert level)
│ │ ├── _header.css # Sticky nav, progress bar, mobile overlay
│ │ ├── _buttons.css # Button system — shimmer, glow, ripple
│ │ ├── _hero.css # 3D image, glow orbs, dot grid, scroll indicator
│ │ ├── _trust-bar.css # Marquee scroll, stats, counter animation
│ │ ├── _problem.css # Hover cards, shake icons, 3D image, badge
│ │ ├── _case-studies.css # 3D hover, gradient numbers, quote block
│ │ ├── _testimonials.css # 3D tilt cards, star pop, carousel dots
│ │ ├── _authority.css # 3D image, floating badge, animated stats
│ │ ├── _offer.css # Animated card, gradient price, guarantee
│ │ ├── _cta.css # Particles, grid pattern, 3D image, glow
│ │ └── _footer.css # Grid pattern, social, newsletter, scroll-top
│ │
│ └── style.css # Single entry — imports all above
│
├── js/
│ ├── modules/
│ │ ├── navigation.js # Progress bar, hide-on-scroll, swipe, overlay
│ │ ├── smoothScroll.js # Scroll-to-top, hash scroll, highlight flash
│ │ └── testimonialCarousel.js # Swipe, autoplay, tablet support, observer
│ │
│ └── script.js # Entry — reveal, parallax, counter, tilt, particles
│
├── images/ # 7 optimized .png images
│ ├── hero-portrait.png
│ ├── problem-silhouette.png
│ ├── casestudy-logistics.png
│ ├── casestudy-collaboration.png
│ ├── casestudy-victory.png
│ ├── authority-speaking.png
│ └── cta-candid.png
│
├── .gitignore
├── LICENSE
└── README.md

### Architecture Principles:

| Principle | Implementation |
|:---|:---|
| **Separation of Concerns** | CSS: Base → Layout → Component. JS: Module per feature. |
| **Single Source of Truth** | All colors, spacing, fonts in `_variables.css`. Change once, updates everywhere. |
| **Isolated Components** | Edit `_hero.css` without touching `_footer.css`. No cascade surprises. |
| **Zero Dead Code** | Every file has a purpose. Every line is used. |

---

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (Laragon, Live Server, XAMPP, or Python)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/GerealdoChristopher/scale-architects-landing-page.git

# Navigate to the project
cd scale-architects-landing-page

# Start a local server (choose one):

# Option 1: Python
python -m http.server 8000

# Option 2: Node.js (npx)
npx serve

# Option 3: VS Code Live Server extension
# Right-click index.html → Open with Live Server