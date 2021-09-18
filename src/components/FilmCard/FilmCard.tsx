import React from 'react';
import './FilmCard.scss';

interface FilmCardProps {
  title: string;
  year: string;
  poster: string;
  type: string;
  imdbId: string;
}

const FilmCard: React.FC<FilmCardProps> = ({
  title,
  year,
  poster,
  type,
  imdbId,
}) => {
  return (
    <li className="film-card">
      <h3 className="film-card__title">{title}</h3>
      <div className="film-card__info">
        <div className="film-card__info-text">
          <div>Год: {year}</div>
          <div>Тип: {type}</div>
          <div>IMDB: {imdbId}</div>
        </div>
        <img
          className="film-card__info-poster"
          src={poster}
          alt="Постер фильма"
        />
      </div>
    </li>
  );
};

export default FilmCard;
