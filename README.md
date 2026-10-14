# 🏛️ AspirantAtlas — The Zero-to-Rank Civil Services Engine

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.5-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-1.5%20Flash-orange.svg?logo=google)](https://ai.google.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Deployed on Cloudflare Pages](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-F38020.svg?logo=cloudflare)](https://aspirant-atlas.pages.dev)

> 🚀 **Live Production Deployment**: **[https://aspirant-atlas.pages.dev](https://aspirant-atlas.pages.dev)**

**AspirantAtlas (ఆస్పిరెంట్ అట్లాస్)** is a high-performance, mobile-first preparation platform designed for serious Civil Services aspirants targeting **UPSC CSE**, **APPSC Group 1**, and **TSPSC Group 1**. 

Engineered around the proven study patterns of All-India Rankers, AspirantAtlas bridges theoretical syllabus reading with active exam mechanics: instant speed elimination drills, AI-powered handwritten Mains evaluation, and disciplined study timekeeping.

---

## 🌟 Core Engine Features

### 1. 🧭 Guided Aspirant Onboarding & Smart Compass
- **60-Second Diagnostic Profiler**: Identifies Target Exam (`UPSC | APPSC | TSPSC`), Horizon (`30-Day Sprint | 90-Day Standard | 150-Day Foundation`), and Experience Level.
- **Dynamic Anchor Guidance**: Computes the high-yield next action and enforces anchor discipline (e.g., Constitutional Framework before advanced state electives).
- **Phase 1 Focus Mode**: 1-click filter collapses peripheral electives to prevent beginner cognitive overload.

### 2. ⚡ 210+ Prelims Question Vault & Elimination Drills
- **Micro-Topic Question Bank**: 210+ multi-statement elimination questions matching modern UPSC/State PSC negative marking patterns.
- **Bilingual Interface**: Full support for both **English** and **Telugu (తెలుగు)** with detailed conceptual explanations.
- **Custom Practice Drill Studio**: Assemble custom micro-tests filtered by subject (Polity, History, Economy, Environment, State Special), question count, and difficulty.
- **AIR Percentile Gaussian Curve**: Visualizes projected rank and cut-off buffers on an interactive normal distribution curve.

### 3. ✍️ Gemini AI Mains Evaluator & Handwritten OCR
- **Multimodal OCR**: Direct photo/scan upload of physical handwritten answer sheets (JPEG/PNG/WEBP).
- **Marginal Examiner Commentary**: Paragraph-by-paragraph rubric breakdown (Introduction, Body Dimensions, Counter-Arguments, Conclusion).
- **Actionable Tagging**: Highlights `[Strength]`, `[Data Enrichment]`, and `[Critical Gaps]`.
- **Topper Benchmark Model**: Compares student submissions directly against AIR ranker model structures.
- **Offline Fallback Engine**: Resilient heuristic evaluation when working offline or without an API key.

### 4. ⏰ Daily Check-in / Check-out Study Ledger
- **Live Study Clock**: One-click check-in with pulsating active session indicator in the header and mobile nav.
- **Continuous Attendance Ledger**: 28-day GitHub-style study heatmap, tracking active days, daily hours, and subject distribution.
- **User-Scoped Persistence**: Automatically isolates study logs and test histories by user account.

### 5. 👤 Multi-User Identity & Profile Drawer
- **1-Click Topper Demo Profiles**: Instant testing with pre-populated demo ranker accounts (`Sita Rama Raju`, `Priyanka Sharma`, `Vikram Rathore`).
- **Personal Email Sign-in**: Secure local session token management.
- **Zero Cloud Lock-in**: 1-click JSON backup export and restore to migrate study records across devices.

### 6. 📱 Mobile-First Ergonomic UX
- **Native Mobile Bottom Navigation**: Sticky bottom tabs (`Roadmap`, `Prelims`, `Mains`, `Study Log`, `More Menu`) with safe-area spacing.
- **Zero-Overflow Header**: Consolidated Quick Tools popover (`Habit Streaks`, `Language Switcher`, `Compass`, `Gemini Key`) and inline mobile exam selector.
- **Bottom-Sheet Modals**: Touch-first slide-up interaction on mobile screens.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 18, TypeScript, Vite |
| **Styling & Layout** | Tailwind CSS, Lucide React Icons |
| **Visualizations & Effects** | Custom SVG Gaussian Normal Distribution, Canvas Confetti |
| **AI Evaluation** | Google Gemini 1.5 Flash API (Multimodal Vision & Text) |
| **Storage & Sync** | LocalStorage Engine, Cloudflare R2 / S3 Object Storage API |
| **Hosting & CDN** | Cloudflare Pages / Static Hosting |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/BSCConsulting/AspirantAtlas.git
cd AspirantAtlas

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be live at `http://localhost:3000` (or `http://localhost:5173`).

### Production Build

```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔑 Environment Configuration

Copy `.env.example` to `.env` to configure optional remote cloud assets:

```bash
cp .env.example .env
```

| Variable | Description | Default |
|---|---|---|
| `VITE_R2_PUBLIC_URL` | Public CDN URL for PDF document downloads | `https://cdn.aspirantatlas.org` |
| `VITE_R2_BUCKET_NAME` | Cloudflare R2 Bucket Name | `aspirant-atlas-vault` |

*(Note: Gemini API Keys can be configured directly inside the UI via the **Quick Tools ➔ Gemini Key** dialog and are stored encrypted in the browser's local storage).*

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Developed with ❤️ for Civil Services Aspirants across India and Telugu states.
