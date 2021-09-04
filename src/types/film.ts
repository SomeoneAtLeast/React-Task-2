export interface FilmState {
  firstRun: boolean;
  films: any;
  loading: boolean;
  error: null | string;
}

export enum FilmActionTypes {
  FETCH_FILMS = 'FETCH_FILMS',
  FETCH_FILMS_SUCCES = 'FETCH_FILMS_SUCCES',
  FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR',
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

export type FilmAction =
  | FetchFilmsAction
  | FetchFilmsSucessAction
  | FetchFilmsErrorAction;
