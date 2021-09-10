import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './FilmsList.scss';

import NoFilms from '../NoFilms';
import FilmsSearch from '../FilmsSearch';
import FilmCard from '../FilmCard';

const FilmsList: React.FC = () => {
  const { firstRun, films, loading, error } = useTypedSelector(
    state => state.film
  );

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="films-list-wrapper">
      <FilmsSearch />
      {firstRun || !films || loading ? (
        <NoFilms />
      ) : (
        <ul className="films-list">
          {films.map(
            (film: {
              Poster: string;
              Title: string;
              imdbID: string;
              Year: string;
              Type: string;
            }) => {
              return (
                <FilmCard
                  key={film.imdbID}
                  title={film.Title}
                  year={film.Year}
                  poster={film.Poster}
                  type={film.Type}
                  imdbId={film.imdbID}
                />
              );
            }
          )}
        </ul>
      )}
    </div>
  );
};

export default FilmsList;
