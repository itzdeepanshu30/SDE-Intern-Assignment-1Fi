import { CategoryItem } from '../types/product';

export const MOCK_CATEGORIES: CategoryItem[] = [
  {
    id: 'cat-all',
    key: 'all',
    name: 'All Items',
    icon: 'Sparkles',
    count: 24,
    popularBrands: ['Apple', 'Samsung', 'Sony', 'OnePlus', 'Dell', 'Asus', 'Bose']
  },
  {
    id: 'cat-phones',
    key: 'smartphones',
    name: 'Smartphones',
    icon: 'Smartphone',
    count: 8,
    popularBrands: ['Apple', 'Samsung', 'OnePlus', 'Google Pixel', 'Nothing']
  },
  {
    id: 'cat-laptops',
    key: 'laptops',
    name: 'Laptops',
    icon: 'Laptop',
    count: 5,
    popularBrands: ['Apple', 'Dell', 'HP', 'Asus ROG', 'Lenovo']
  },
  {
    id: 'cat-audio',
    key: 'audio',
    name: 'Audio & Sound',
    icon: 'Headphones',
    count: 4,
    popularBrands: ['Sony', 'Bose', 'Apple AirPods', 'Sennheiser', 'Marshall']
  },
  {
    id: 'cat-wearables',
    key: 'wearables',
    name: 'Smartwatches',
    icon: 'Watch',
    count: 4,
    popularBrands: ['Apple Watch', 'Samsung Galaxy', 'Garmin', 'Fossil']
  },
  {
    id: 'cat-tablets',
    key: 'tablets',
    name: 'Tablets',
    icon: 'Tablet',
    count: 3,
    popularBrands: ['Apple iPad', 'Samsung Tab', 'OnePlus Pad']
  }
];
