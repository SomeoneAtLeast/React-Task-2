export interface FilmState {
  firstRun: boolean;
  films: any;
  searchData: {
    title: string;
    type: string;
    year: string;
  };
  loading: boolean;
  error: null | string;
}

export enum FilmActionTypes {
  FETCH_FILMS = 'FETCH_FILMS',
  FETCH_FILMS_SUCCES = 'FETCH_FILMS_SUCCES',
  FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR',
  SET_FILMS_SEARCH_DATA = 'SET_FILMS_SEARCH_DATA',
}

interface FetchFilmsAction {
  type: FilmActionTypes.FETCH_FILMS;
}

interface FetchFilmsSucessAction {
  type: FilmActionTypes.FETCH_FILMS_SUCCES;
  payload: any[];
}

interface FetchFilmsErrorAction {
  type: FilmActionTypes.FETCH_FILMS_ERROR;
  payload: string;
}

interface SetFilmsSearchData {
  type: FilmActionTypes.SET_FILMS_SEARCH_DATA;
  payload: { title: string; type: string; year: string };
}

export type FilmAction =
  | FetchFilmsAction
  | FetchFilmsSucessAction
  | FetchFilmsErrorAction
  | SetFilmsSearchData;
