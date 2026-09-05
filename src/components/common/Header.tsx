import React from 'react';
import { Heart, Smartphone, Monitor, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';
import { formatINR } from '../../utils/formatters';

export const Header: React.FC = () => {
  const { userProfile, wishlist, isMobileViewMode, toggleMobileViewMode } = useShop();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#FFD1DE] px-4 py-3 shadow-[0_1px_3px_0_rgba(219,39,119,0.06)]">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        {/* Left: 1Fi Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-pink-600 via-pink-500 to-rose-500 flex items-center justify-center shadow-pink-glow text-white font-black text-lg tracking-tighter">
            1Fi
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base text-slate-900 tracking-tight">1Fi Shop</span>
              <span className="bg-pink-100 text-pink-800 border border-pink-200 text-[10px] font-bold px-1.5 py-0.2 rounded">
                0% EMI
              </span>
            </div>
            <p className="text-[11px] text-pink-900/70 font-medium">Smart Financing & Marketplace</p>
          </div>
        </div>

        {/* Right: Credit Limit Pill, Wishlist, View Switcher */}
        <div className="flex items-center gap-2">
          {/* Credit limit pill */}
          {userProfile && (
            <div className="hidden sm:flex items-center gap-1.5 bg-pink-50 border border-pink-200 px-2.5 py-1 rounded-full text-xs text-slate-800 font-medium shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
              <span className="text-slate-500">Limit:</span>
              <span className="font-bold text-pink-700">
                {formatINR(userProfile.availablePortfolioLimit)}
              </span>
            </div>
          )}

          {/* Wishlist Pill */}
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#FFE2EC] hover:bg-pink-200 border border-[#FFD1DE] text-slate-600 hover:text-slate-900 transition">
            <Heart className="w-4 h-4 text-pink-600 fill-pink-100" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-600 text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-sm">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* Device Frame Toggle (Mobile Preview vs Full Desktop) */}
          <button
            onClick={toggleMobileViewMode}
            title={isMobileViewMode ? "Switch to Full Screen Desktop View" : "Switch to Mobile App Preview"}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white hover:bg-pink-50 border border-[#FFD1DE] hover:border-pink-300 text-slate-700 hover:text-pink-700 text-xs font-semibold shadow-sm transition"
          >
            {isMobileViewMode ? (
              <>
                <Monitor className="w-3.5 h-3.5 text-pink-600" />
                <span className="hidden md:inline">Full Width</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5 text-pink-600" />
                <span className="hidden md:inline">App View</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
