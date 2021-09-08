import axios from 'axios';
import { Dispatch } from 'redux';
import { FilmAction, FilmActionTypes } from '../../types/film';

export const fetchFilms = (searchTitle: string) => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.FETCH_FILMS });
      console.log(searchTitle);
      const response = await axios.get(
        'http://www.omdbapi.com/?apikey=84f1a8f9',
        { params: { s: searchTitle } }
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

export const setFilmsSearchData = (searchTitle: string): FilmAction => {
  return { type: FilmActionTypes.SET_FILMS_SEARCH_DATA, payload: searchTitle };
};
