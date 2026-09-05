import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Search, SlidersHorizontal, Sparkles, X, AlertCircle } from 'lucide-react';
import { BannerCarousel } from './BannerCarousel';
import { CategoryPills } from './CategoryPills';
import { ProductCard } from './ProductCard';
import { ProductCardSkeleton } from '../common/Skeleton';
import { FilterModal } from './FilterModal';

export const MarketplaceView: React.FC = () => {
  const {
    products,
    loadingProducts,
    productError,
    searchQuery,
    setSearchQuery,
    filters,
    resetFilters
  } = useShop();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Count active filters for badge
  const activeFilterCount =
    (filters.brand.length > 0 ? 1 : 0) +
    (filters.zeroCostOnly ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0) +
    (filters.sortBy !== 'featured' ? 1 : 0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-24 animate-fade-in space-y-4">
      {/* Search and Filter Row */}
      <div className="flex items-center gap-2 pt-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search iPhone, MacBook, Sony headphones..."
            className="w-full bg-white border border-[#FCE7EE] rounded-xl pl-9 pr-9 py-2.5 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-400/10 shadow-sm transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Drawer Trigger */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition active:scale-95 shrink-0 shadow-sm ${
            activeFilterCount > 0
              ? 'bg-rose-50 border-rose-300 text-rose-800 font-bold'
              : 'bg-white border-[#FCE7EE] text-slate-700 hover:bg-rose-50/50'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-rose-600" />
          <span className="hidden sm:inline">Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 bg-rose-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-sm">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      {/* Promotional Banners */}
      {!searchQuery && <BannerCarousel />}

      {/* Categories Bar */}
      <CategoryPills />

      {/* Section Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-rose-600" />
          <h2 className="text-sm font-bold text-slate-800">
            {filters.category === 'all'
              ? 'Featured Marketplace Products'
              : `${filters.category.charAt(0).toUpperCase() + filters.category.slice(1)}`}
          </h2>
          <span className="text-xs text-slate-400 font-medium">({products.length})</span>
        </div>

        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="text-xs text-rose-600 hover:underline font-bold"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Error state */}
      {productError && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-3 text-rose-700 text-xs">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{productError}</span>
        </div>
      )}

      {/* Products Grid / Skeletons */}
      {loadingProducts ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white border border-[#FCE7EE] rounded-3xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FFF0F5] flex items-center justify-center text-rose-400 mb-3">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">No products found</h3>
          <p className="text-xs text-slate-500 max-w-xs mb-4">
            We couldn&apos;t find any items matching your filters or search term.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-md hover:bg-rose-500 transition"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Filter Modal */}
      <FilterModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
};
