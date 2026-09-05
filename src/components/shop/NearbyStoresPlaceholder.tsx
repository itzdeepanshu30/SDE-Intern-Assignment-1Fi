import React from 'react';
import { Store, MapPin, ArrowRight } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const NearbyStoresPlaceholder: React.FC = () => {
  const { setTopTab } = useShop();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-8 text-center animate-fade-in">
      <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center mb-4 text-rose-600">
        <Store className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2">Nearby Partner Stores</h3>
      <p className="text-sm text-slate-500 max-w-sm mb-6 leading-relaxed">
        Offline retail store checkout via QR code and instant 1Fi credit lien is currently in pilot across select metro locations.
      </p>

      <div className="flex items-center gap-2 p-3 bg-white border border-[#FCE7EE] rounded-xl mb-6 text-xs text-slate-600 shadow-sm">
        <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
        <span>Scan-to-EMI at Croma, Reliance Digital & Vijay Sales coming Q3</span>
      </div>

      <button
        onClick={() => setTopTab('1fi-marketplace')}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm shadow-md transition active:scale-95"
      >
        <span>Explore 1Fi Marketplace</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};
