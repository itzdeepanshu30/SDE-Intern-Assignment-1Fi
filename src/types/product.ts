export interface ProductVariant {
  id: string;
  name: string; // e.g. "256 GB - Natural Titanium" or "16GB RAM / 512GB SSD"
  storage?: string;
  color?: {
    name: string;
    hex: string;
  };
  ram?: string;
  screenSize?: string;
  price: number; // Final selling price
  mrp: number; // Maximum retail price
  inStock: boolean;
  sku: string;
  images: string[];
}

export interface ProductHighlight {
  label: string;
  value: string;
  icon?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  verifiedPurchase: boolean;
}

export interface Product {
  id: string;
  title: string;
  brand: string;
  brandLogo?: string;
  category: 'smartphones' | 'laptops' | 'audio' | 'wearables' | 'tablets' | 'appliances';
  subCategory?: string;
  description: string;
  tagline: string;
  badge?: 'Top Seller' | 'Zero Cost EMI' | 'Exclusive 1Fi' | 'Lowest Price' | 'New Launch';
  rating: number;
  ratingCount: number;
  thumbnail: string;
  gallery: string[];
  basePrice: number;
  baseMrp: number;
  variants: ProductVariant[];
  highlights: ProductHighlight[];
  specifications: Record<string, Record<string, string>>;
  warranty: string;
  deliveryDays: number;
  featured?: boolean;
  trending?: boolean;
  minTenureMonths: number;
  zeroCostAvailable: boolean;
  seller: {
    name: string;
    rating: number;
    badge: string;
  };
}

export interface CategoryItem {
  id: string;
  key: Product['category'] | 'all';
  name: string;
  icon: string;
  count: number;
  popularBrands: string[];
}

export interface BannerItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  ctaText: string;
  imageUrl: string;
  accentColor: string;
  targetCategory?: Product['category'];
  productId?: string;
}
