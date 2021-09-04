import axios from 'axios';
import { Dispatch } from 'redux';
import { FilmAction, FilmActionTypes } from '../../types/film';

export const fetchFilms = () => {
  return async (dispatch: Dispatch<FilmAction>) => {
    try {
      dispatch({ type: FilmActionTypes.FETCH_FILMS });
      const response = await axios.get(
        'http://www.omdbapi.com/?i=tt3896198&apikey=84f1a8f9'
      );
      dispatch({
        type: FilmActionTypes.FETCH_FILMS_SUCCES,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: FilmActionTypes.FETCH_FILMS_ERROR,
        payload: 'Произошла ошибка при загрузке фильмов',
      });
    }
  };
};
