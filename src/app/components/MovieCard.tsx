import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Movie } from '../types/Movie';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';
import { addToCart } from '../redux/cartSlice';
import { RootState } from '../redux/store';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) => !!state.cart.items[movie.id]);
  const [itemCount, setItemCount] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    if (!isInCart) {
      dispatch(addToCart(movie));
      setItemCount(itemCount + 1);
      setIsAdded(true);
      triggerFlyToCartAnimation(e);
    }
  };

  const triggerFlyToCartAnimation = (event: React.MouseEvent) => {
    if (isInCart) return;

    const image = event.currentTarget.closest('.movie-card')?.querySelector('.movie-image') as HTMLImageElement;
    const cartIcon = document.querySelector('.cart-icon') as HTMLElement;

    if (image && cartIcon) {
      const clonedImage = image.cloneNode(true) as HTMLImageElement;
      const imageRect = image.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      clonedImage.style.position = 'absolute';
      clonedImage.style.top = `${imageRect.top}px`;
      clonedImage.style.left = `${imageRect.left}px`;
      clonedImage.style.width = `${imageRect.width}px`;
      clonedImage.style.height = `${imageRect.height}px`;
      clonedImage.style.transition = 'all 1s ease';

      document.body.appendChild(clonedImage);

      setTimeout(() => {
        clonedImage.style.top = `${cartRect.top}px`;
        clonedImage.style.left = `${cartRect.left}px`;
        clonedImage.style.width = '30px';
        clonedImage.style.height = '30px';
        clonedImage.style.opacity = '0.5';

        setTimeout(() => {
          document.body.removeChild(clonedImage);
        }, 1000);
      }, 10);
    }
  };

  return (
    <div className="movie-card bg-white border border-gray-300 rounded-lg shadow-md flex flex-col items-center p-4 w-full max-w h-auto mx-auto px-4">
      <Image
        src={movie.image}
        alt={movie.title}
        width={'147'}
        height={288}
        className="movie-image object-contain mb-4"
      />
      <h2 className="text-lg font-bold titleCardMovies text-center mb-2">{movie.title}</h2>
      <p className="cardMovierPrices text-center text-2xl font-bold my-2">
        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(movie.price)}
      </p>

      <AddToCartButton 
        onClick={handleAddToCart}
        itemCount={itemCount}
        isAdded={isAdded || isInCart}
      />
    </div>
  );
};

export default MovieCard;
