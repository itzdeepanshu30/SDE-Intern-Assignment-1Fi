import React, { useState } from 'react';
import { Product } from '../../types/product';
import { ChevronDown, ChevronUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SpecsAccordionProps {
  product: Product;
}

export const SpecsAccordion: React.FC<SpecsAccordionProps> = ({ product }) => {
  const [openSection, setOpenSection] = useState<string | null>('highlights');

  const toggle = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="space-y-2 text-xs">
      {/* 1. Highlights */}
      <div className="border border-[#FCE7EE] rounded-xl overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => toggle('highlights')}
          className="w-full flex items-center justify-between p-3.5 font-bold text-slate-800 hover:bg-rose-50/50 text-left transition"
        >
          <span>Key Feature Highlights</span>
          {openSection === 'highlights' ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>
        {openSection === 'highlights' && (
          <div className="p-3.5 pt-0 space-y-2 border-t border-[#FCE7EE] text-slate-700 animate-slide-up">
            {product.highlights.map((hl, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900">{hl.label}: </span>
                  <span className="text-slate-600">{hl.value}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 2. Full Technical Specifications */}
      <div className="border border-[#FCE7EE] rounded-xl overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => toggle('specs')}
          className="w-full flex items-center justify-between p-3.5 font-bold text-slate-800 hover:bg-rose-50/50 text-left transition"
        >
          <span>Detailed Specifications</span>
          {openSection === 'specs' ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>
        {openSection === 'specs' && (
          <div className="p-3.5 pt-0 space-y-3 border-t border-[#FCE7EE] text-slate-700 animate-slide-up">
            {Object.entries(product.specifications).map(([group, specs]) => (
              <div key={group} className="space-y-1.5">
                <div className="font-bold text-rose-800 text-[11px] uppercase tracking-wider">
                  {group}
                </div>
                <div className="space-y-1 bg-rose-50/30 p-2.5 rounded-lg border border-[#FCE7EE]">
                  {Object.entries(specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1 border-b border-[#FCE7EE] last:border-none">
                      <span className="text-slate-500 font-medium">{key}</span>
                      <span className="font-semibold text-slate-900 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. Warranty & Seller Info */}
      <div className="border border-[#FCE7EE] rounded-xl overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => toggle('seller')}
          className="w-full flex items-center justify-between p-3.5 font-bold text-slate-800 hover:bg-rose-50/50 text-left transition"
        >
          <span>Warranty & Verified Seller</span>
          {openSection === 'seller' ? (
            <ChevronUp className="w-4 h-4 text-slate-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-500" />
          )}
        </button>
        {openSection === 'seller' && (
          <div className="p-3.5 pt-0 space-y-3 border-t border-[#FCE7EE] text-slate-700 animate-slide-up">
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{product.warranty}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-rose-50/30 border border-[#FCE7EE]">
              <div>
                <div className="font-bold text-slate-900">{product.seller.name}</div>
                <div className="text-[11px] text-rose-700 font-medium">{product.seller.badge}</div>
              </div>
              <div className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                ★ {product.seller.rating}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
