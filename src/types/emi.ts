export interface EMIOption {
  tenureMonths: number;
  monthlyAmount: number;
  annualInterestRate: number; // e.g. 0 for No-Cost, 12% for standard
  isNoCost: boolean;
  totalInterest: number;
  totalAmount: number;
  processingFee: number;
  downPayment: number;
  cashback: number;
  collateralLTVPercent: number; // Loan To Value against Mutual Funds portfolio (e.g. 50%)
  popular?: boolean;
  recommended?: boolean;
}

export interface EMICalculationResult {
  productPrice: number;
  downPayment: number;
  loanAmount: number;
  tenureMonths: number;
  monthlyEMI: number;
  annualInterestRate: number;
  totalInterestPayable: number;
  totalRepayment: number;
  processingFee: number;
  netSavings: number; // Savings from No-Cost EMI or instant discount
  firstEMIDate: string;
  portfolioBackingRequired: number; // Mutual fund units pledged
}

export interface UserFinancialProfile {
  availablePortfolioLimit: number;
  totalMutualFundValue: number;
  usedCreditLimit: number;
  creditScore: number;
  eligibleForZeroCost: boolean;
  linkedBankAccount: {
    bankName: string;
    accountNumberLast4: string;
    autoDebitActive: boolean;
  };
}
