import { FilmAction, FilmActionTypes, FilmState } from '../../types/film';

const initialState: FilmState = {
  firstRun: true,
  films: [],
  film: {},
  searchData: {
    title: '',
    type: 'movie',
    year: '',
  },
  loading: true,
  error: null,
  page: 1,
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
    case FilmActionTypes.FETCH_FILM:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FilmActionTypes.FETCH_FILM_SUCCES:
      return {
        ...state,
        film: action.payload,
        loading: false,
        error: null,
      };
    case FilmActionTypes.FETCH_FILM_ERROR:
      return {
        ...state,
        film: {},
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
    case FilmActionTypes.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case FilmActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
