import React from 'react';
import { useShop } from '../../context/ShopContext';
import { formatINR } from '../../utils/formatters';
import { PieChart, TrendingUp, ShieldCheck, Lock } from 'lucide-react';

const MOCK_HOLDINGS = [
  { name: 'Parag Parikh Flexi Cap Fund Direct-Growth', value: 185000, returns: '+18.4%', pledged: true },
  { name: 'Mirae Asset Large Cap Fund Direct-Growth', value: 140000, returns: '+12.1%', pledged: true },
  { name: 'Nippon India Small Cap Fund Direct-Growth', value: 95000, returns: '+22.8%', pledged: false },
  { name: 'HDFC Index S&P BSE Sensex Fund', value: 65000, returns: '+10.5%', pledged: false },
];

export const PortfolioView: React.FC = () => {
  const { userProfile } = useShop();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 pb-24 space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-rose-600" />
          <h2 className="font-bold text-base text-slate-900">Investment Portfolio</h2>
        </div>
        <span className="text-xs bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full font-bold">
          CAMS & KFintech Synced
        </span>
      </div>

      <div className="p-5 rounded-3xl bg-white border border-[#FCE7EE] space-y-3 shadow-card">
        <div className="text-xs text-slate-500 font-medium">Total Mutual Fund Assets</div>
        <div className="text-2xl font-black text-slate-900">
          {formatINR(userProfile?.totalMutualFundValue || 485000)}
        </div>
        <div className="flex items-center gap-2 text-xs text-rose-700 font-bold">
          <TrendingUp className="w-4 h-4 text-rose-600" />
          <span>All-time Gains: +₹78,400 (19.3%)</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Linked Mutual Fund Holdings
        </h3>
        <div className="space-y-2">
          {MOCK_HOLDINGS.map((fund, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-white border border-[#FCE7EE] rounded-2xl flex items-center justify-between shadow-sm"
            >
              <div className="space-y-0.5 max-w-[65%]">
                <div className="text-xs font-bold text-slate-900 line-clamp-1">{fund.name}</div>
                <div className="text-[10px] text-slate-500 flex items-center gap-1.5 font-medium">
                  <span>Equity Mutual Fund</span>
                  <span className="text-rose-700 font-bold">{fund.returns}</span>
                </div>
              </div>

              <div className="text-right space-y-1">
                <div className="text-xs font-extrabold text-slate-900">{formatINR(fund.value)}</div>
                {fund.pledged ? (
                  <span className="inline-flex items-center gap-1 text-[9px] bg-rose-50 text-rose-700 border border-rose-200 px-1.5 py-0.2 rounded font-bold">
                    <Lock className="w-2.5 h-2.5" />
                    Pledged
                  </span>
                ) : (
                  <span className="text-[9px] text-slate-400 font-medium">Free Units</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-2xl text-xs text-slate-700 flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
        <span>
          Your mutual funds remain in your demat folio. Dividends and NAV growth continue untouched while 1Fi provides POS financing.
        </span>
      </div>
    </div>
  );
};
