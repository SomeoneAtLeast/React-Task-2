import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
// import { fetchFilms } from '../../store/action-creators/film';
import NoFilms from '../NoFilms';

const FilmsList: React.FC = () => {
  const { firstRun, films, loading, error } = useTypedSelector(
    state => state.film
  );
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchFilms());
  // }, [1]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="films-list-wrapper">
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
