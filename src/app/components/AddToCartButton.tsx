import React from 'react';
import Image from 'next/image';
import cartIcon from './../assets/icons/icon-cart-buttons.svg';

interface AddToCartButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  itemCount: number;
  isAdded: boolean;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick, itemCount, isAdded }) => {
  return (
    <button
      onClick={onClick}
      className={`${isAdded ? 'added' : 'bg-blue-500'} text-white w-full py-2 rounded-lg hover:added transition flex items-center justify-center text-xs md:text-sm`}
    >
      <Image 
        src={cartIcon}
        alt="Carrinho"
        width={16}
        height={16}
        className="mr-1"
      />
      <span className="mr-2">{itemCount}</span>
      <span className='font-semibold uppercase ml-1 text-xs'>{'Adicionar ao Carrinho'}</span>
    </button>
  );
};

export default AddToCartButton;
