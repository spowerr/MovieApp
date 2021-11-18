import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import search from '../../images/search.svg';
import img from '../../images/searchDel.svg';

const MovieListing = () => {
  //@ts-ignore
  const isLoading: boolean = useSelector((state) => state.movies.isLoading);
  //@ts-ignore
  const movies: {}[] = useSelector((state) => state.movies.movies);
  console.log({ movies, isLoading });
  return (
    <div className="wrapper">
      <div className="list">
        <h2>Movies </h2>
        <div className="search-block d-flex">
          <img width={14} className="mr-10 ml-10" src={search} alt="Search" />
          <input
            // onChange={onChangeSearchInput}
            // value={searchState}
            maxLength={30}
            placeholder="Поиск..."
          />
          <img
            // onClick={() => setSearchState('')}
            className="cu-p mr-10"
            width={30}
            src={img}
            alt="remove"
          />
        </div>
        <div className="movie-container">
          {!isLoading ? (
            movies.map((movie: {}, id: number) => {
              return <MovieCard key={id} data={movie} />;
            })
          ) : (
            <div>Error</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
