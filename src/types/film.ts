export interface FilmState {
  firstRun: boolean;
  films:
    | {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
      }[]
    | [];
  film:
    | {
        Poster: string;
        Title: string;
        Genre: string;
        Director: string;
        Actors: string;
        Plot: string;
        Released: string;
        Runtime: string;
      }
    | Record<string, never>;
  searchData: {
    title: string;
    type: string;
    year: string;
  };
  loading: boolean;
  error: null | string;
  page: number;
}

export enum FilmActionTypes {
  FETCH_FILMS = 'FETCH_FILMS',
  FETCH_FILMS_SUCCES = 'FETCH_FILMS_SUCCES',
  FETCH_FILMS_ERROR = 'FETCH_FILMS_ERROR',
  FETCH_FILM = 'FETCH_FILM',
  FETCH_FILM_SUCCES = 'FETCH_FILM_SUCCES',
  FETCH_FILM_ERROR = 'FETCH_FILM_ERROR',
  SET_FILMS_SEARCH_DATA = 'SET_FILMS_SEARCH_DATA',
  SET_PAGE = 'SET_PAGE',
  SET_LOADING = 'SET_LOADING',
}

interface FetchFilmsAction {
  type: FilmActionTypes.FETCH_FILMS;
}

interface FetchFilmsSucessAction {
  type: FilmActionTypes.FETCH_FILMS_SUCCES;
  payload: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
}

interface FetchFilmsErrorAction {
  type: FilmActionTypes.FETCH_FILMS_ERROR;
  payload: string;
}

interface FetchFilmAction {
  type: FilmActionTypes.FETCH_FILM;
}

interface FetchFilmSucessAction {
  type: FilmActionTypes.FETCH_FILM_SUCCES;
  payload: {
    Poster: string;
    Title: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Released: string;
    Runtime: string;
  };
}

interface FetchFilmErrorAction {
  type: FilmActionTypes.FETCH_FILM_ERROR;
  payload: string;
}

interface SetFilmsSearchDataAction {
  type: FilmActionTypes.SET_FILMS_SEARCH_DATA;
  payload: { title: string; type: string; year: string };
}

interface SetPageAction {
  type: FilmActionTypes.SET_PAGE;
  payload: number;
}

interface setLoadingAction {
  type: FilmActionTypes.SET_LOADING;
  payload: boolean;
}

export type FilmAction =
  | FetchFilmsAction
  | FetchFilmsSucessAction
  | FetchFilmsErrorAction
  | FetchFilmAction
  | FetchFilmSucessAction
  | FetchFilmErrorAction
  | SetFilmsSearchDataAction
  | SetPageAction
  | setLoadingAction;
