import axios from 'axios';
import { Dispatch } from 'redux';
import { FilmAction, FilmActionTypes } from '../../types/film';

export const fetchFilms = (
  title?: string,
  type?: string,
  year?: string,
  page?: number
) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.FETCH_FILMS });
      const response = await axios.get(
        'http://www.omdbapi.com/?apikey=84f1a8f9',
        {
          params: { s: title, type: type, y: year, page: page },
        }
      );
      dispatch({
        type: FilmActionTypes.FETCH_FILMS_SUCCES,
        payload: response.data.Search,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.FETCH_FILMS_ERROR,
        payload: 'Произошла ошибка при загрузке фильмов',
      });
    }
  };
};

export const fetchOneFilm = (imdbId: string) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.FETCH_FILM });
      const response = await axios.get(
        'http://www.omdbapi.com/?apikey=84f1a8f9',
        {
          params: { i: imdbId },
        }
      );
      dispatch({
        type: FilmActionTypes.FETCH_FILM_SUCCES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.FETCH_FILM_ERROR,
        payload: 'Произошла ошибка при загрузке фильмов',
      });
    }
  };
};

export const setFilmsSearchData = (searchData: any): FilmAction => {
  return {
    type: FilmActionTypes.SET_FILMS_SEARCH_DATA,
    payload: {
      title: searchData.title,
      type: searchData.type,
      year: searchData.year,
    },
  };
};

export const setPage = (page: number): FilmAction => {
  return {
    type: FilmActionTypes.SET_PAGE,
    payload: page,
  };
};

export const setLoading = (loading: boolean): FilmAction => {
  return {
    type: FilmActionTypes.SET_LOADING,
    payload: loading,
  };
};
