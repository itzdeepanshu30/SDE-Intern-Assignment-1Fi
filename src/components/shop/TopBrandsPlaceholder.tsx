import React from 'react';
import { Flame, ArrowRight, ShieldCheck } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const TopBrandsPlaceholder: React.FC = () => {
  const { setTopTab } = useShop();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 text-amber-600">
        <Flame className="w-8 h-8 animate-pulse" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">Top Brands Showcase</h3>
      <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
        Direct brand partnerships and exclusive enterprise tie-ups are coming soon. Explore live electronics with 0% EMI in 1Fi Marketplace.
      </p>

      <div className="flex items-center gap-2 p-3 bg-white border border-[#FCE7EE] rounded-xl mb-6 text-xs text-slate-600 shadow-sm">
        <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
        <span>Apple, Samsung, Sony, OnePlus & Dell available now in Marketplace</span>
      </div>

      <button
        onClick={() => setTopTab('1fi-marketplace')}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md transition active:scale-95"
      >
        <span>Go to 1Fi Marketplace</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
