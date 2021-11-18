import React from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { fetchMovies } from '../../features/movies/moviesActions';
import { useDispatch } from 'react-redux';

const Home = () => {
  // const [state, setstate] = React.useState();
  const dispatch = useDispatch();
  const movieText = 'Breaking';

  React.useEffect(() => {
    dispatch(fetchMovies(movieText));
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
