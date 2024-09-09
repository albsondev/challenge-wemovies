import React from 'react';
import Image from 'next/image';
import loader from '../assets/icons/Loader.png';
import Header from './Header';

const Loader: React.FC = () => {
  return (
    <>
    <Header />
    <div className="flex justify-center items-start h-screen pt-10">
      <Image 
        src={loader}
        alt="Loading"
        width={100}
        height={100}
        className="animate-spin"
      />
    </div>
    </>
  );
};

export default Loader;
