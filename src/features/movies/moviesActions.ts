import { service } from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/movieApiKey';
import { SET_LOADING, SET_MOVIES } from './moviesAction.types';

export const fetchMovies = (movieText: string) => async (dispatch: any) => {
  dispatch({ type: SET_LOADING, payload: true });

  //@ts-ignore
  const response: { data: { Search: {}[] } } = await service
    .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    .catch((err) => {
      console.log('Error: ', err);
    });

  // console.log('The response from API', response);
  dispatch({ type: SET_MOVIES, payload: { movies: response.data.Search } });
  dispatch({ type: SET_LOADING, payload: false });
};
