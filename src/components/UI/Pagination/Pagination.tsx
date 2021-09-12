import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './Pagination.scss';

import Button from '../Button';

interface PaginationProps {
  setPage: (page: number) => void;
  films:
    | {
        Title: string;
        Year: string;
        imdbID: string;
        Type: string;
        Poster: string;
      }[]
    | [];
  loading: boolean;
  filmsOnPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  setPage,
  films,
  loading,
  filmsOnPage,
}) => {
  const { page } = useTypedSelector(state => state.film);

  const [cantBack, setCantBack] = useState(true);
  const [cantNext, setCantNext] = useState(false);

  const onChangePage = (
    changeFunc: (page: number) => void,
    direction: string
  ) => {
    if (page > 1 && direction === 'back' && !loading) changeFunc(page - 1);
    if (direction === 'next' && films.length === filmsOnPage && !loading)
      changeFunc(page + 1);
  };

  useEffect(() => {
    setCantBack(page === 1);
    if (films && films.length !== filmsOnPage) {
      setCantNext(true);
    } else {
      setCantNext(false);
    }
  }, [page, films]);

  return (
    <div className="pagination">
      <div className="pagination__page-changer">
        <Button disabled={cantBack} func={() => onChangePage(setPage, 'back')}>
          Назад
        </Button>
        <span>{page}</span>
        <Button disabled={cantNext} func={() => onChangePage(setPage, 'next')}>
          Вперед
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
