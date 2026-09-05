import React from 'react';
import { Product, ProductVariant } from '../../types/product';
import { formatINR } from '../../utils/formatters';
import { Check } from 'lucide-react';

interface VariantSelectorProps {
  product: Product;
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({
  product,
  selectedVariant,
  onSelectVariant,
}) => {
  if (product.variants.length <= 1) return null;

  return (
    <div className="space-y-3 p-4 bg-white border border-[#FCE7EE] rounded-2xl shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Select Variant / Configuration
        </h4>
        <span className="text-xs font-bold text-rose-700">
          {formatINR(selectedVariant.price)}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {product.variants.map((variant) => {
          const isSelected = selectedVariant.id === variant.id;

          return (
            <button
              key={variant.id}
              onClick={() => onSelectVariant(variant)}
              className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-rose-50 border-rose-500 text-slate-900 shadow-sm ring-1 ring-rose-500'
                  : 'bg-white border-[#FCE7EE] text-slate-700 hover:border-rose-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {variant.color && (
                  <span
                    className="w-4 h-4 rounded-full border border-slate-300 shrink-0 shadow-sm"
                    style={{ backgroundColor: variant.color.hex }}
                  />
                )}
                <div>
                  <div className="text-xs font-bold leading-tight">{variant.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">
                    {formatINR(variant.price)}
                  </div>
                </div>
              </div>

              {isSelected && (
                <div className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
