import { EMIOption, EMICalculationResult } from '../types/emi';
import { getNextEMIDate } from './formatters';

/**
 * Standard EMI Tenures supported by 1Fi Marketplace
 */
export const AVAILABLE_TENURES = [3, 6, 9, 12, 18, 24] as const;

/**
 * Generates available EMI plans for a specific product amount
 */
export function generateEMIPlans(price: number, zeroCostAvailable: boolean = true): EMIOption[] {
  return AVAILABLE_TENURES.map((months) => {
    // 3, 6, 9, and 12 months qualify for No-Cost 0% EMI if enabled on product
    const isNoCost = zeroCostAvailable && months <= 12;
    const annualInterestRate = isNoCost ? 0 : months <= 18 ? 11.5 : 13.5;
    
    let monthlyAmount: number;
    let totalInterest: number;
    let totalAmount: number;

    if (isNoCost || annualInterestRate === 0) {
      monthlyAmount = Math.round(price / months);
      totalInterest = 0;
      totalAmount = price;
    } else {
      const monthlyRate = annualInterestRate / (12 * 100);
      // Standard Equated Monthly Installment PMT formula: P * r * (1+r)^n / ((1+r)^n - 1)
      const emiFactor = Math.pow(1 + monthlyRate, months);
      monthlyAmount = Math.round((price * monthlyRate * emiFactor) / (emiFactor - 1));
      totalAmount = monthlyAmount * months;
      totalInterest = totalAmount - price;
    }

    // 1Fi special perks: Zero processing fee for 1Fi users, ₹0 down payment
    const processingFee = 0;
    const downPayment = 0;
    const cashback = isNoCost ? (months === 6 ? Math.min(1500, Math.round(price * 0.03)) : 0) : 0;
    const collateralLTVPercent = 50; // 50% LTV against mutual funds

    return {
      tenureMonths: months,
      monthlyAmount,
      annualInterestRate,
      isNoCost,
      totalInterest,
      totalAmount,
      processingFee,
      downPayment,
      cashback,
      collateralLTVPercent,
      popular: months === 6,
      recommended: months === 12,
    };
  });
}

/**
 * Computes full calculation breakdown for a selected tenure
 */
export function calculateEMIBreakdown(price: number, plan: EMIOption): EMICalculationResult {
  const loanAmount = price - plan.downPayment;
  const standardInterestWithoutDiscount = Math.round(price * (0.13 / 12) * plan.tenureMonths);
  const netSavings = plan.isNoCost ? standardInterestWithoutDiscount + plan.cashback : plan.cashback;

  return {
    productPrice: price,
    downPayment: plan.downPayment,
    loanAmount,
    tenureMonths: plan.tenureMonths,
    monthlyEMI: plan.monthlyAmount,
    annualInterestRate: plan.annualInterestRate,
    totalInterestPayable: plan.totalInterest,
    totalRepayment: plan.totalAmount,
    processingFee: plan.processingFee,
    netSavings,
    firstEMIDate: getNextEMIDate(),
    portfolioBackingRequired: Math.round(price * 1.5), // 1.5x mutual fund collateral backing
  };
}
