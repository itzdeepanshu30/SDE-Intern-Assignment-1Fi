import React from 'react';
import { useShop } from '../../context/ShopContext';
import { ShopTabs } from '../common/ShopTabs';
import { MarketplaceView } from './MarketplaceView';
import { TopBrandsPlaceholder } from './TopBrandsPlaceholder';
import { NearbyStoresPlaceholder } from './NearbyStoresPlaceholder';

export const ShopContainer: React.FC = () => {
  const { topTab } = useShop();

  return (
    <div className="w-full flex flex-col min-h-full">
      {/* 3 Top Options: Top Brands, Nearby Stores, 1Fi Marketplace */}
      <ShopTabs />

      {/* Render active section */}
      <main className="flex-1">
        {topTab === '1fi-marketplace' && <MarketplaceView />}
        {topTab === 'top-brands' && <TopBrandsPlaceholder />}
        {topTab === 'nearby-stores' && <NearbyStoresPlaceholder />}
      </main>
    </div>
  );
};
