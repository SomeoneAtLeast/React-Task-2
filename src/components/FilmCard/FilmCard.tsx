import React from 'react';
import './FilmCard.scss';

type FilmCardProps = {
  title: string;
  year: string;
};

const FilmCard: React.FC<FilmCardProps> = ({ title, year }) => {
  return (
    <li className="film-card">
      <h3 className="film-card__title">{title}</h3>
      <div>
        <span>Год:</span>
        <span>{year}</span>
      </div>
    </li>
  );
};

export default FilmCard;
