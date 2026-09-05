import React from 'react';
import { Home, PieChart, ShoppingBag, CreditCard, User } from 'lucide-react';
import { AppBottomNav } from '../../types/navigation';
import { useShop } from '../../context/ShopContext';
import { cn } from '../../utils/cn';

interface NavItem {
  id: AppBottomNav;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'portfolio', label: 'Portfolio', icon: PieChart },
  { id: 'shop', label: 'Shop', icon: ShoppingBag },
  { id: 'loans', label: 'Loans', icon: CreditCard },
  { id: 'profile', label: 'Profile', icon: User },
];

export const BottomNav: React.FC = () => {
  const { bottomNav, setBottomNav, orders } = useShop();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-t border-[#FFD1DE] py-1.5 px-4 max-w-lg mx-auto md:max-w-none shadow-[0_-4px_20px_rgba(219,39,119,0.08)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = bottomNav === item.id;
          const Icon = item.icon;
          const badgeCount = item.id === 'loans' ? orders.length : 0;

          return (
            <button
              key={item.id}
              onClick={() => setBottomNav(item.id)}
              className={cn(
                'flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all relative',
                isActive ? 'text-pink-700 font-bold' : 'text-slate-400 hover:text-pink-900'
              )}
            >
              <div className="relative">
                <Icon
                  className={cn(
                    'w-5 h-5 transition-transform duration-200',
                    isActive && 'scale-110 text-pink-600'
                  )}
                />
                {badgeCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-pink-600 text-white font-bold text-[9px] rounded-full flex items-center justify-center shadow-sm">
                    {badgeCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">{item.label}</span>
              {isActive && (
                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-0.5 shadow-sm" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
