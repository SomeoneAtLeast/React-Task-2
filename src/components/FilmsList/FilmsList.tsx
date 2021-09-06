import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

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

  console.log(films.length);

  return (
    <div className="films-list-wrapper">
      <FilmsSearch />
      {firstRun || films[0].Error ? (
        <NoFilms />
      ) : (
        <ul className="films-list">
          {loading ? (
            <h1>Идет загрузка...</h1>
          ) : (
            films.map(
              (film: { Title: string; imdbID: string; Year: string }) => {
                return (
                  <FilmCard
                    key={film.imdbID}
                    title={film.Title}
                    year={film.Year}
                  />
                );
              }
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default FilmsList;
