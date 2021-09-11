import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import './FilmsList.scss';

import NoFilms from '../NoFilms';
import FilmsSearch from '../FilmsSearch';
import FilmCard from '../FilmCard';
import Pagination from '../UI/Pagination/Pagination';

const FilmsList: React.FC = () => {
  const { firstRun, films, page, loading, error, searchData } =
    useTypedSelector(state => state.film);

  const { title, type, year } = searchData;
  const { fetchFilms, setPage, setLoading } = useActions();

  useEffect(() => {
    if (!firstRun) fetchFilms(title, type, year, page);
  }, [page]);

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
                <Link
                  className="films-list__film-card-link"
                  to={`/film-details/${film.imdbID}`}
                  key={film.imdbID}
                  onClick={() => setLoading(true)}
                >
                  <FilmCard
                    title={film.Title}
                    year={film.Year}
                    poster={film.Poster}
                    type={film.Type}
                    imdbId={film.imdbID}
                  />
                </Link>
              );
            }
          )}
        </ul>
      )}
      {!firstRun && films ? (
        <Pagination
          films={films}
          setPage={setPage}
          filmsOnPage={10}
          loading={loading}
        />
      ) : null}
    </div>
  );
};

export default FilmsList;
