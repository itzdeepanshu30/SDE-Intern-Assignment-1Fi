import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';

export const BannerCarousel: React.FC = () => {
  const { banners, products, openProductDetail, setFilter } = useShop();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [banners.length]);

  if (banners.length === 0) return null;

  const currentBanner = banners[currentIndex];

  const handleBannerClick = () => {
    if (currentBanner.productId) {
      const prod = products.find((p) => p.id === currentBanner.productId);
      if (prod) {
        openProductDetail(prod);
        return;
      }
    }
    if (currentBanner.targetCategory) {
      setFilter('category', currentBanner.targetCategory);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#FCE7EE] shadow-card my-3 bg-white">
      {/* Banner Slide */}
      <div
        onClick={handleBannerClick}
        className="cursor-pointer relative h-48 sm:h-56 w-full flex items-center justify-between p-5 bg-gradient-to-r overflow-hidden group"
      >
        {/* Background Image with Gradient Overlay */}
        <img
          src={currentBanner.imageUrl}
          alt={currentBanner.title}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950 via-rose-900/90 to-pink-900/40" />

        {/* Banner Content */}
        <div className="relative z-10 max-w-[70%] space-y-2 text-white">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-400/20 border border-rose-300/40 text-rose-200 text-[10px] font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-rose-300" />
            <span>{currentBanner.tag}</span>
          </div>

          <h2 className="text-lg sm:text-2xl font-black text-white leading-tight tracking-tight">
            {currentBanner.title}
          </h2>

          <p className="text-xs sm:text-sm text-rose-100 font-medium line-clamp-2">
            {currentBanner.subtitle}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleBannerClick();
            }}
            className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-rose-900 text-xs font-bold shadow-md hover:bg-rose-50 transition active:scale-95"
          >
            <span>{currentBanner.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-700" />
          </button>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="absolute right-3 bottom-3 flex items-center gap-1 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
            }}
            className="w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-xs transition"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((prev) => (prev + 1) % banners.length);
            }}
            className="w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center text-xs transition"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-5 flex items-center gap-1.5 z-10">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-6 bg-rose-400' : 'w-2 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
