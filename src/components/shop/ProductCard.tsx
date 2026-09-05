import React from 'react';
import { Product } from '../../types/product';
import { useShop } from '../../context/ShopContext';
import { formatINR, calculateDiscount } from '../../utils/formatters';
import { Star, Heart, Sparkles, Zap } from 'lucide-react';
import { Badge } from '../common/Badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openProductDetail, wishlist, toggleWishlist } = useShop();

  const isWishlisted = wishlist.includes(product.id);
  const discount = calculateDiscount(product.basePrice, product.baseMrp);
  const startingEMI = Math.round(product.basePrice / 12);

  return (
    <div
      onClick={() => openProductDetail(product)}
      className="group cursor-pointer bg-white hover:bg-white border border-[#FFD1DE] hover:border-pink-400 rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-1 relative"
    >
      {/* Top Bar: Badge & Wishlist */}
      <div className="flex items-center justify-between mb-2 z-10">
        {product.badge ? (
          <Badge
            variant={
              product.badge === 'Top Seller'
                ? 'warning'
                : product.badge === 'Zero Cost EMI'
                ? 'success'
                : 'primary'
            }
            size="sm"
          >
            {product.badge}
          </Badge>
        ) : (
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {product.brand}
          </span>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition ${
            isWishlisted
              ? 'bg-pink-100 text-pink-600'
              : 'bg-[#FFE2EC] text-slate-400 hover:text-pink-600 hover:bg-pink-100'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-pink-600' : ''}`} />
        </button>
      </div>

      {/* Product Image */}
      <div className="relative w-full aspect-square rounded-xl bg-[#FFF5F8] border border-[#FFD1DE] overflow-hidden flex items-center justify-center p-3 mb-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {product.zeroCostAvailable && (
          <div className="absolute bottom-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-pink-600 text-white text-[10px] font-extrabold uppercase tracking-tight shadow-sm">
            <Zap className="w-2.5 h-2.5 fill-current" />
            0% Interest
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-1 mb-3">
        <div className="flex items-center gap-1.5 text-xs text-amber-600 font-bold">
          <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
          <span>{product.rating}</span>
          <span className="text-slate-400 text-[11px] font-medium">({product.ratingCount})</span>
        </div>

        <h3 className="font-bold text-sm text-slate-900 group-hover:text-pink-700 transition-colors line-clamp-2 leading-snug">
          {product.title}
        </h3>

        <p className="text-[11px] text-slate-500 line-clamp-1">{product.tagline}</p>
      </div>

      {/* Price & EMI Section */}
      <div className="pt-2 border-t border-[#FFD1DE] space-y-1.5">
        <div className="flex items-baseline gap-2">
          <span className="text-base font-black text-slate-900">
            {formatINR(product.basePrice)}
          </span>
          {discount > 0 && (
            <>
              <span className="text-xs text-slate-400 line-through">
                {formatINR(product.baseMrp)}
              </span>
              <span className="text-xs font-bold text-pink-700 bg-pink-50 px-1.5 py-0.5 rounded border border-pink-200">
                {discount}% off
              </span>
            </>
          )}
        </div>

        {/* 1Fi Smart EMI Highlight */}
        <div className="flex items-center justify-between bg-[#FFEBF2] border border-[#FFD1DE] px-2.5 py-1.5 rounded-xl text-xs">
          <div className="flex items-center gap-1 text-pink-800 font-bold">
            <Sparkles className="w-3 h-3 text-pink-600" />
            <span>From {formatINR(startingEMI)}/mo</span>
          </div>
          <span className="text-[10px] text-pink-800 font-bold bg-pink-200/90 px-1.5 py-0.5 rounded">
            12M EMI
          </span>
        </div>
      </div>
    </div>
  );
};
