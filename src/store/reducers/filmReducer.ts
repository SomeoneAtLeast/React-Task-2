import { FilmAction, FilmActionTypes, FilmState } from '../../types/film';

const initialState: FilmState = {
  firstRun: true,
  films: [],
  loading: false,
  error: null,
};

export const filmReducer = (
  state = initialState,
  action: FilmAction
): FilmState => {
  switch (action.type) {
    case FilmActionTypes.FETCH_FILMS:
      return { firstRun: false, films: [], loading: true, error: null };
    case FilmActionTypes.FETCH_FILMS_SUCCES:
      return {
        firstRun: false,
        films: action.payload,
        loading: false,
        error: null,
      };
    case FilmActionTypes.FETCH_FILMS_ERROR:
      return {
        firstRun: false,
        films: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
