# 1Fi SDE Intern Assignment - 1Fi Marketplace Feature

A high-performance, mobile-first fintech marketplace application built for **1Fi**, designed to deliver an instant Point-of-Sale (POS) financing and 0% No-Cost EMI shopping experience backed by users' mutual fund portfolios.

---

## 🌟 Assignment Highlights & Feature Implementation

### 1. Shop Page Top Navigation
- **A. Top Brands**: Clean teaser section with enterprise brand partner roadmap.
- **B. Nearby Stores**: Clean teaser section with QR scan-to-EMI offline retail roadmap.
- **C. 1Fi Marketplace**: **Fully designed, interactive, and implemented**.

---

### 2. 1Fi Marketplace Features
- **Product Catalog & Dynamic Mock API**:
  - Asynchronous repository pattern with realistic network latency and zero hardcoded UI dependencies.
  - Multi-faceted filtering: Brand (Apple, Samsung, Sony, OnePlus, Dell), Max Price slider, Min Rating, Sort by (Lowest EMI, Price, Rating, Popularity), and 0% No-Cost EMI only toggle.
  - Live keyword search with instant filtering and clear action.
  - Hero promotional banner carousel with auto-play and category quick-launch.
  - Category pill selector with live counts.
- **Product Card & Listing**:
  - High-res product imagery and brand badges.
  - Dynamic price, discount percentage, and starting monthly EMI pill (`From ₹X/mo at 0% EMI`).
  - Interactive wishlist heart toggle with instant toast alerts.
- **Product Details & Variant Selector**:
  - Image gallery with interactive thumbnail switcher.
  - Real-time **Variant Picker** (Storage, Color, RAM configurations) with dynamic price recalculation.
  - Technical Specifications & Warranty accordion.
  - Verified Seller rating badge.
- **Interactive EMI Plan Calculator**:
  - Tenure selector for **3, 6, 9, 12, 18, and 24 months**.
  - Dynamic calculation of monthly payment, zero-cost interest subsidy, processing fee (₹0 for 1Fi users), and first auto-debit billing date.
  - Mutual fund collateral backing indicator (**1Fi Wealth Advantage**: investments keep compounding while shopping).
  - Dynamic sticky bottom CTA: `"Proceed @ ₹X/mo"`.
- **Instant Digital Loan & Checkout Flow**:
  - **Step 1: Delivery Address & Contact Info**.
  - **Step 2: 1Fi Digital Loan Sanction & Collateral Lien**: Pre-approved credit check against ₹4,85,000 portfolio value, ₹0 upfront down payment, and e-NACH auto-debit mandate.
  - **Step 3: Instant Digital Sanction & Confetti Celebration**: Displays Loan Agreement ID, digital lien reference number, and delivery tracking.
- **Additional App Views**:
  - **Home**: Total mutual fund balance and available 1Fi credit limit.
  - **Portfolio**: CAMS/KFintech synced equity holdings and pledged units.
  - **Loans**: Active 1Fi EMI repayments and monthly schedules.
  - **Profile**: KYC verification, CIBIL score, and linked bank account.
- **Device Viewport Toggle**:
  - Seamlessly switch between **Mobile App Frame Mode** (with iPhone mockup bezel, dynamic island, and status bar) and **Full Desktop Mode**.

---

## 🛠 Tech Stack

- **Framework**: React 18 (TypeScript)
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS (Custom 1Fi dark fintech palette)
- **Icons**: Lucide React
- **Celebration Animations**: Canvas Confetti
- **State Management**: React Context API (`ShopContext`, `ToastContext`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Installation
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```
