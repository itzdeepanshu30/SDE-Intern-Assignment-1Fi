import { Product, ProductVariant } from './product';
import { EMIOption } from './emi';

export interface ShippingAddress {
  fullName: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  type: 'home' | 'work' | 'other';
}

export interface OrderItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
  selectedEMI: EMIOption;
}

export interface Order {
  id: string;
  createdAt: string;
  items: OrderItem[];
  totalOrderValue: number;
  totalDownPayment: number;
  monthlyTotalEMI: number;
  shippingAddress: ShippingAddress;
  status: 'approved' | 'processing' | 'shipped' | 'delivered';
  loanAgreementId: string;
  portfolioLienRef: string;
  estimatedDeliveryDate: string;
}
