import React from 'react';
import { useShop } from '../../context/ShopContext';
import { formatINR } from '../../utils/formatters';
import { CreditCard, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const LoansView: React.FC = () => {
  const { orders, setBottomNav, setTopTab } = useShop();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 pb-24 space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-rose-600" />
          <h2 className="font-bold text-base text-slate-900">1Fi Active Loans & EMI Schedule</h2>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center bg-white border border-[#FCE7EE] rounded-3xl shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FFF0F5] flex items-center justify-center text-rose-400 mb-3">
            <CreditCard className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">No Active Loans Yet</h3>
          <p className="text-xs text-slate-500 max-w-xs mb-4">
            Shop from 1Fi Marketplace using your mutual fund limit with 0% No-Cost EMI plans.
          </p>
          <button
            onClick={() => {
              setBottomNav('shop');
              setTopTab('1fi-marketplace');
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-pink-glow hover:bg-rose-500 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explore 1Fi Marketplace</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {orders.map((order) => {
            const item = order.items[0];
            return (
              <div
                key={order.id}
                className="p-4 bg-white border border-[#FCE7EE] rounded-2xl space-y-3 shadow-card"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-rose-700">{order.id}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full font-bold uppercase">
                    <CheckCircle2 className="w-3 h-3 text-rose-600" />
                    Auto-Debit Active
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={item.variant.images?.[0] || item.product.thumbnail}
                    alt={item.product.title}
                    className="w-12 h-12 rounded-xl object-contain bg-[#FFF8FA] p-1 border border-rose-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-slate-900 truncate">{item.product.title}</h4>
                    <p className="text-[11px] text-slate-500">{item.variant.name}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-extrabold text-slate-900">
                      {formatINR(item.selectedEMI.monthlyAmount)}/mo
                    </div>
                    <div className="text-[10px] text-rose-700 font-bold">
                      {item.selectedEMI.tenureMonths} Months
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-rose-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-600" />
                    <span>Next EMI: <strong className="text-slate-900">5th of next month</strong></span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-400">
                    {order.loanAgreementId}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
