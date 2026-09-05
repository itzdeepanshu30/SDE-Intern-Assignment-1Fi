import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { Product, CategoryItem, BannerItem, ProductVariant } from '../types/product';
import { EMIOption, UserFinancialProfile } from '../types/emi';
import { ShopTopTab, AppBottomNav, FilterState } from '../types/navigation';
import { Order, ShippingAddress } from '../types/order';
import { ApiService } from '../services/apiService';
import { useToast } from './ToastContext';

interface ShopContextType {
  // Navigation
  topTab: ShopTopTab;
  setTopTab: (tab: ShopTopTab) => void;
  bottomNav: AppBottomNav;
  setBottomNav: (nav: AppBottomNav) => void;

  // Frame toggle
  isMobileViewMode: boolean;
  toggleMobileViewMode: () => void;

  // Data
  products: Product[];
  categories: CategoryItem[];
  banners: BannerItem[];
  userProfile: UserFinancialProfile | null;
  orders: Order[];
  loadingProducts: boolean;
  productError: string | null;

  // Filters & Search
  filters: FilterState;
  setFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Product Details Modal
  selectedProduct: Product | null;
  selectedVariant: ProductVariant | null;
  openProductDetail: (product: Product, variantId?: string) => void;
  closeProductDetail: () => void;
  setSelectedVariant: (variant: ProductVariant) => void;

  // EMI & Checkout Flow
  selectedEMI: EMIOption | null;
  setSelectedEMI: (emi: EMIOption | null) => void;
  isCheckoutOpen: boolean;
  openCheckout: (product: Product, variant: ProductVariant, emi: EMIOption) => void;
  closeCheckout: () => void;
  checkoutProduct: Product | null;
  checkoutVariant: ProductVariant | null;
  checkoutEMI: EMIOption | null;
  processOrder: (address: ShippingAddress) => Promise<Order | null>;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;

  // Refetch
  refetchProducts: () => void;
}

const initialFilters: FilterState = {
  category: 'all',
  brand: [],
  priceRange: [0, 300000],
  minRating: 0,
  tenure: [],
  zeroCostOnly: false,
  sortBy: 'featured',
  searchQuery: ''
};

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showToast } = useToast();

  // Navigation State
  const [topTab, setTopTab] = useState<ShopTopTab>('1fi-marketplace');
  const [bottomNav, setBottomNav] = useState<AppBottomNav>('shop');
  const [isMobileViewMode, setIsMobileViewMode] = useState<boolean>(true);

  // Data State
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [userProfile, setUserProfile] = useState<UserFinancialProfile | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [productError, setProductError] = useState<string | null>(null);

  // Filters State
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [searchQuery, setSearchQueryState] = useState<string>('');

  // Selected for Details
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  // EMI & Checkout
  const [selectedEMI, setSelectedEMI] = useState<EMIOption | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutProduct, setCheckoutProduct] = useState<Product | null>(null);
  const [checkoutVariant, setCheckoutVariant] = useState<ProductVariant | null>(null);
  const [checkoutEMI, setCheckoutEMI] = useState<EMIOption | null>(null);

  // Wishlist
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load initial static data (Categories, Banners, User Profile, Past Orders)
  useEffect(() => {
    async function loadMeta() {
      try {
        const [cats, bans, profile, pastOrders] = await Promise.all([
          ApiService.getCategories(),
          ApiService.getBanners(),
          ApiService.getUserFinancialProfile(),
          ApiService.getOrders()
        ]);
        setCategories(cats);
        setBanners(bans);
        setUserProfile(profile);
        setOrders(pastOrders);
      } catch (err) {
        console.error('Failed to load metadata', err);
      }
    }
    loadMeta();
  }, []);

  // Fetch Products whenever filters change
  const fetchProducts = useCallback(async () => {
    setLoadingProducts(true);
    setProductError(null);
    try {
      const response = await ApiService.getProducts({
        ...filters,
        searchQuery
      });
      setProducts(response.products);
    } catch (err) {
      setProductError('Failed to fetch marketplace products. Please try again.');
    } finally {
      setLoadingProducts(false);
    }
  }, [filters, searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const toggleMobileViewMode = () => {
    setIsMobileViewMode((prev) => !prev);
  };

  const setFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const setSearchQuery = (query: string) => {
    setSearchQueryState(query);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    setSearchQueryState('');
    showToast('Filters reset to default', 'info');
  };

  const openProductDetail = (product: Product, variantId?: string) => {
    setSelectedProduct(product);
    const variant = variantId
      ? product.variants.find((v) => v.id === variantId) || product.variants[0]
      : product.variants[0];
    setSelectedVariant(variant);
    setSelectedEMI(null); // Will default to recommended in EMI component
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    setSelectedVariant(null);
    setSelectedEMI(null);
  };

  const openCheckout = (product: Product, variant: ProductVariant, emi: EMIOption) => {
    setCheckoutProduct(product);
    setCheckoutVariant(variant);
    setCheckoutEMI(emi);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    setCheckoutProduct(null);
    setCheckoutVariant(null);
    setCheckoutEMI(null);
  };

  const processOrder = async (address: ShippingAddress): Promise<Order | null> => {
    if (!checkoutProduct || !checkoutVariant || !checkoutEMI) return null;

    try {
      const order = await ApiService.placeOrder(
        checkoutProduct,
        checkoutVariant.id,
        checkoutEMI,
        address
      );
      setOrders((prev) => [order, ...prev]);
      showToast('Order confirmed! Instant EMI loan approved.', 'success');
      return order;
    } catch (err) {
      showToast('Failed to process loan & order. Please retry.', 'error');
      return null;
    }
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Added to wishlist', 'success');
        return [...prev, productId];
      }
    });
  };

  return (
    <ShopContext.Provider
      value={{
        topTab,
        setTopTab,
        bottomNav,
        setBottomNav,
        isMobileViewMode,
        toggleMobileViewMode,
        products,
        categories,
        banners,
        userProfile,
        orders,
        loadingProducts,
        productError,
        filters,
        setFilter,
        resetFilters,
        searchQuery,
        setSearchQuery,
        selectedProduct,
        selectedVariant,
        openProductDetail,
        closeProductDetail,
        setSelectedVariant,
        selectedEMI,
        setSelectedEMI,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        checkoutProduct,
        checkoutVariant,
        checkoutEMI,
        processOrder,
        wishlist,
        toggleWishlist,
        refetchProducts: fetchProducts
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
