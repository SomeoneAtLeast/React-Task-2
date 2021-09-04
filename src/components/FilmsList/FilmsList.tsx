import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import NoFilms from '../NoFilms';
import FilmsSearch from '../FilmsSearch';

const FilmsList: React.FC = () => {
  const { firstRun, films, loading, error } = useTypedSelector(
    state => state.film
  );

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="films-list-wrapper">
      <FilmsSearch />
      {firstRun ? (
        <NoFilms />
      ) : (
        <ul className="films-list">
          <li>{films.Title}</li>
        </ul>
      )}
    </div>
  );
};

export default FilmsList;
