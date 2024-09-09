import React from 'react';
import Image from 'next/image';
import { formatPrice } from './../utils/formatPrice';
import plusIcon from './../assets/icons/plus.svg';
import minusIcon from './../assets/icons/minus.svg';
import trashIcon from './../assets/icons/trash.svg';
import { CartItem } from '../types/CartItem';
import Link from 'next/link';

interface CheckoutDesktopProps {
  cartItems: CartItem[];
  handleRemoveItem: (id: number) => void;
  handleQuantityChange: (id: number, quantity: number) => void;
  totalPrice: number;
}

const CheckoutDesktop: React.FC<CheckoutDesktopProps> = ({
  cartItems,
  handleRemoveItem,
  handleQuantityChange,
  totalPrice,
}) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4 items-center border-b pb-4 mb-4">
        <span className="col-span-2 colorTextSecondary text-sm font-semibold">PRODUTO</span>
        <span className="text-center colorTextSecondary text-sm font-semibold">QTD</span>
        <span className="text-right colorTextSecondary text-sm font-semibold">SUBTOTAL</span>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.movie.id}
          className="grid grid-cols-5 gap-4 items-center pb-4 mb-4"
        >
          <div className="col-span-2 flex items-center space-x-4">
            <Image
              src={item.movie.image}
              alt={item.movie.title}
              width={80}
              height={120}
              className="object-contain"
            />
            <div>
              <h2 className="font-bold cardMovierPrices">{item.movie.title}</h2>
              <p className="cardMovierPrices font-bold">
                {formatPrice(item.movie.price)}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <button
              className="text-blue-500"
              onClick={() =>
                handleQuantityChange(item.movie.id, item.quantity - 1)
              }
              disabled={item.quantity === 1}
            >
              <Image
                src={minusIcon}
                alt="Diminuir"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>

            <input
              type="text"
              value={item.quantity}
              readOnly
              className="w-20 text-center border border-gray-300 rounded-md cardMovierPrices"
            />

            <button
              className="text-blue-500"
              onClick={() =>
                handleQuantityChange(item.movie.id, item.quantity + 1)
              }
            >
              <Image
                src={plusIcon}
                alt="Aumentar"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>
          </div>

          <div className="text-right font-bold cardMovierPrices">
            {formatPrice(item.movie.price * item.quantity)}
          </div>

          <div className="text-right">
            <button
              className="text-blue-500"
              onClick={() => handleRemoveItem(item.movie.id)}
            >
              <Image
                src={trashIcon}
                alt="Remover"
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center pt-6 pb-2 border-t mt-4">
        <Link href="/success">
          <button className="btnCheckoutEnd text-white py-1.5 px-8 text-sm rounded-md hover:bg-blue-600 transition">
            FINALIZAR PEDIDO
          </button>
        </Link>

        <div className="flex items-center space-x-2 mx-4">
          <span className="text-base font-bold colorTextSecondary uppercase pt-1 mr-2">Total</span>
          <span className="text-2xl font-bold cardMovierPrices">
            {formatPrice(totalPrice)}
          </span>
        </div>
      </div>
    </>
  );
};

export default CheckoutDesktop;
