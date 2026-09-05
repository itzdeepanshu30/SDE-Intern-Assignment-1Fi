import React from 'react';
import { ToastProvider } from './context/ToastContext';
import { ShopProvider, useShop } from './context/ShopContext';
import { DeviceFrame } from './components/common/DeviceFrame';
import { Header } from './components/common/Header';
import { BottomNav } from './components/common/BottomNav';
import { ShopContainer } from './components/shop/ShopContainer';
import { HomeView } from './components/views/HomeView';
import { PortfolioView } from './components/views/PortfolioView';
import { LoansView } from './components/views/LoansView';
import { ProfileView } from './components/views/ProfileView';
import { ProductDetailModal } from './components/product/ProductDetailModal';
import { CheckoutModal } from './components/checkout/CheckoutModal';

const AppContent: React.FC = () => {
  const { bottomNav } = useShop();

  return (
    <DeviceFrame>
      <div className="flex flex-col min-h-full">
        {/* App Header */}
        <Header />

        {/* Dynamic Nav View Content */}
        <div className="flex-1 pb-16">
          {bottomNav === 'shop' && <ShopContainer />}
          {bottomNav === 'home' && <HomeView />}
          {bottomNav === 'portfolio' && <PortfolioView />}
          {bottomNav === 'loans' && <LoansView />}
          {bottomNav === 'profile' && <ProfileView />}
        </div>

        {/* Global Modals & Drawers */}
        <ProductDetailModal />
        <CheckoutModal />

        {/* Mobile App Bottom Navigation */}
        <BottomNav />
      </div>
    </DeviceFrame>
  );
};

export const App: React.FC = () => {
  return (
    <ToastProvider>
      <ShopProvider>
        <AppContent />
      </ShopProvider>
    </ToastProvider>
  );
};

export default App;
