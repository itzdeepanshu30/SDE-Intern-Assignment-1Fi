import React, { useState } from 'react';
import { X, Check, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { formatINR } from '../../utils/formatters';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BRANDS = ['Apple', 'Samsung', 'Sony', 'OnePlus', 'Dell'];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured & Popular' },
  { value: 'emi-low', label: 'Lowest Monthly EMI' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
] as const;

export const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  const { filters, setFilter, resetFilters } = useShop();

  // Local draft state before applying
  const [selectedBrands, setSelectedBrands] = useState<string[]>(filters.brand || []);
  const [maxPrice, setMaxPrice] = useState<number>(filters.priceRange[1]);
  const [zeroCostOnly, setZeroCostOnly] = useState<boolean>(filters.zeroCostOnly);
  const [minRating, setMinRating] = useState<number>(filters.minRating || 0);
  const [sortBy, setSortBy] = useState(filters.sortBy);

  if (!isOpen) return null;

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const applyFilters = () => {
    setFilter('brand', selectedBrands);
    setFilter('priceRange', [0, maxPrice]);
    setFilter('zeroCostOnly', zeroCostOnly);
    setFilter('minRating', minRating);
    setFilter('sortBy', sortBy);
    onClose();
  };

  const handleReset = () => {
    resetFilters();
    setSelectedBrands([]);
    setMaxPrice(300000);
    setZeroCostOnly(false);
    setMinRating(0);
    setSortBy('featured');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white border border-[#FCE7EE] rounded-t-3xl sm:rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-slide-up">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#FCE7EE] bg-rose-50/40">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-rose-600" />
            <h3 className="font-bold text-base text-slate-900">Filter & Sort Marketplace</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-rose-100 text-slate-600 hover:text-slate-900 flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-6 overflow-y-auto max-h-[60vh] no-scrollbar">
          {/* Sort By */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Sort By
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSortBy(opt.value)}
                  className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold transition ${
                    sortBy === opt.value
                      ? 'bg-rose-50 border-rose-500 text-rose-800 shadow-sm font-bold'
                      : 'bg-white border-[#FCE7EE] text-slate-700 hover:border-rose-300'
                  }`}
                >
                  <span>{opt.label}</span>
                  {sortBy === opt.value && <Check className="w-3.5 h-3.5 text-rose-600" />}
                </button>
              ))}
            </div>
          </div>

          {/* 0% No Cost EMI Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-rose-50/70 border border-rose-200">
            <div>
              <div className="font-bold text-sm text-rose-950">0% No-Cost EMI Only</div>
              <div className="text-xs text-slate-500">Show products with zero interest schemes</div>
            </div>
            <button
              onClick={() => setZeroCostOnly(!zeroCostOnly)}
              className={`w-12 h-6 rounded-full transition-colors relative flex items-center p-1 ${
                zeroCostOnly ? 'bg-rose-600' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white transition-transform ${
                  zeroCostOnly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Brands Filter */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              Brands
            </h4>
            <div className="flex flex-wrap gap-2">
              {BRANDS.map((brand) => {
                const isSelected = selectedBrands.includes(brand);
                return (
                  <button
                    key={brand}
                    onClick={() => toggleBrand(brand)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
                      isSelected
                        ? 'bg-rose-600 text-white border-rose-600 font-bold shadow-sm'
                        : 'bg-white border-[#FCE7EE] text-slate-700 hover:border-rose-300'
                    }`}
                  >
                    {brand}
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Max Price Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Max Price
              </h4>
              <span className="text-sm font-bold text-rose-700">{formatINR(maxPrice)}</span>
            </div>
            <input
              type="range"
              min={10000}
              max={300000}
              step={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-rose-600 bg-rose-100 rounded-lg h-2 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-semibold">
              <span>₹10,000</span>
              <span>₹1,50,000</span>
              <span>₹3,00,000</span>
            </div>
          </div>

          {/* Minimum Rating */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Minimum Rating
            </h4>
            <div className="flex gap-2">
              {[0, 4.0, 4.5, 4.8].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setMinRating(rating)}
                  className={`flex-1 py-1.5 rounded-xl border text-xs font-semibold transition ${
                    minRating === rating
                      ? 'bg-rose-50 border-rose-500 text-rose-800 shadow-sm font-bold'
                      : 'bg-white border-[#FCE7EE] text-slate-600'
                  }`}
                >
                  {rating === 0 ? 'All' : `${rating}★+`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#FCE7EE] bg-rose-50/30 flex items-center gap-3">
          <button
            onClick={handleReset}
            className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-rose-50 text-slate-700 font-semibold text-xs border border-[#FCE7EE] shadow-sm transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
          <button
            onClick={applyFilters}
            className="flex-1 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md transition active:scale-95"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};
