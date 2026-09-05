import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { formatINR, calculateDiscount, formatDeliveryDate } from '../../utils/formatters';
import { X, Heart, Star, Shield, ArrowRight, Truck, RefreshCw, Zap } from 'lucide-react';
import { VariantSelector } from './VariantSelector';
import { EMICalculator } from './EMICalculator';
import { SpecsAccordion } from './SpecsAccordion';
import { Badge } from '../common/Badge';

export const ProductDetailModal: React.FC = () => {
  const {
    selectedProduct,
    selectedVariant,
    setSelectedVariant,
    closeProductDetail,
    selectedEMI,
    setSelectedEMI,
    openCheckout,
    wishlist,
    toggleWishlist
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!selectedProduct || !selectedVariant) return null;

  const isWishlisted = wishlist.includes(selectedProduct.id);
  const discount = calculateDiscount(selectedVariant.price, selectedVariant.mrp);

  const images = selectedVariant.images?.length > 0 ? selectedVariant.images : selectedProduct.gallery;
  const currentImage = images[activeImageIndex] || selectedProduct.thumbnail;

  const handleProceed = () => {
    if (!selectedEMI) return;
    openCheckout(selectedProduct, selectedVariant, selectedEMI);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in overflow-hidden">
      <div className="bg-[#FFF5F8] border border-[#FCE7EE] rounded-t-3xl sm:rounded-3xl w-full max-w-2xl h-[92vh] sm:h-[88vh] flex flex-col shadow-2xl overflow-hidden animate-slide-up relative">
        {/* Top Sticky Navigation */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#FCE7EE] px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2 overflow-hidden pr-2">
            <button
              onClick={closeProductDetail}
              className="w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-100 text-slate-700 flex items-center justify-center transition shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="truncate">
              <h3 className="text-xs font-bold text-slate-900 truncate">{selectedProduct.title}</h3>
              <span className="text-[10px] text-rose-700 font-bold">{selectedProduct.brand}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleWishlist(selectedProduct.id)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                isWishlisted
                  ? 'bg-rose-50 text-rose-500'
                  : 'bg-slate-100 text-slate-500 hover:text-rose-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5 no-scrollbar">
          {/* Main Image Gallery */}
          <div className="space-y-3">
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-white border border-[#FCE7EE] overflow-hidden flex items-center justify-center p-4 shadow-sm">
              <img
                src={currentImage}
                alt={selectedProduct.title}
                className="w-full h-full object-contain transition-transform duration-300"
              />
              {selectedProduct.badge && (
                <div className="absolute top-3 left-3">
                  <Badge variant="warning">{selectedProduct.badge}</Badge>
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl border p-1 shrink-0 overflow-hidden transition ${
                      activeImageIndex === idx
                        ? 'border-rose-500 bg-rose-50 shadow-sm'
                        : 'border-[#FCE7EE] bg-white opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Ratings */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 px-2 py-0.5 rounded-lg text-xs font-bold">
                <Star className="w-3 h-3 fill-current text-amber-500" />
                <span>{selectedProduct.rating}</span>
              </div>
              <span className="text-xs text-slate-500 font-medium">
                {selectedProduct.ratingCount} Ratings & Verified Reviews
              </span>
            </div>

            <h1 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
              {selectedProduct.title}
            </h1>

            <p className="text-xs text-slate-600 leading-relaxed">{selectedProduct.description}</p>
          </div>

          {/* Pricing Row */}
          <div className="p-4 bg-white border border-[#FCE7EE] rounded-2xl space-y-2 shadow-sm">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-black text-slate-900">
                {formatINR(selectedVariant.price)}
              </span>
              {discount > 0 && (
                <>
                  <span className="text-sm text-slate-400 line-through">
                    {formatINR(selectedVariant.mrp)}
                  </span>
                  <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
                    Save {discount}% ({formatINR(selectedVariant.mrp - selectedVariant.price)})
                  </span>
                </>
              )}
            </div>

            {/* Delivery Estimation Pill */}
            <div className="flex items-center gap-4 text-xs text-slate-600 pt-2 border-t border-rose-100">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-rose-600" />
                <span>Delivery by <strong className="text-slate-900">{formatDeliveryDate(selectedProduct.deliveryDays)}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-rose-600" />
                <span>7-day replacement</span>
              </div>
            </div>
          </div>

          {/* Variant Selector */}
          <VariantSelector
            product={selectedProduct}
            selectedVariant={selectedVariant}
            onSelectVariant={setSelectedVariant}
          />

          {/* Interactive EMI Plans Calculator */}
          <EMICalculator
            productPrice={selectedVariant.price}
            zeroCostAvailable={selectedProduct.zeroCostAvailable}
            selectedEMI={selectedEMI}
            onSelectEMI={setSelectedEMI}
          />

          {/* Specifications Accordion */}
          <SpecsAccordion product={selectedProduct} />

          {/* Security & 1Fi Trust Banner */}
          <div className="flex items-center gap-3 p-3.5 bg-white border border-[#FCE7EE] rounded-2xl text-xs text-slate-600 shadow-sm">
            <Shield className="w-5 h-5 text-rose-600 shrink-0" />
            <div>
              <span className="text-slate-900 font-bold">1Fi Fintech Assurance: </span>
              Zero paperwork, 100% digital sanction backed by your mutual fund portfolio.
            </div>
          </div>
        </div>

        {/* Sticky Bottom Action Bar with Dynamic CTA */}
        <div className="sticky bottom-0 z-30 bg-white border-t border-[#FCE7EE] p-4 flex items-center gap-3 shadow-[0_-4px_20px_rgba(225,29,72,0.06)]">
          <div className="flex-1">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              {selectedEMI?.isNoCost ? '0% No-Cost EMI' : 'Selected Plan'}
            </div>
            <div className="text-base font-black text-rose-700">
              {selectedEMI ? `${formatINR(selectedEMI.monthlyAmount)}/mo` : formatINR(selectedVariant.price)}
              {selectedEMI && (
                <span className="text-xs text-slate-500 font-medium ml-1">
                  for {selectedEMI.tenureMonths} mos
                </span>
              )}
            </div>
          </div>

          <button
            onClick={handleProceed}
            disabled={!selectedEMI}
            className="flex-1 sm:flex-initial sm:min-w-[240px] flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-400 text-white font-extrabold text-sm shadow-pink-glow transition-all active:scale-95 disabled:opacity-50"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>
              {selectedEMI
                ? `Proceed @ ${formatINR(selectedEMI.monthlyAmount)}/mo`
                : 'Select an EMI Plan'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
