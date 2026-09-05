export type ShopTopTab = 'top-brands' | 'nearby-stores' | '1fi-marketplace';

export type AppBottomNav = 'home' | 'portfolio' | 'shop' | 'loans' | 'profile';

export interface FilterState {
  category: string;
  brand: string[];
  priceRange: [number, number];
  minRating: number;
  tenure: number[];
  zeroCostOnly: boolean;
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'emi-low';
  searchQuery: string;
}
