import { FilmAction, FilmActionTypes, FilmState } from '../../types/film';

const initialState: FilmState = {
  firstRun: true,
  films: [],
  searchData: {
    title: '',
    type: 'movie',
    year: '',
  },
  loading: false,
  error: null,
};

export const filmReducer = (
  state = initialState,
  action: FilmAction
): FilmState => {
  switch (action.type) {
    case FilmActionTypes.FETCH_FILMS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FilmActionTypes.FETCH_FILMS_SUCCES:
      return {
        ...state,
        firstRun: false,
        films: action.payload,
        loading: false,
        error: null,
      };
    case FilmActionTypes.FETCH_FILMS_ERROR:
      return {
        ...state,
        firstRun: false,
        films: [],
        loading: false,
        error: action.payload,
      };
    case FilmActionTypes.SET_FILMS_SEARCH_DATA:
      return {
        ...state,
        searchData: {
          title: action.payload.title,
          type: action.payload.type,
          year: action.payload.year,
        },
      };
    default:
      return state;
  }
};
