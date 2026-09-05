import { Product } from '../types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-iphone-16-pro',
    title: 'Apple iPhone 16 Pro',
    brand: 'Apple',
    category: 'smartphones',
    subCategory: 'Flagship Smartphone',
    description: 'iPhone 16 Pro features a Grade 5 titanium design with a new refined texture. Powered by the groundbreaking A18 Pro chip, Camera Control for rapid capture, and significantly boosted battery life.',
    tagline: 'Built for Apple Intelligence. Titanium powerhouse.',
    badge: 'Top Seller',
    rating: 4.8,
    ratingCount: 1420,
    thumbnail: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80'
    ],
    basePrice: 119900,
    baseMrp: 129900,
    minTenureMonths: 3,
    zeroCostAvailable: true,
    featured: true,
    trending: true,
    warranty: '1 Year Apple India Warranty + Free 1Fi Accidental Cover',
    deliveryDays: 2,
    seller: {
      name: 'Imagine Apple Premium Reseller',
      rating: 4.9,
      badge: '1Fi Verified Merchant'
    },
    highlights: [
      { label: 'Display', value: '6.3" Super Retina XDR with ProMotion 120Hz' },
      { label: 'Processor', value: 'Apple A18 Pro 3nm Chip' },
      { label: 'Camera', value: '48MP Fusion + 48MP Ultra-Wide + 12MP 5x Telephoto' },
      { label: 'Battery', value: 'Up to 27 hours video playback' },
      { label: 'Build', value: 'Grade 5 Titanium with Ceramic Shield' }
    ],
    specifications: {
      'General': {
        'Model Name': 'iPhone 16 Pro',
        'Color Options': 'Desert Titanium, Natural Titanium, White, Black',
        'OS': 'iOS 18',
        'SIM Type': 'Dual SIM (nano-SIM and eSIM)'
      },
      'Performance': {
        'Chipset': 'A18 Pro chip with 6-core GPU',
        'Neural Engine': '16-core Neural Engine',
        'Storage Options': '128 GB, 256 GB, 512 GB, 1 TB'
      },
      'Display': {
        'Screen Size': '6.3 inches OLED',
        'Resolution': '2622 x 1206 pixels at 460 ppi',
        'Brightness': '2000 nits peak outdoor brightness'
      },
      'Financing': {
        '1Fi 0% EMI': 'Available for 3, 6, 9, 12 Months',
        'Down Payment': '₹0 required with Portfolio Lien',
        'Processing Fee': '₹0 (Waived)'
      }
    },
    variants: [
      {
        id: 'var-ip16p-128-desert',
        name: '128 GB - Desert Titanium',
        storage: '128 GB',
        color: { name: 'Desert Titanium', hex: '#d4af88' },
        price: 119900,
        mrp: 129900,
        inStock: true,
        sku: 'IP16P-128-DT',
        images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'var-ip16p-256-desert',
        name: '256 GB - Desert Titanium',
        storage: '256 GB',
        color: { name: 'Desert Titanium', hex: '#d4af88' },
        price: 129900,
        mrp: 139900,
        inStock: true,
        sku: 'IP16P-256-DT',
        images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'var-ip16p-256-natural',
        name: '256 GB - Natural Titanium',
        storage: '256 GB',
        color: { name: 'Natural Titanium', hex: '#9e9b94' },
        price: 129900,
        mrp: 139900,
        inStock: true,
        sku: 'IP16P-256-NT',
        images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'var-ip16p-512-black',
        name: '512 GB - Black Titanium',
        storage: '512 GB',
        color: { name: 'Black Titanium', hex: '#232324' },
        price: 149900,
        mrp: 159900,
        inStock: true,
        sku: 'IP16P-512-BT',
        images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-samsung-s24-ultra',
    title: 'Samsung Galaxy S24 Ultra 5G',
    brand: 'Samsung',
    category: 'smartphones',
    subCategory: 'Flagship Smartphone',
    description: 'Galaxy AI is here. Epic titanium shield with built-in S Pen, 200MP Quad Tele camera, Snapdragon 8 Gen 3 for Galaxy, and flat 6.8" dynamic AMOLED 2X display with anti-reflective glass.',
    tagline: 'Galaxy AI is here. Epic titanium build with 200MP camera.',
    badge: 'Exclusive 1Fi',
    rating: 4.7,
    ratingCount: 980,
    thumbnail: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
    ],
    basePrice: 121999,
    baseMrp: 134999,
    minTenureMonths: 3,
    zeroCostAvailable: true,
    featured: true,
    trending: true,
    warranty: '1 Year Samsung India Brand Warranty',
    deliveryDays: 1,
    seller: {
      name: 'Samsung Official Direct Store',
      rating: 4.8,
      badge: 'Brand Authorised'
    },
    highlights: [
      { label: 'Display', value: '6.8" QHD+ Dynamic AMOLED 2X 120Hz' },
      { label: 'Camera', value: '200MP + 50MP 5x + 10MP 3x + 12MP Ultra-wide' },
      { label: 'Processor', value: 'Snapdragon 8 Gen 3 Mobile Platform' },
      { label: 'Stylus', value: 'Integrated S-Pen' }
    ],
    specifications: {
      'General': {
        'Model Name': 'Galaxy S24 Ultra',
        'Color': 'Titanium Gray, Titanium Black, Titanium Violet',
        'OS': 'One UI 6.1 (Android 14)'
      },
      'Performance': {
        'Processor': 'Snapdragon 8 Gen 3 (4nm)',
        'RAM': '12 GB LPDDR5X',
        'Battery': '5000 mAh with 45W fast charge'
      }
    },
    variants: [
      {
        id: 'var-s24u-256-gray',
        name: '12GB RAM / 256GB - Titanium Gray',
        storage: '256 GB',
        ram: '12 GB',
        color: { name: 'Titanium Gray', hex: '#686a6c' },
        price: 121999,
        mrp: 134999,
        inStock: true,
        sku: 'S24U-256-TG',
        images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'var-s24u-512-black',
        name: '12GB RAM / 512GB - Titanium Black',
        storage: '512 GB',
        ram: '12 GB',
        color: { name: 'Titanium Black', hex: '#212121' },
        price: 139999,
        mrp: 149999,
        inStock: true,
        sku: 'S24U-512-TB',
        images: ['https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-macbook-pro-m3',
    title: 'Apple MacBook Pro 14" (M3 Pro)',
    brand: 'Apple',
    category: 'laptops',
    subCategory: 'Pro Laptops',
    description: 'The 14-inch MacBook Pro blasts forward with M3 Pro, an extremely advanced chip that brings serious performance for demanding workflows. Liquid Retina XDR display with 1000 nits sustained.',
    tagline: 'Mind-blowing. Head-turning. Extreme M3 Pro speed.',
    badge: 'Zero Cost EMI',
    rating: 4.9,
    ratingCount: 650,
    thumbnail: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
    ],
    basePrice: 189900,
    baseMrp: 199900,
    minTenureMonths: 6,
    zeroCostAvailable: true,
    featured: true,
    trending: true,
    warranty: '1 Year Apple India Official Warranty',
    deliveryDays: 2,
    seller: {
      name: 'Unicorn Apple Stores',
      rating: 4.9,
      badge: 'Authorized Apple Enterprise'
    },
    highlights: [
      { label: 'Processor', value: 'Apple M3 Pro (11-core CPU, 14-core GPU)' },
      { label: 'Memory', value: '18GB Unified Memory' },
      { label: 'Display', value: '14.2" Liquid Retina XDR 120Hz ProMotion' },
      { label: 'Battery', value: 'Up to 18 hours wireless web' }
    ],
    specifications: {
      'Hardware': {
        'Processor': 'Apple M3 Pro Chip',
        'RAM': '18 GB Unified Memory',
        'Storage': '512 GB SSD'
      },
      'Display': {
        'Resolution': '3024 x 1964 native resolution at 254 ppi',
        'Peak Brightness': '1600 nits peak (HDR)'
      }
    },
    variants: [
      {
        id: 'var-mbp-18-512-spaceblack',
        name: '18GB / 512GB SSD - Space Black',
        storage: '512 GB',
        ram: '18 GB',
        color: { name: 'Space Black', hex: '#1c1d1f' },
        price: 189900,
        mrp: 199900,
        inStock: true,
        sku: 'MBP14-M3P-512-SB',
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'var-mbp-36-1tb-silver',
        name: '36GB / 1TB SSD - Silver',
        storage: '1 TB',
        ram: '36 GB',
        color: { name: 'Silver', hex: '#e3e4e6' },
        price: 239900,
        mrp: 249900,
        inStock: true,
        sku: 'MBP14-M3P-1TB-SL',
        images: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-sony-wh1000xm5',
    title: 'Sony WH-1000XM5 Wireless Headphones',
    brand: 'Sony',
    category: 'audio',
    subCategory: 'Over-Ear Headphones',
    description: 'Industry Leading Active Noise Cancelling with Auto NC Optimizer, 8 microphones, integrated V1 & QN1 processors, 30 hours battery life, and crystal-clear hands-free calling.',
    tagline: 'Silence the world. Experience pure acoustic mastery.',
    badge: 'Top Seller',
    rating: 4.8,
    ratingCount: 2150,
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80'
    ],
    basePrice: 28990,
    baseMrp: 34990,
    minTenureMonths: 3,
    zeroCostAvailable: true,
    featured: true,
    trending: false,
    warranty: '1 Year Sony India Manufacturer Warranty',
    deliveryDays: 1,
    seller: {
      name: 'Sony Center Official',
      rating: 4.9,
      badge: 'Sony Verified'
    },
    highlights: [
      { label: 'ANC', value: 'Dual Processor V1 + HD QN1' },
      { label: 'Battery', value: '30 Hours with Quick Charge (3 min = 3 hrs)' },
      { label: 'Codec', value: 'LDAC, AAC, SBC with Hi-Res Audio Wireless' },
      { label: 'Fit', value: 'Ultra-light soft fit leather' }
    ],
    specifications: {
      'Audio': {
        'Driver Unit': '30mm specially designed carbon fiber',
        'Frequency Response': '4 Hz - 40,000 Hz'
      },
      'Connectivity': {
        'Bluetooth': 'Version 5.2 with Multipoint connection',
        'Charging Port': 'USB Type-C'
      }
    },
    variants: [
      {
        id: 'var-xm5-black',
        name: 'Standard - Black',
        color: { name: 'Black', hex: '#111111' },
        price: 28990,
        mrp: 34990,
        inStock: true,
        sku: 'SONY-XM5-BLK',
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'var-xm5-silver',
        name: 'Standard - Silver Platinum',
        color: { name: 'Silver Platinum', hex: '#d9d7ce' },
        price: 28990,
        mrp: 34990,
        inStock: true,
        sku: 'SONY-XM5-SLV',
        images: ['https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-apple-watch-ultra-2',
    title: 'Apple Watch Ultra 2 GPS + Cellular',
    brand: 'Apple',
    category: 'wearables',
    subCategory: 'Smartwatches',
    description: 'The ultimate sports and adventure watch. 49mm aerospace titanium case, brightest Apple display ever at 3000 nits, precision dual-frequency GPS, up to 72 hours in Low Power Mode.',
    tagline: 'Next level adventure. Rugged titanium 49mm casing.',
    badge: 'Exclusive 1Fi',
    rating: 4.9,
    ratingCount: 420,
    thumbnail: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80'
    ],
    basePrice: 89900,
    baseMrp: 89900,
    minTenureMonths: 3,
    zeroCostAvailable: true,
    featured: false,
    trending: true,
    warranty: '1 Year Apple India Warranty',
    deliveryDays: 2,
    seller: {
      name: 'Imagine Apple Store',
      rating: 4.9,
      badge: 'Verified Reseller'
    },
    highlights: [
      { label: 'Case', value: '49mm Aerospace Titanium' },
      { label: 'Display', value: '3000 Nits Always-On Retina' },
      { label: 'Water Resistance', value: '100m water resistant with EN13319 dive metric' },
      { label: 'Battery', value: 'Up to 36 hours regular / 72 hours Low Power' }
    ],
    specifications: {
      'General': {
        'Case Size': '49mm',
        'Connectivity': 'GPS + Cellular 4G LTE'
      }
    },
    variants: [
      {
        id: 'var-awu2-ocean-blue',
        name: '49mm Titanium - Blue Ocean Band',
        screenSize: '49mm',
        color: { name: 'Ocean Blue', hex: '#1e3a8a' },
        price: 89900,
        mrp: 89900,
        inStock: true,
        sku: 'AWU2-49-OCN',
        images: ['https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'var-awu2-trail-orange',
        name: '49mm Titanium - Orange Alpine Loop',
        screenSize: '49mm',
        color: { name: 'Alpine Orange', hex: '#ea580c' },
        price: 89900,
        mrp: 89900,
        inStock: true,
        sku: 'AWU2-49-ALP',
        images: ['https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-dell-xps-16',
    title: 'Dell XPS 16 OLED (Intel Core Ultra 9)',
    brand: 'Dell',
    category: 'laptops',
    subCategory: 'Ultrabook',
    description: 'Iconic seamless glass touchpad, capacitive touch function row, 4K+ OLED InfinityEdge display, NVIDIA GeForce RTX 4070, and Intel AI Boost NPU.',
    tagline: 'Futuristic design meets uncompromised creator horsepower.',
    badge: 'New Launch',
    rating: 4.6,
    ratingCount: 180,
    thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'
    ],
    basePrice: 249990,
    baseMrp: 279990,
    minTenureMonths: 6,
    zeroCostAvailable: true,
    featured: false,
    trending: false,
    warranty: '2 Years Dell Onsite Support + Accidental Damage Protection',
    deliveryDays: 3,
    seller: {
      name: 'Dell Direct Official Store',
      rating: 4.8,
      badge: 'Brand Direct'
    },
    highlights: [
      { label: 'Processor', value: 'Intel Core Ultra 9 185H (16-Core, AI NPU)' },
      { label: 'Graphics', value: 'NVIDIA GeForce RTX 4070 8GB GDDR6' },
      { label: 'Display', value: '16.3" 4K+ (3840x2400) OLED Touch 120Hz' },
      { label: 'Memory', value: '32GB LPDDR5x 7467 MT/s' }
    ],
    specifications: {
      'Specs': {
        'RAM': '32 GB',
        'SSD': '1 TB PCIe NVMe Gen4',
        'Weight': '2.13 kg'
      }
    },
    variants: [
      {
        id: 'var-xps16-32-1tb',
        name: '32GB RAM / 1TB SSD - Platinum Silver',
        storage: '1 TB',
        ram: '32 GB',
        color: { name: 'Platinum Silver', hex: '#d1d5db' },
        price: 249990,
        mrp: 279990,
        inStock: true,
        sku: 'XPS16-U9-1TB',
        images: ['https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-ipad-pro-m4',
    title: 'Apple iPad Pro 11" (M4 Ultra-Thin OLED)',
    brand: 'Apple',
    category: 'tablets',
    subCategory: 'Tablets',
    description: 'Impossibly thin 5.1mm design. Ultra Retina XDR with Tandem OLED technology, groundbreaking Apple M4 performance, and support for Apple Pencil Pro.',
    tagline: 'Tandem OLED breakthrough. Unbelievably thin and powerful.',
    badge: 'Zero Cost EMI',
    rating: 4.9,
    ratingCount: 780,
    thumbnail: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'],
    basePrice: 99900,
    baseMrp: 104900,
    minTenureMonths: 3,
    zeroCostAvailable: true,
    featured: false,
    trending: true,
    warranty: '1 Year Apple India Warranty',
    deliveryDays: 2,
    seller: {
      name: 'Imagine Apple Store',
      rating: 4.9,
      badge: 'Authorized Apple Enterprise'
    },
    highlights: [
      { label: 'Display', value: '11" Ultra Retina XDR Tandem OLED' },
      { label: 'Processor', value: 'Apple M4 chip (9-core CPU, 10-core GPU)' },
      { label: 'Thickness', value: 'Only 5.3 mm thin' }
    ],
    specifications: {
      'Display': {
        'Type': 'Tandem OLED with ProMotion',
        'Brightness': '1000 nits full screen, 1600 nits peak HDR'
      }
    },
    variants: [
      {
        id: 'var-ipad-m4-256-spaceblack',
        name: '256GB Wi-Fi - Space Black',
        storage: '256 GB',
        color: { name: 'Space Black', hex: '#1e2022' },
        price: 99900,
        mrp: 104900,
        inStock: true,
        sku: 'IPAD-M4-11-256',
        images: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-airpods-pro-2',
    title: 'Apple AirPods Pro (2nd Gen, USB-C)',
    brand: 'Apple',
    category: 'audio',
    subCategory: 'TWS Earbuds',
    description: 'Up to 2x more Active Noise Cancellation, Adaptive Audio, Transparency mode, Personalized Spatial Audio with dynamic head tracking, and MagSafe Charging Case (USB-C) with Speaker and Lanyard loop.',
    tagline: 'Pro-level Active Noise Cancellation with USB-C.',
    badge: 'Top Seller',
    rating: 4.8,
    ratingCount: 3890,
    thumbnail: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80'],
    basePrice: 20900,
    baseMrp: 24900,
    minTenureMonths: 3,
    zeroCostAvailable: true,
    featured: false,
    trending: true,
    warranty: '1 Year Apple India Warranty',
    deliveryDays: 1,
    seller: {
      name: 'Unicorn Apple Stores',
      rating: 4.9,
      badge: 'Authorized Apple Enterprise'
    },
    highlights: [
      { label: 'Noise Cancellation', value: 'Up to 2x more active cancellation' },
      { label: 'Chip', value: 'Apple H2 headphone chip' },
      { label: 'Battery Life', value: 'Up to 6 hours (30 hours with case)' },
      { label: 'Charging', value: 'USB-C, MagSafe, Apple Watch charger' }
    ],
    specifications: {
      'General': {
        'Weight': '5.3 grams per earbud',
        'Water Resistance': 'IP54 dust, sweat, and water resistant'
      }
    },
    variants: [
      {
        id: 'var-app2-white',
        name: 'Standard - White',
        color: { name: 'White', hex: '#ffffff' },
        price: 20900,
        mrp: 24900,
        inStock: true,
        sku: 'APP2-USBC',
        images: ['https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80']
      }
    ]
  },
  {
    id: 'prod-oneplus-12',
    title: 'OnePlus 12 5G (Flowy Emerald)',
    brand: 'OnePlus',
    category: 'smartphones',
    subCategory: 'Flagship Smartphone',
    description: 'Powered by Snapdragon 8 Gen 3, 4th Gen Hasselblad Camera System, 5400mAh battery with 100W SUPERVOOC charging and 50W AIRVOOC wireless.',
    tagline: 'Smooth beyond belief. 4th Gen Hasselblad camera.',
    badge: 'Lowest Price',
    rating: 4.7,
    ratingCount: 890,
    thumbnail: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80',
    gallery: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80'],
    basePrice: 64999,
    baseMrp: 69999,
    minTenureMonths: 3,
    zeroCostAvailable: true,
    featured: false,
    trending: false,
    warranty: '1 Year OnePlus India Warranty',
    deliveryDays: 2,
    seller: {
      name: 'OnePlus Direct Store',
      rating: 4.7,
      badge: 'Brand Official'
    },
    highlights: [
      { label: 'Processor', value: 'Snapdragon 8 Gen 3' },
      { label: 'Charging', value: '100W SUPERVOOC (0 to 100% in 26m)' },
      { label: 'Display', value: '2K 120Hz ProXDR with 4500 nits peak' }
    ],
    specifications: {
      'Performance': {
        'Processor': 'Snapdragon 8 Gen 3',
        'RAM': '12 GB LPDDR5X'
      }
    },
    variants: [
      {
        id: 'var-op12-256-emerald',
        name: '12GB / 256GB - Flowy Emerald',
        storage: '256 GB',
        ram: '12 GB',
        color: { name: 'Flowy Emerald', hex: '#2e5d4e' },
        price: 64999,
        mrp: 69999,
        inStock: true,
        sku: 'OP12-256-EMR',
        images: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80']
      }
    ]
  }
];

export const MOCK_USER_FINANCIAL_PROFILE = {
  availablePortfolioLimit: 250000,
  totalMutualFundValue: 485000,
  usedCreditLimit: 32000,
  creditScore: 785,
  eligibleForZeroCost: true,
  linkedBankAccount: {
    bankName: 'HDFC Bank Ltd',
    accountNumberLast4: '8821',
    autoDebitActive: true
  }
};
