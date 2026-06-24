
import React from 'react';
import { motion } from 'motion/react';
import { CustomizationState } from '../types';
import { PRODUCT_IMAGES } from '../constants';

interface Props {
  state: CustomizationState;
}

export const ProductMockup: React.FC<Props> = ({ state }) => {
  const productImg = (PRODUCT_IMAGES as any)[state.productType][state.color.value];
  const designImg = state.customImage || state.design?.image;

  return (
    <div className="relative w-full aspect-square bg-white/5 rounded-3xl overflow-hidden flex items-center justify-center border border-white/10">
      <img 
        src={productImg} 
        alt="Product Base" 
        className="w-full h-full object-cover mix-blend-normal"
        referrerPolicy="no-referrer"
      />
      
      {designImg && (
        <motion.div
          layoutId="design-preview"
          className="absolute pointer-events-none"
          style={{
            width: `${state.scale * 30}%`,
            top: `${50 + state.position.y}%`,
            left: `${50 + state.position.x}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img 
            src={designImg} 
            alt="Design Overlay" 
            className="w-full h-auto opacity-90 mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      )}

      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white/70 uppercase tracking-widest">
        Live Preview
      </div>
    </div>
  );
};
