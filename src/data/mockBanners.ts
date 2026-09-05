import { BannerItem } from '../types/product';

export const MOCK_BANNERS: BannerItem[] = [
  {
    id: 'banner-1',
    title: 'Apple iPhone 16 Pro',
    subtitle: 'Zero Down Payment • 0% Interest up to 12 Months',
    tag: '1Fi EXCLUSIVE DEAL',
    ctaText: 'Shop with 1Fi EMI',
    imageUrl: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-emerald-600/90 to-teal-900/90',
    targetCategory: 'smartphones',
    productId: 'prod-iphone-16-pro'
  },
  {
    id: 'banner-2',
    title: 'MacBook Pro M3 Max',
    subtitle: 'Unlock Supercharged Productivity with ₹0 Processing Fee',
    tag: 'POWER UP YOUR WORK',
    ctaText: 'Explore Plans',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-blue-600/90 to-slate-950/90',
    targetCategory: 'laptops',
    productId: 'prod-macbook-pro-m3'
  },
  {
    id: 'banner-3',
    title: 'Sony WH-1000XM5 & Bose',
    subtitle: 'Industry-leading noise cancellation starting @ ₹2,499/mo',
    tag: 'AUDIO BLISS',
    ctaText: 'Listen Now',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-purple-600/90 to-indigo-950/90',
    targetCategory: 'audio',
    productId: 'prod-sony-wh1000xm5'
  }
];
