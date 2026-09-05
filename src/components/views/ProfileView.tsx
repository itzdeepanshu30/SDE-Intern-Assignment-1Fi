import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ShieldCheck, Building2, Bell, FileText, Lock, ChevronRight } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { userProfile } = useShop();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 pb-24 space-y-4 animate-fade-in">
      <div className="flex items-center gap-3 p-4 bg-white border border-[#FCE7EE] rounded-3xl shadow-card">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-pink-500 text-white font-black text-lg flex items-center justify-center shadow-pink-glow">
          DS
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-sm text-slate-900">Deepanshu Singhal</h3>
          <p className="text-xs text-slate-500">+91 98765 43210</p>
          <div className="inline-flex items-center gap-1 text-[10px] text-rose-800 font-bold mt-1 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
            <ShieldCheck className="w-3 h-3 text-rose-600" />
            KYC Verified • CIBIL {userProfile?.creditScore || 785}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          Financial Setup
        </h4>
        <div className="space-y-1 bg-white border border-[#FCE7EE] rounded-2xl overflow-hidden divide-y divide-rose-50 shadow-sm">
          <div className="p-3.5 flex items-center justify-between hover:bg-rose-50/50 cursor-pointer">
            <div className="flex items-center gap-3 text-xs">
              <Building2 className="w-4 h-4 text-rose-600" />
              <div>
                <div className="font-bold text-slate-900">Primary Bank Account</div>
                <div className="text-[11px] text-slate-500">
                  {userProfile?.linkedBankAccount.bankName} (•••• {userProfile?.linkedBankAccount.accountNumberLast4})
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>

          <div className="p-3.5 flex items-center justify-between hover:bg-rose-50/50 cursor-pointer">
            <div className="flex items-center gap-3 text-xs">
              <Lock className="w-4 h-4 text-rose-600" />
              <div>
                <div className="font-bold text-slate-900">Mutual Fund Lien Mandate</div>
                <div className="text-[11px] text-slate-500">1Fi POS Collateral Active</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          App Settings & Legal
        </h4>
        <div className="space-y-1 bg-white border border-[#FCE7EE] rounded-2xl overflow-hidden divide-y divide-rose-50 text-xs shadow-sm">
          <div className="p-3.5 flex items-center justify-between hover:bg-rose-50/50 cursor-pointer">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-slate-500" />
              <span className="font-semibold text-slate-800">1Fi Loan Terms & Fair Practice Code</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
          <div className="p-3.5 flex items-center justify-between hover:bg-rose-50/50 cursor-pointer">
            <div className="flex items-center gap-3">
              <Bell className="w-4 h-4 text-slate-500" />
              <span className="font-semibold text-slate-800">EMI Auto-Debit Notifications</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
