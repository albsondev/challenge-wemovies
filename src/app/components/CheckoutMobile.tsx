import React from 'react';
import Image from 'next/image';
import { formatPrice } from './../utils/formatPrice';
import plusIcon from './../assets/icons/plus.svg';
import minusIcon from './../assets/icons/minus.svg';
import trashIcon from './../assets/icons/trash.svg';
import { CartItem } from '../types/CartItem';
import Link from 'next/link';

interface CheckoutMobileProps {
  cartItems: CartItem[];
  handleRemoveItem: (id: number) => void;
  handleQuantityChange: (id: number, quantity: number) => void;
  totalPrice: number;
}

const CheckoutMobile: React.FC<CheckoutMobileProps> = ({ cartItems, handleRemoveItem, handleQuantityChange, totalPrice }) => {
  return (
    <>
      {cartItems.map((item) => (
        <div key={item.movie.id} className="flex flex-col border-b pb-4 mb-4">
          <div className="flex justify-start items-start space-x-4 w-full">
            <Image
              src={item.movie.image}
              alt={item.movie.title}
              width={60}
              height={100}
              className="object-contain"
            />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-start">
                <h2 className="font-semibold cardMovierPrices text-base leading-tight">{item.movie.title}</h2>
                <div className="flex items-center">
                  <p className="cardMovierPrices font-bold">{formatPrice(item.movie.price)}</p>
                  <button
                    className="text-blue-500 ml-4"
                    onClick={() => handleRemoveItem(item.movie.id)}
                  >
                    <Image 
                      src={trashIcon} 
                      alt="Remover" 
                      width={30} 
                      className="cursor-pointer object-contain"
                    />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center space-x-2">
                  <button
                    className="text-blue-500"
                    onClick={() => handleQuantityChange(item.movie.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    <Image 
                      src={minusIcon} 
                      alt="Diminuir" 
                      width={22} 
                      height={22} 
                      className="cursor-pointer"
                    />
                  </button>

                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-14 text-center border border-gray-300 rounded-md py-0.5 px-4 cardMovierPrices"
                  />

                  <button
                    className="text-blue-500"
                    onClick={() => handleQuantityChange(item.movie.id, item.quantity + 1)}
                  >
                    <Image 
                      src={plusIcon} 
                      alt="Aumentar" 
                      width={22} 
                      height={22} 
                      className="cursor-pointer"
                    />
                  </button>
                </div>

                <div className="flex flex-col items-end ml-2.5 mt-4">
                  <span className="text-xs colorTextSecondary font-semibold text-center">SUBTOTAL</span>
                  <span className="font-bold cardMovierPrices text-base">
                    {formatPrice(item.movie.price * item.quantity)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center pt-4">
        <span className="text-base pt-1.5 font-bold colorTextSecondary">TOTAL</span>
        <span className="text-2xl font-bold cardMovierPrices">
          {formatPrice(totalPrice)}
        </span>
      </div>

      <div className="mt-6">
        <Link href="/success">
            <button className="w-full btnCheckoutEnd text-xs text-white py-3 rounded-md hover:bg-blue-600 transition">
                FINALIZAR PEDIDO
            </button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutMobile;
