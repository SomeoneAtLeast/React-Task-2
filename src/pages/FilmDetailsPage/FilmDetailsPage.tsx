import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { useParams } from 'react-router-dom';
import './FilmDetailsPage.scss';

import NoFilms from '../../components/NoFilms';

const FilmDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { film, loading } = useTypedSelector(state => state.film);

  const { fetchOneFilm } = useActions();

  useEffect(() => {
    fetchOneFilm(id);
  }, []);

  return (
    <div className="films-details-wrapper">
      {loading ? (
        <NoFilms />
      ) : (
        <div className="films-details">
          <img
            className="films-details__img"
            src={film.Poster}
            alt="Постер фильма"
          />
          <div className="films-details__text">
            <h3>{film.Title}</h3>
            <span>Жанр: {film.Genre}</span>
            <span>Режиссер: {film.Director}</span>
            <span>Актеры: {film.Actors}</span>
            <span>Сюжет: {film.Plot}</span>
            <span>Вышел: {film.Released}</span>
            <span>Продолжительность: {film.Runtime}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmDetailsPage;
