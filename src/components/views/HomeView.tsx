import React from 'react';
import { useShop } from '../../context/ShopContext';
import { formatINR } from '../../utils/formatters';
import { ShieldCheck, ArrowRight, Sparkles, TrendingUp, Zap, CreditCard, ChevronRight } from 'lucide-react';

export const HomeView: React.FC = () => {
  const { userProfile, setBottomNav, setTopTab } = useShop();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 pb-24 space-y-5 animate-fade-in">
      {/* Wealth Balance Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-700 via-rose-600 to-pink-700 border border-rose-500 p-5 shadow-pink-glow text-white">
        <div className="flex items-center justify-between text-xs text-rose-100 mb-2">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-rose-200" />
            Total Portfolio Value
          </span>
          <span className="text-white font-bold flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full">
            <TrendingUp className="w-3.5 h-3.5 text-rose-200" />
            +14.2% p.a.
          </span>
        </div>

        <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          {formatINR(userProfile?.totalMutualFundValue || 485000)}
        </div>

        {/* Available 1Fi Credit Limit */}
        <div className="mt-4 pt-4 border-t border-rose-500/60 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-bold text-rose-200 tracking-wider">
              Available 1Fi Credit Limit
            </div>
            <div className="text-base font-extrabold text-white">
              {formatINR(userProfile?.availablePortfolioLimit || 250000)}
            </div>
          </div>

          <button
            onClick={() => {
              setBottomNav('shop');
              setTopTab('1fi-marketplace');
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-rose-900 font-bold text-xs shadow-md hover:bg-rose-50 transition"
          >
            <span>Shop on 0% EMI</span>
            <ArrowRight className="w-3.5 h-3.5 text-rose-700" />
          </button>
        </div>
      </div>

      {/* Quick Action Tiles */}
      <div className="grid grid-cols-2 gap-3">
        <div
          onClick={() => {
            setBottomNav('shop');
            setTopTab('1fi-marketplace');
          }}
          className="cursor-pointer p-4 bg-white hover:bg-rose-50/50 border border-[#FCE7EE] rounded-2xl space-y-2 transition shadow-card"
        >
          <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="font-bold text-sm text-slate-900">1Fi Marketplace</div>
          <p className="text-[11px] text-slate-500">Shop top electronics with zero down payment</p>
        </div>

        <div
          onClick={() => setBottomNav('portfolio')}
          className="cursor-pointer p-4 bg-white hover:bg-rose-50/50 border border-[#FCE7EE] rounded-2xl space-y-2 transition shadow-card"
        >
          <div className="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-700">
            <Zap className="w-4 h-4" />
          </div>
          <div className="font-bold text-sm text-slate-900">Mutual Funds Lien</div>
          <p className="text-[11px] text-slate-500">Manage collateral & credit allocation</p>
        </div>
      </div>

      {/* 1Fi Features Banner */}
      <div className="p-4 bg-white border border-[#FCE7EE] rounded-2xl flex items-center justify-between shadow-card">
        <div className="flex items-center gap-3">
          <CreditCard className="w-6 h-6 text-rose-600" />
          <div>
            <div className="text-xs font-bold text-slate-900">1Fi AutoPay Mandate</div>
            <div className="text-[11px] text-slate-500">Active on {userProfile?.linkedBankAccount.bankName}</div>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-400" />
      </div>
    </div>
  );
};
