<div align="center">

<img src="https://raw.githubusercontent.com/your-username/scale-architects-landing-page/main/images/hero-portrait.webp" alt="Scale Architects" width="120" style="border-radius: 50%; border: 3px solid #D4A853;">

# Scale Architects

### Landing Page & Portfolio

*A high-conversion landing page for a business growth consulting firm helping mid-sized companies achieve predictable, scalable growth.*

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

**Scale Architects** is a premium landing page designed for an independent business growth consultant. It combines lead generation, portfolio showcase, and trust-building into a single, high-performance page.

### What This Page Does:

| Goal | Implementation |
|:---|:---|
| 🎣 **Lead Generation** | Strategic CTAs throughout, risk-reversal guarantee, "Free Growth Diagnostic" funnel |
| 🏆 **Portfolio Showcase** | 3 detailed case studies with real metrics — logistics, SaaS, F&B |
| 🤝 **Trust Building** | Video-ready testimonials, authority stats, "Featured In" logos, no-questions-asked guarantee |
| 📱 **Every Device** | Fully responsive — mobile, tablet, desktop — with mobile-specific carousel |

---

## 🌐 Live Demo

<p align="center">
  <a href="https:/GerealdoChristopher.github.io/scale-architects-landing-page/">
    <img src="https://img.shields.io/badge/🚀_View_Live_Demo-0A2647?style=for-the-badge&logo=github&logoColor=white" alt="View Live Demo">
  </a>
</p>
---

## ✨ Key Features

<div align="center">

| | | |
|:---:|:---:|:---:|
| 🎨 **Design Tokens** | 📐 **SMACSS Architecture** | 🧩 **Modular JavaScript** |
| 180+ CSS custom properties | Base → Layouts → Components | ES modules, zero dependencies |
| | | |
| ♿ **Accessible** | ⚡ **Performance First** | 📱 **Fully Responsive** |
| ARIA labels, focus rings | Semantic HTML, lazy loading | Mobile-first with breakpoints |
| | | |
| 🔍 **SEO Optimized** | 🎭 **Dark Mode Ready** | 📊 **Conversion Focused** |
| Open Graph, meta tags | Variables ready for `[data-theme]` | Strategic CTA placement |

</div>

---

## 🛠️ Tech Stack

| Technology | Usage | Why |
|:---|:---|:---|
| **HTML5** | Semantic structure | Accessibility, SEO, clean markup |
| **CSS3** | Visual styling | Custom properties, SMACSS, fluid typography |
| **Vanilla JavaScript** | Interactivity | Zero dependencies, ES modules, fast load |
| **Google Fonts** | Typography | Inter — clean, modern, highly readable |
| **GitHub Pages** | Hosting | Free, fast, SSL included |

> **Zero build tools. Zero frameworks. Zero npm install.** Open `index.html` and it works.

---

## 📁 Project Architecture
scale-architects-landing-page/
│
├── index.html # Main entry — all 9 sections
│
├── css/
│ ├── base/ # Foundation layer
│ │ ├── _reset.css # Modern CSS reset
│ │ ├── _variables.css # 180+ design tokens
│ │ └── _typography.css # Full typography system
│ │
│ ├── layouts/ # Layout utilities
│ │ └── _grid.css # Grid, container, spacing
│ │
│ ├── components/ # One file per section
│ │ ├── _header.css # Sticky nav + mobile menu
│ │ ├── _buttons.css # Button system (4 variants)
│ │ ├── _hero.css # Hero with image accent
│ │ ├── _trust-bar.css # Social proof bar
│ │ ├── _problem.css # Pain point identification
│ │ ├── _case-studies.css # 3 case studies, zigzag layout
│ │ ├── _testimonials.css # 3-column card grid + carousel
│ │ ├── _authority.css # Personal brand & stats
│ │ ├── _offer.css # Pricing card with guarantee
│ │ ├── _cta.css # Dark background final CTA
│ │ └── _footer.css # 4-column footer
│ │
│ └── style.css # Single entry — imports all above
│
├── js/
│ ├── modules/
│ │ ├── navigation.js # Sticky header + mobile toggle
│ │ ├── smoothScroll.js # Smooth scroll + active nav highlight
│ │ └── testimonialCarousel.js # Mobile carousel with dots + autoplay
│ │
│ └── script.js # Entry point — inits all modules
│
├── images/ # 7 optimized .webp images
│ ├── hero-portrait.webp
│ ├── problem-silhouette.webp
│ ├── casestudy-logistics.webp
│ ├── casestudy-collaboration.webp
│ ├── casestudy-victory.webp
│ ├── authority-speaking.webp
│ └── cta-candid.webp
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
- Git (optional — for cloning)

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/scale-architects-landing-page.git

# Navigate to the project
cd scale-architects-landing-page

# Open in browser
open index.html