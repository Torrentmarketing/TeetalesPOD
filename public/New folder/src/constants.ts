
import { Design, ColorOption } from './types';

export const COLORS: ColorOption[] = [
  { name: 'Black', value: 'black', hex: '#000000' },
  { name: 'White', value: 'white', hex: '#FFFFFF' },
  { name: 'Navy', value: 'navy', hex: '#000080' },
  { name: 'Red', value: 'red', hex: '#FF0000' },
  { name: 'Forest Green', value: 'green', hex: '#013220' },
  { name: 'Heather Gray', value: 'gray', hex: '#808080' },
];

export const DESIGNS: Design[] = [
  // Motivational
  { id: 'm1', name: 'Stay Hungry', category: 'Motivational', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=m1' },
  { id: 'm2', name: 'Keep Going', category: 'Motivational', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=m2' },
  { id: 'm3', name: 'Dream Big', category: 'Motivational', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=m3' },
  { id: 'm4', name: 'Focus', category: 'Motivational', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=m4' },
  { id: 'm5', name: 'Limitless', category: 'Motivational', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=m5' },
  
  // Funny
  { id: 'f1', name: 'Error 404', category: 'Funny', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=f1' },
  { id: 'f2', name: 'Coffee First', category: 'Funny', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=f2' },
  { id: 'f3', name: 'Not Today', category: 'Funny', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=f3' },
  { id: 'f4', name: 'Sarcasm Loading', category: 'Funny', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=f4' },
  { id: 'f5', name: 'Lazy Mode', category: 'Funny', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=f5' },

  // Minimal
  { id: 'min1', name: 'Circle', category: 'Minimal', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=min1' },
  { id: 'min2', name: 'Triangle', category: 'Minimal', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=min2' },
  { id: 'min3', name: 'Wave', category: 'Minimal', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=min3' },
  { id: 'min4', name: 'Dot', category: 'Minimal', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=min4' },
  { id: 'min5', name: 'Line', category: 'Minimal', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=min5' },

  // Trendy
  { id: 't1', name: 'Cyberpunk', category: 'Trendy', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=t1' },
  { id: 't2', name: 'Retro Wave', category: 'Trendy', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=t2' },
  { id: 't3', name: 'Abstract', category: 'Trendy', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=t3' },
  { id: 't4', name: 'Neon Soul', category: 'Trendy', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=t4' },
  { id: 't5', name: 'Urban Flow', category: 'Trendy', image: 'https://api.dicebear.com/7.x/shapes/svg?seed=t5' },
];

export const PRODUCT_IMAGES = {
  tshirt: {
    black: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    white: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800',
    navy: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
    red: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800',
    green: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80&w=800',
    gray: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
  },
  hoodie: {
    black: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    white: 'https://images.unsplash.com/photo-1556821923-669e9116f57b?auto=format&fit=crop&q=80&w=800',
    navy: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800',
    red: 'https://images.unsplash.com/photo-1513373319109-eb154073eb0b?auto=format&fit=crop&q=80&w=800',
    green: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800',
    gray: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800', // Fallback
  }
};
