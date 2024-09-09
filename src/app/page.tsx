"use client";

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './redux/moviesSlice';
import MovieCard from './components/MovieCard';
import Loader from './components/Loader';
import Header from './components/Header';
import EmptyState from './components/EmptyState';
import { RootState, AppDispatch } from './redux/store';

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { movies, status } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (status === 'failed') {
    return <EmptyState message="Falha ao carregar filmes. Por favor, tente novamente." />;
  }

  if (!movies.length && status === 'idle') {
    return <EmptyState message="Parece que não há nada por aqui :(" />;
  }

  return (
    <>
      <Header />
      <div className="w-full max-w-screen-lg mx-auto px-4 sm:px-0 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
