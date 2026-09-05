import React, { useState, useEffect } from 'react';
import { EMIOption } from '../../types/emi';
import { ApiService } from '../../services/apiService';
import { calculateEMIBreakdown } from '../../utils/emiCalculator';
import { formatINR } from '../../utils/formatters';
import { Zap, ShieldCheck, Check, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Skeleton } from '../common/Skeleton';

interface EMICalculatorProps {
  productPrice: number;
  zeroCostAvailable: boolean;
  selectedEMI: EMIOption | null;
  onSelectEMI: (emi: EMIOption) => void;
}

export const EMICalculator: React.FC<EMICalculatorProps> = ({
  productPrice,
  zeroCostAvailable,
  selectedEMI,
  onSelectEMI,
}) => {
  const [plans, setPlans] = useState<EMIOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDetailedBreakdown, setShowDetailedBreakdown] = useState(false);

  useEffect(() => {
    async function loadPlans() {
      setLoading(true);
      try {
        const generated = await ApiService.getEMIOptions(productPrice, zeroCostAvailable);
        setPlans(generated);
        const defaultPlan = generated.find((p) => p.popular) || generated[1] || generated[0];
        if (defaultPlan && (!selectedEMI || !generated.find((p) => p.tenureMonths === selectedEMI.tenureMonths))) {
          onSelectEMI(defaultPlan);
        }
      } catch (err) {
        console.error('Failed to load EMI plans', err);
      } finally {
        setLoading(false);
      }
    }
    loadPlans();
  }, [productPrice, zeroCostAvailable]);

  if (loading) {
    return (
      <div className="space-y-3 p-4 bg-white border border-[#FCE7EE] rounded-2xl">
        <Skeleton className="h-5 w-40" />
        <div className="grid grid-cols-3 gap-2">
          <Skeleton className="h-20 rounded-xl" />
          <Skeleton className="h-20 rounded-xl" />
          <Skeleton className="h-20 rounded-xl" />
        </div>
      </div>
    );
  }

  const currentPlan = selectedEMI || plans[0];
  const breakdown = currentPlan ? calculateEMIBreakdown(productPrice, currentPlan) : null;

  return (
    <div className="space-y-4 p-4 bg-white border border-rose-200 rounded-2xl shadow-card">
      {/* EMI Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              1Fi Smart EMI Plans
            </h4>
            <p className="text-[11px] text-rose-700 font-medium">Backed by your Mutual Funds portfolio</p>
          </div>
        </div>

        <span className="text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full uppercase">
          ₹0 Down Payment
        </span>
      </div>

      {/* Tenure Selection Grid */}
      <div className="grid grid-cols-3 gap-2">
        {plans.map((plan) => {
          const isSelected = currentPlan?.tenureMonths === plan.tenureMonths;

          return (
            <button
              key={plan.tenureMonths}
              onClick={() => onSelectEMI(plan)}
              className={`relative flex flex-col items-center justify-between p-3 rounded-xl border text-center transition-all ${
                isSelected
                  ? 'bg-rose-50 border-rose-500 shadow-sm text-slate-900 ring-1 ring-rose-500'
                  : 'bg-white border-[#FCE7EE] text-slate-700 hover:border-rose-300 hover:bg-rose-50/50'
              }`}
            >
              {/* Badge for 0% / Popular */}
              {plan.popular && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-500 text-white font-extrabold text-[8px] px-1.5 py-0.2 rounded-full uppercase tracking-tight shadow-sm">
                  Popular
                </span>
              )}
              {plan.isNoCost && !plan.popular && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-rose-600 text-white font-extrabold text-[8px] px-1.5 py-0.2 rounded-full uppercase tracking-tight shadow-sm">
                  0% EMI
                </span>
              )}

              <div className="text-[11px] font-semibold text-slate-500 mt-1">
                {plan.tenureMonths} Months
              </div>

              <div className="text-sm font-extrabold text-slate-900 my-1">
                {formatINR(plan.monthlyAmount)}
                <span className="text-[10px] font-normal text-slate-500">/mo</span>
              </div>

              <div className="text-[10px] font-semibold">
                {plan.isNoCost ? (
                  <span className="text-rose-700 font-bold">0% Interest</span>
                ) : (
                  <span className="text-slate-500">{plan.annualInterestRate}% p.a.</span>
                )}
              </div>

              {isSelected && (
                <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-sm">
                  <Check className="w-2.5 h-2.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Plan Summary & Mutual Fund Advantage */}
      {breakdown && (
        <div className="space-y-3 pt-2">
          {/* 1Fi Wealth Protection Banner */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-rose-50/80 border border-rose-200 text-xs text-slate-700">
            <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-rose-900">1Fi Wealth Advantage: </span>
              Your mutual funds continue earning compound returns while you shop in flexible EMIs without liquidating investments.
            </div>
          </div>

          {/* Toggle Full Breakdown */}
          <button
            onClick={() => setShowDetailedBreakdown(!showDetailedBreakdown)}
            className="w-full flex items-center justify-between text-xs text-slate-600 hover:text-slate-900 py-1 font-semibold transition"
          >
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-rose-600" />
              View EMI & Fee Calculation Breakdown
            </span>
            {showDetailedBreakdown ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {showDetailedBreakdown && (
            <div className="space-y-2 p-3 bg-rose-50/40 rounded-xl border border-[#FCE7EE] text-xs text-slate-700 animate-slide-up">
              <div className="flex justify-between py-1 border-b border-[#FCE7EE]">
                <span className="text-slate-500">Total Product Price</span>
                <span className="font-semibold text-slate-900">{formatINR(breakdown.productPrice)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FCE7EE]">
                <span className="text-slate-500">Down Payment</span>
                <span className="font-semibold text-rose-700">₹0 (Zero)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FCE7EE]">
                <span className="text-slate-500">Tenure</span>
                <span className="font-semibold text-slate-900">{breakdown.tenureMonths} Months</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FCE7EE]">
                <span className="text-slate-500">Annual Interest Rate</span>
                <span className="font-semibold text-slate-900">
                  {breakdown.annualInterestRate === 0 ? '0% (No-Cost)' : `${breakdown.annualInterestRate}% p.a.`}
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#FCE7EE]">
                <span className="text-slate-500">Processing Fee</span>
                <span className="font-semibold text-rose-700">₹0 (Waived for 1Fi users)</span>
              </div>
              {breakdown.netSavings > 0 && (
                <div className="flex justify-between py-1 border-b border-[#FCE7EE] text-rose-700 font-bold">
                  <span>Total Savings on 1Fi</span>
                  <span>{formatINR(breakdown.netSavings)}</span>
                </div>
              )}
              <div className="flex justify-between py-1 pt-2 font-bold text-slate-900">
                <span>Monthly Auto-Debit Amount</span>
                <span className="text-rose-700 text-sm font-extrabold">{formatINR(breakdown.monthlyEMI)} / mo</span>
              </div>
              <div className="text-[10px] text-slate-500 italic pt-1">
                *First EMI auto-debit begins on {breakdown.firstEMIDate} via linked bank account.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
