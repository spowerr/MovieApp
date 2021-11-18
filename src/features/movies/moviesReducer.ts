import * as Action from './moviesAction.types';

const initialState: {
  movies: {}[];
  isLoading: boolean;
} = {
  movies: [],
  isLoading: false,
};

export const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Action.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Action.FETCH_MOVIES:
      break;

    case Action.SET_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.movies],
      };
    case Action.ADD_MOVIE:
      break;

    case Action.REMOVE_MOVIE:
      break;

    default:
      return state;
  }
};
