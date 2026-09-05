import { Product, CategoryItem, BannerItem } from '../types/product';
import { EMIOption, UserFinancialProfile } from '../types/emi';
import { FilterState } from '../types/navigation';
import { Order, ShippingAddress } from '../types/order';
import { MOCK_PRODUCTS, MOCK_USER_FINANCIAL_PROFILE } from '../data/mockProducts';
import { MOCK_CATEGORIES } from '../data/mockCategories';
import { MOCK_BANNERS } from '../data/mockBanners';
import { generateEMIPlans } from '../utils/emiCalculator';

// Local storage key for orders
const ORDERS_STORAGE_KEY = '1fi_marketplace_orders';

// Helper to simulate realistic async network latency
const delay = (ms: number = 300) => new Promise((resolve) => setTimeout(resolve, ms));

export class ApiService {
  /**
   * Fetch all categories
   */
  static async getCategories(): Promise<CategoryItem[]> {
    await delay(150);
    return [...MOCK_CATEGORIES];
  }

  /**
   * Fetch promotional banners
   */
  static async getBanners(): Promise<BannerItem[]> {
    await delay(150);
    return [...MOCK_BANNERS];
  }

  /**
   * Fetch user financial & credit profile
   */
  static async getUserFinancialProfile(): Promise<UserFinancialProfile> {
    await delay(200);
    return { ...MOCK_USER_FINANCIAL_PROFILE };
  }

  /**
   * Dynamic product query with multi-faceted filtering, searching, and sorting
   */
  static async getProducts(filters?: Partial<FilterState>): Promise<{ products: Product[]; total: number }> {
    await delay(250);

    let list = [...MOCK_PRODUCTS];

    if (filters) {
      // 1. Search Query
      if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const q = filters.searchQuery.toLowerCase().trim();
        list = list.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.brand.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            p.tagline.toLowerCase().includes(q)
        );
      }

      // 2. Category Filter
      if (filters.category && filters.category !== 'all') {
        list = list.filter((p) => p.category === filters.category);
      }

      // 3. Brand Filter
      if (filters.brand && filters.brand.length > 0) {
        list = list.filter((p) => filters.brand!.includes(p.brand));
      }

      // 4. Price Range
      if (filters.priceRange && filters.priceRange.length === 2) {
        const [min, max] = filters.priceRange;
        list = list.filter((p) => p.basePrice >= min && p.basePrice <= max);
      }

      // 5. Zero Cost Only
      if (filters.zeroCostOnly) {
        list = list.filter((p) => p.zeroCostAvailable);
      }

      // 6. Rating Filter
      if (filters.minRating && filters.minRating > 0) {
        list = list.filter((p) => p.rating >= filters.minRating!);
      }

      // 7. Sorting
      if (filters.sortBy) {
        switch (filters.sortBy) {
          case 'price-low':
            list.sort((a, b) => a.basePrice - b.basePrice);
            break;
          case 'price-high':
            list.sort((a, b) => b.basePrice - a.basePrice);
            break;
          case 'rating':
            list.sort((a, b) => b.rating - a.rating);
            break;
          case 'emi-low':
            list.sort((a, b) => {
              const emiA = Math.round(a.basePrice / 12);
              const emiB = Math.round(b.basePrice / 12);
              return emiA - emiB;
            });
            break;
          case 'featured':
          default:
            list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            break;
        }
      }
    }

    return {
      products: list,
      total: list.length
    };
  }

  /**
   * Fetch single product by ID
   */
  static async getProductById(productId: string): Promise<Product | null> {
    await delay(200);
    const product = MOCK_PRODUCTS.find((p) => p.id === productId);
    return product ? { ...product } : null;
  }

  /**
   * Fetch EMI options for a given product and variant price
   */
  static async getEMIOptions(productPrice: number, zeroCostAvailable: boolean = true): Promise<EMIOption[]> {
    await delay(180);
    return generateEMIPlans(productPrice, zeroCostAvailable);
  }

  /**
   * Create an approved order and record it
   */
  static async placeOrder(
    product: Product,
    variantId: string,
    selectedEMI: EMIOption,
    shippingAddress: ShippingAddress
  ): Promise<Order> {
    await delay(600); // Simulate loan approval transaction time

    const variant = product.variants.find((v) => v.id === variantId) || product.variants[0];
    const orderId = '1FI-' + Math.random().toString(36).substring(2, 9).toUpperCase();
    const loanAgreementId = 'LN-' + Math.floor(100000 + Math.random() * 900000);
    const portfolioLienRef = 'MF-LIEN-' + Math.floor(10000000 + Math.random() * 90000000);

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + product.deliveryDays);

    const newOrder: Order = {
      id: orderId,
      createdAt: new Date().toISOString(),
      items: [
        {
          product,
          variant,
          quantity: 1,
          selectedEMI
        }
      ],
      totalOrderValue: variant.price,
      totalDownPayment: selectedEMI.downPayment,
      monthlyTotalEMI: selectedEMI.monthlyAmount,
      shippingAddress,
      status: 'approved',
      loanAgreementId,
      portfolioLienRef,
      estimatedDeliveryDate: deliveryDate.toLocaleDateString('en-IN', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      })
    };

    // Save to local storage
    try {
      const existingStr = localStorage.getItem(ORDERS_STORAGE_KEY);
      const existing: Order[] = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify([newOrder, ...existing]));
    } catch {
      // Ignore in non-browser environments
    }

    return newOrder;
  }

  /**
   * Fetch user's placed orders
   */
  static async getOrders(): Promise<Order[]> {
    await delay(200);
    try {
      const existingStr = localStorage.getItem(ORDERS_STORAGE_KEY);
      return existingStr ? JSON.parse(existingStr) : [];
    } catch {
      return [];
    }
  }
}
