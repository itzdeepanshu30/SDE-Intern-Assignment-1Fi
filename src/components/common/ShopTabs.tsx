import React from 'react';
import { ShopTopTab } from '../../types/navigation';
import { useShop } from '../../context/ShopContext';
import { Sparkles, Store, Flame } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TabItem {
  id: ShopTopTab;
  label: string;
  icon: React.ElementType;
  badge?: string;
  isNew?: boolean;
}

const TABS: TabItem[] = [
  {
    id: 'top-brands',
    label: 'Top Brands',
    icon: Flame,
  },
  {
    id: 'nearby-stores',
    label: 'Nearby Stores',
    icon: Store,
  },
  {
    id: '1fi-marketplace',
    label: '1Fi Marketplace',
    icon: Sparkles,
    badge: '0% EMI',
    isNew: true
  }
];

export const ShopTabs: React.FC = () => {
  const { topTab, setTopTab } = useShop();

  return (
    <div className="w-full bg-[#FFEBF2] border-b border-[#FFD1DE] sticky top-[57px] z-20 backdrop-blur-md px-4 py-2 shadow-subtle">
      <div className="flex items-center gap-1.5 p-1 bg-[#FFE2EC] border border-[#FFD1DE] rounded-xl overflow-x-auto no-scrollbar">
        {TABS.map((tab) => {
          const isActive = topTab === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setTopTab(tab.id)}
              className={cn(
                'flex-1 min-w-[115px] relative flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold transition-all duration-200 select-none',
                isActive
                  ? 'bg-white text-pink-900 shadow-sm border border-[#FFD1DE] font-bold'
                  : 'text-slate-500 hover:text-pink-950 hover:bg-white/60 border border-transparent'
              )}
            >
              <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-pink-600' : 'text-slate-400')} />
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={cn(
                    'text-[9px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider',
                    isActive
                      ? 'bg-pink-600 text-white shadow-sm'
                      : 'bg-pink-200/90 text-pink-900'
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
