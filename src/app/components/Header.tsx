import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import cartIcon from '../assets/icons/cart.svg';
import { RootState } from '../redux/store';

const Header: React.FC = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);

  return (
    <header className="background text-white pt-8 pb-0 sm:-mb-0 sm:py-4 -mb-2">
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-0 flex justify-between items-center">
        <h1 className="text-xl font-bold">WeMovies</h1>
        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex flex-col justify-center items-end">
            <span className="text-sm font-medium">Meu Carrinho</span>
            <span className="text-sm colorTextSecondary">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
          </div>

          <div className="sm:hidden">
            <span className="text-xs colorTextSecondary mr-1">{totalItems} {totalItems === 1 ? 'item' : 'itens'}</span>
          </div>

          <Link href="/checkout">
            <Image 
              src={cartIcon}
              alt="Carrinho"
              className="cart-icon w-10 h-10 cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
