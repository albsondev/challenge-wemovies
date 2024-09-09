"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import imageEmptyState from './../assets/icons/icon-empty-refresh.svg';
import Header from './Header';

interface EmptyStateProps {
  message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message }) => {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push('/');
  };

  return (
    <>  
      <Header />
      <div className="bg-white rounded flex flex-col justify-center items-center h-auto text-center w-11/12 my-1 max-w-lg pt-14 pb-28 mt-8 sm:max-w-screen-md lg:max-w-screen-lg mx-auto px-4 py-8 lg:mt-2">
        <h2 className="w-10/12 sm:w-auto text-lg font-bold cardMovierPrices mb-4">
          {message}
        </h2>

        <Image 
          src={imageEmptyState}
          alt="No content available"
          width={0}
          height={0}
          sizes="100vw"
          className="mb-6"
        />
        <button 
          onClick={handleGoToHome}
          className="btnRefresh w-full mt-5 sm:w-40 sm:mt-0 text-white text-xs py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Voltar para tela inicial
        </button>
      </div>
    </>
  );
};

export default EmptyState;
