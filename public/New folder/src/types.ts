
export type ProductType = 'tshirt' | 'hoodie';

export interface Design {
  id: string;
  name: string;
  category: 'Motivational' | 'Funny' | 'Minimal' | 'Trendy';
  image: string;
}

export interface ColorOption {
  name: string;
  value: string;
  hex: string;
}

export interface CustomizationState {
  productType: ProductType;
  color: ColorOption;
  design: Design | null;
  customImage: string | null;
  size: string;
  scale: number;
  position: { x: number; y: number };
}
