import React from 'react';
import { useShop } from '../../context/ShopContext';
import { Sparkles, Smartphone, Laptop, Headphones, Watch, Tablet } from 'lucide-react';
import { cn } from '../../utils/cn';

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Tablet
};

export const CategoryPills: React.FC = () => {
  const { categories, filters, setFilter } = useShop();

  return (
    <div className="w-full my-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Browse Categories</h3>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((cat) => {
          const isActive = filters.category === cat.key;
          const IconComponent = ICON_MAP[cat.icon] || Sparkles;

          return (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.key)}
              className={cn(
                'flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border shrink-0',
                isActive
                  ? 'bg-rose-600 text-white border-rose-600 font-bold shadow-pink-glow scale-105'
                  : 'bg-white text-slate-700 border-[#FCE7EE] hover:border-rose-300 hover:bg-rose-50/50 shadow-sm'
              )}
            >
              <IconComponent className={cn('w-4 h-4', isActive ? 'text-white' : 'text-rose-600')} />
              <span>{cat.name}</span>
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.2 rounded-full font-bold',
                  isActive ? 'bg-rose-800 text-white' : 'bg-rose-50 text-rose-700'
                )}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
