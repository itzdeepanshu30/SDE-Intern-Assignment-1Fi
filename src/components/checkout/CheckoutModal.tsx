import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { ShippingAddress } from '../../types/order';
import { formatINR, getNextEMIDate } from '../../utils/formatters';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutOpen,
    closeCheckout,
    checkoutProduct,
    checkoutVariant,
    checkoutEMI,
    userProfile,
    processOrder,
    closeProductDetail
  } = useShop();

  const [step, setStep] = useState<'address' | 'loan-review' | 'success'>('address');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrderRef, setCompletedOrderRef] = useState<any>(null);

  // Draft Address State
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: 'Deepanshu Singhal',
    phone: '+91 98765 43210',
    street: 'Flat 402, High-Tech Towers, Phase 2',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560100',
    type: 'home'
  });

  if (!isCheckoutOpen || !checkoutProduct || !checkoutVariant || !checkoutEMI) return null;

  const handleNextToLoanReview = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loan-review');
  };

  const handleConfirmAndSignLoan = async () => {
    setIsProcessing(true);
    const order = await processOrder(address);
    setIsProcessing(false);

    if (order) {
      setCompletedOrderRef(order);
      setStep('success');
      // Trigger festive celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleFinish = () => {
    closeCheckout();
    closeProductDetail();
    setStep('address');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-[#FFF5F8] border border-[#FCE7EE] rounded-t-3xl sm:rounded-3xl w-full max-w-xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#FCE7EE] bg-white">
          <div className="flex items-center gap-2">
            {step === 'loan-review' && (
              <button
                onClick={() => setStep('address')}
                className="w-7 h-7 rounded-full bg-rose-50 text-slate-600 flex items-center justify-center hover:bg-rose-100 mr-1"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                {step === 'address'
                  ? 'Delivery Address'
                  : step === 'loan-review'
                  ? '1Fi Instant Loan Agreement'
                  : 'Order Approved!'}
              </h3>
              <p className="text-[10px] text-rose-700 font-bold">1Fi Smart POS Financing</p>
            </div>
          </div>

          {step !== 'success' && (
            <button
              onClick={closeCheckout}
              className="w-8 h-8 rounded-full bg-rose-50 text-slate-500 hover:text-slate-800 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 no-scrollbar">
          {/* STEP 1: ADDRESS */}
          {step === 'address' && (
            <form onSubmit={handleNextToLoanReview} className="space-y-4">
              {/* Product mini summary */}
              <div className="flex items-center gap-3 p-3 bg-white border border-[#FCE7EE] rounded-xl shadow-sm">
                <img
                  src={checkoutVariant.images?.[0] || checkoutProduct.thumbnail}
                  alt={checkoutProduct.title}
                  className="w-12 h-12 rounded-lg object-contain bg-[#FFF8FA] p-1 border border-rose-100"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-900 truncate">{checkoutProduct.title}</div>
                  <div className="text-[11px] text-slate-500">{checkoutVariant.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-rose-700">
                    {formatINR(checkoutEMI.monthlyAmount)}/mo
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">{checkoutEMI.tenureMonths} Mos EMI</div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Shipping Details
                </h4>

                <div className="space-y-2 text-xs">
                  <div>
                    <label className="block text-[11px] text-slate-600 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={address.fullName}
                      onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                      className="w-full bg-white border border-[#FCE7EE] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 font-semibold mb-1">Phone Number (Linked to 1Fi)</label>
                    <input
                      type="tel"
                      required
                      value={address.phone}
                      onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                      className="w-full bg-white border border-[#FCE7EE] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 font-semibold mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={address.street}
                      onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      className="w-full bg-white border border-[#FCE7EE] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 shadow-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] text-slate-600 font-semibold mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                        className="w-full bg-white border border-[#FCE7EE] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-slate-600 font-semibold mb-1">PIN Code</label>
                      <input
                        type="text"
                        required
                        value={address.pincode}
                        onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                        className="w-full bg-white border border-[#FCE7EE] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-pink-glow flex items-center justify-center gap-2 transition active:scale-95"
              >
                <span>Proceed to Loan Sanction</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* STEP 2: LOAN REVIEW & 1Fi AUTOPAY */}
          {step === 'loan-review' && (
            <div className="space-y-4">
              {/* Portfolio Collateral Check */}
              <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-rose-600" />
                    <span className="text-xs font-bold text-rose-900">Portfolio Credit Pre-Approved</span>
                  </div>
                  <span className="text-[10px] font-extrabold bg-rose-200/80 text-rose-800 px-2 py-0.5 rounded-full uppercase">
                    100% Digital
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Your mutual fund portfolio worth{' '}
                  <strong className="text-slate-900">
                    {formatINR(userProfile?.totalMutualFundValue || 485000)}
                  </strong>{' '}
                  qualifies you for <strong className="text-rose-700">₹0 Down Payment</strong> instant loan sanction.
                </p>
              </div>

              {/* Sanction Terms Table */}
              <div className="p-3.5 bg-white border border-[#FCE7EE] rounded-2xl space-y-2 text-xs shadow-sm">
                <div className="flex justify-between py-1 border-b border-rose-100 text-slate-600">
                  <span>Product Amount</span>
                  <span className="text-slate-900 font-bold">{formatINR(checkoutVariant.price)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-rose-100 text-slate-600">
                  <span>Today&apos;s Upfront Payment</span>
                  <span className="text-rose-700 font-bold">₹0.00 (Zero Down Payment)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-rose-100 text-slate-600">
                  <span>EMI Schedule</span>
                  <span className="text-slate-900 font-bold">
                    {checkoutEMI.tenureMonths} Installments of {formatINR(checkoutEMI.monthlyAmount)}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-rose-100 text-slate-600">
                  <span>Interest Rate</span>
                  <span className="text-rose-700 font-bold">
                    {checkoutEMI.isNoCost ? '0.00% (No-Cost EMI)' : `${checkoutEMI.annualInterestRate}% p.a.`}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-rose-100 text-slate-600">
                  <span>Processing & Documentation</span>
                  <span className="text-rose-700 font-bold">₹0.00 (Waived)</span>
                </div>
                <div className="flex justify-between py-1 text-slate-600">
                  <span>First Auto-Debit Date</span>
                  <span className="text-slate-900 font-bold">{getNextEMIDate()}</span>
                </div>
              </div>

              {/* Linked Bank AutoPay info */}
              <div className="flex items-center gap-3 p-3 bg-white border border-[#FCE7EE] rounded-xl text-xs text-slate-700 shadow-sm">
                <Building2 className="w-5 h-5 text-rose-600 shrink-0" />
                <div className="flex-1">
                  <div className="font-bold text-slate-900">
                    Auto-Debit from {userProfile?.linkedBankAccount.bankName} (•••• {userProfile?.linkedBankAccount.accountNumberLast4})
                  </div>
                  <div className="text-[10px] text-rose-700 font-semibold">e-NACH Mandate Active</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-rose-600" />
              </div>

              {/* Agreement checkbox */}
              <div className="flex items-start gap-2 text-xs text-slate-500">
                <Lock className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>
                  By proceeding, you digitally sign the 1Fi Loan Agreement and authorize the creation of a digital lien on eligible mutual fund units.
                </span>
              </div>

              <button
                onClick={handleConfirmAndSignLoan}
                disabled={isProcessing}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-400 text-white font-black text-sm shadow-pink-glow flex items-center justify-center gap-2 transition active:scale-95 disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Digitally Sanctioning Loan...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 fill-current" />
                    <span>e-Sign & Confirm 1Fi EMI Order</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* STEP 3: SUCCESS CELEBRATION */}
          {step === 'success' && completedOrderRef && (
            <div className="text-center space-y-4 py-4 animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-rose-100 border border-rose-200 text-rose-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-900">Loan Approved & Order Placed!</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Your 1Fi Marketplace purchase has been financed with 0% hassle.
                </p>
              </div>

              <div className="p-4 bg-white border border-[#FCE7EE] rounded-2xl text-left space-y-2 text-xs text-slate-700 shadow-sm">
                <div className="flex justify-between py-1 border-b border-rose-100">
                  <span className="text-slate-500">Order Reference</span>
                  <span className="font-mono font-bold text-rose-700">{completedOrderRef.id}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-rose-100">
                  <span className="text-slate-500">Loan Agreement ID</span>
                  <span className="font-mono font-bold text-slate-900">{completedOrderRef.loanAgreementId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-rose-100">
                  <span className="text-slate-500">Monthly EMI</span>
                  <span className="font-bold text-rose-700">
                    {formatINR(completedOrderRef.monthlyTotalEMI)} / mo ({checkoutEMI.tenureMonths} Months)
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-rose-100">
                  <span className="text-slate-500">Estimated Delivery</span>
                  <span className="font-bold text-slate-900">{completedOrderRef.estimatedDeliveryDate}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Delivery To</span>
                  <span className="font-semibold text-slate-900 truncate max-w-[200px]">
                    {address.fullName}, {address.city}
                  </span>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full py-3.5 rounded-2xl bg-rose-600 text-white font-bold text-sm shadow-pink-glow hover:bg-rose-500 transition"
              >
                Back to Marketplace
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
