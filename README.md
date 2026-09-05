# 1Fi SDE Intern Assignment - 1Fi Marketplace & Smart POS Financing

A production-grade, mobile-first fintech application built for **1Fi**, featuring the **1Fi Marketplace** inside the existing **Shop** experience with 0% No-Cost EMI financing backed by mutual fund portfolios.

---

## 📱 Live Demo & Feature Overview

### 1. Shop Page Navigation Architecture
- **A. Top Brands**: Clean teaser section with enterprise partner roadmap (as per assignment spec: *no implementation required*).
- **B. Nearby Stores**: Clean teaser section with offline QR scan-to-EMI retail roadmap (as per assignment spec: *no implementation required*).
- **C. 1Fi Marketplace**: **Fully designed, interactive, and implemented**.

---

### 2. Core 1Fi Marketplace Features
- **Dynamic Product Browsing & Filtering**:
  - Asynchronous mock API service layer (`apiService.ts`) with realistic network latency simulation.
  - Multi-faceted filter drawer (Brand, Max Price slider, Min Rating, 0% No-Cost EMI toggle, and Sort by Lowest Monthly EMI / Price / Rating).
  - Live keyword search with instant auto-filtering.
  - Promotional hero banner carousel with auto-play and deep navigation.
  - Category pill selector with live item counts (Smartphones, Laptops, Audio, Smartwatches, Tablets).

- **Rich Product Card & Highlights**:
  - High-resolution product images on soft pearl backgrounds.
  - MRP, discounted selling price, and discount percentage tags.
  - Starting EMI indicator (e.g. `From ₹2,499/mo with 0% EMI`).
  - Interactive wishlist heart toggle with instant toast alerts.

- **Product Detail View & Variant Selector**:
  - Multi-angle image gallery with interactive thumbnail switching.
  - **Dynamic Variant Picker**: Real-time configuration for storage (128GB, 256GB, 512GB, 1TB) and colors (Titanium, Desert, Silver, Space Black) with live price recalculation.
  - Collapsible accordion for detailed technical specs and warranty information.
  - Verified Seller rating badges.

- **Interactive 1Fi Smart EMI Engine**:
  - Tenure options: **3, 6, 9, 12, 18, and 24 months**.
  - No-Cost 0% Interest badge, breakdown of principal vs. interest saved, ₹0 processing fee, and first auto-debit billing dates.
  - **1Fi Wealth Advantage**: Highlights how user mutual fund units continue compounding returns while financing purchases.
  - Dynamic sticky CTA: `"Proceed @ ₹[Monthly]/mo"`.

- **Instant Digital Loan & Checkout Flow**:
  - **Step 1**: Delivery address & contact verification.
  - **Step 2**: 1Fi Digital Loan Agreement, portfolio pre-approved collateral check (e.g. ₹4.85L folio value), ₹0 down payment, and e-NACH auto-debit summary.
  - **Step 3**: Instant digital loan sanction with celebratory confetti animation, Loan Agreement ID, and delivery tracking.

- **Device Mode Switcher**:
  - Toggle between **Mobile Mockup Frame** (smartphone bezel with status bar and dynamic island) and **Full Desktop Mode** with one click.

- **Additional 1Fi Ecosystem Views**:
  - **Home**: Total portfolio value and active credit limit.
  - **Portfolio**: CAMS/KFintech synced equity holdings and pledged unit status.
  - **Loans**: Active 1Fi EMI repayments and monthly schedules.
  - **Profile**: KYC verification, CIBIL score (785), and linked bank accounts.

---

## 🎨 Design System & Theme

- **Palette**: Signature 1Fi **Pinkish-White Pearl Aesthetic** (`#FFEBF2` background, pure white `#FFFFFF` cards, soft `#FFD1DE` borders, and vibrant `#DB2777` / `#E11D48` rose-pink accents).
- **Typography**: *Plus Jakarta Sans* for clean, modern fintech readability.
- **Micro-interactions**: Smooth sheet animations, Skeleton loaders for loading states, and celebratory confetti.

---

## 📁 Project Architecture & Folder Structure

```
1fi_assigmnet/
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules (protects .env and node_modules)
├── index.html                # Main entry HTML
├── package.json              # Project dependencies and scripts
├── tailwind.config.js        # Custom 1Fi fintech color palette
├── tsconfig.json             # TypeScript compiler configuration
├── vite.config.ts            # Vite bundler settings
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Root app layout & modal providers
│   ├── index.css             # Tailwind base styles and custom scrollbars
│   ├── types/
│   │   ├── product.ts        # Product, Variant, Review, and Category interfaces
│   │   ├── emi.ts            # EMI plan, breakdown, and profile types
│   │   ├── order.ts          # Order, ShippingAddress, and checkout types
│   │   └── navigation.ts     # Tab navigation and filter state interfaces
│   ├── services/
│   │   └── apiService.ts     # Dynamic mock API with latency & localStorage persistence
│   ├── context/
│   │   ├── ShopContext.tsx   # Global state for products, filters, cart & modals
│   │   └── ToastContext.tsx  # Toast notification provider
│   ├── utils/
│   │   ├── emiCalculator.ts  # PMT financial calculation engine & fee math
│   │   ├── formatters.ts     # INR currency formatter (₹), date helpers
│   │   └── cn.ts             # Tailwind class merging utility
│   ├── data/
│   │   ├── mockProducts.ts   # Product catalog (Apple, Samsung, Sony, Dell, etc.)
│   │   ├── mockCategories.ts # Categories with icons and counts
│   │   └── mockBanners.ts    # Promotional hero campaign banners
│   └── components/
│       ├── common/
│       │   ├── Header.tsx        # Top app bar with 1Fi logo, credit limit & mode toggle
│       │   ├── BottomNav.tsx     # Mobile bottom navigation bar
│       │   ├── ShopTabs.tsx      # Top Brands | Nearby Stores | 1Fi Marketplace
│       │   ├── Badge.tsx         # Reusable fintech badge
│       │   ├── Skeleton.tsx      # Polished loading state skeletons
│       │   └── DeviceFrame.tsx   # Mobile phone simulator / full width wrapper
│       ├── shop/
│       │   ├── MarketplaceView.tsx   # 1Fi Marketplace main feed & search
│       │   ├── ProductCard.tsx       # Product grid card with EMI tags
│       │   ├── BannerCarousel.tsx    # Promotional hero carousel
│       │   ├── CategoryPills.tsx     # Horizontal category selector
│       │   ├── FilterModal.tsx       # Bottom drawer filter & sort sheet
│       │   ├── TopBrandsPlaceholder.tsx # Top Brands tab
│       │   └── NearbyStoresPlaceholder.tsx # Nearby Stores tab
│       ├── product/
│       │   ├── ProductDetailModal.tsx # Full product page drawer
│       │   ├── VariantSelector.tsx    # Storage & color configuration picker
│       │   ├── EMICalculator.tsx      # Interactive EMI tenure selector & breakdown
│       │   └── SpecsAccordion.tsx     # Technical specs & warranty accordion
│       ├── checkout/
│       │   └── CheckoutModal.tsx      # 3-step instant loan approval checkout
│       └── views/
│           ├── HomeView.tsx           # Portfolio balance & credit limit
│           ├── PortfolioView.tsx      # Mutual fund holdings & lien manager
│           ├── LoansView.tsx          # Active EMI loans & auto-debit schedule
│           └── ProfileView.tsx        # KYC status & linked bank accounts
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### 2. Installation
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🛠 Evaluation Criteria Checklist

- [x] **Product Understanding**: Clean integration into 1Fi's loan against mutual fund fintech ecosystem.
- [x] **UI/UX Consistency**: Refined typography, authentic mobile app layout, and smooth interactions.
- [x] **Engineering Quality**: Clean modular architecture, TypeScript type safety, and reusable components.
- [x] **Functionality**: Complete browsing, searching, filtering, variant selecting, EMI configuring, and checkout flow.
- [x] **Data & API Handling**: Dynamic mock API service layer without hardcoding directly in UI components.
- [x] **Attention to Detail**: Loading skeletons, error handling, empty states, and responsive mobile/desktop views.
