import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../redux/store';
import Image from 'next/image';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const movie = useSelector((state: RootState) => 
    state.movies.movies.find(movie => movie.id === Number(id))
  );

  if (!movie) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{movie.title}</h1>
      <Image src={movie.image} alt={movie.title} width={384} height={576} className="object-cover mb-4" />
      <p>${movie.price}</p>
    </div>
  );
};

export default ProductDetail;
