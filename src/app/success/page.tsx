"use client";

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import Image from 'next/image';
import Link from 'next/link';
import successImage from './../assets/icons/image-success.png';
import Header from '../components/Header';

const Success: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="bg-white container mx-auto px-4 py-8 flex flex-col items-center justify-center text-center w-11/12 rounded-md mt-8 lg:max-w-screen-lg lg:mt-4">
        <h1 className="text-2xl font-bold mb-6 cardMovierPrices">Compra realizada com sucesso!</h1>
        <Image 
          src={successImage}
          alt="Compra realizada com sucesso"
          width={250}
          height={250}
          className="mb-6"
        />

        <Link href="/" className='w-48'>
        <button className="bg-blue-500 text-white text-xs py-2 sm:px-6 rounded-lg hover:bg-blue-600 transition w-full">
            VOLTAR
        </button>

        </Link>
      </div>
    </>
  );
};

export default Success;
