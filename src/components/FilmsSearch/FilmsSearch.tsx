import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import './FilmsSearch.scss';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Select from '../UI/Select';

const FilmsSearch: React.FC = () => {
  const { fetchFilms, setFilmsSearchData, setPage } = useActions();
  const { searchData, page } = useTypedSelector(state => state.film);
  const { title, type, year } = searchData;
  const options = ['movie', 'series', 'episode'];

  const onChangeSearchData = (e: {
    target: { name: string; value: string };
  }) => {
    setFilmsSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const findFilms = () => {
    if (page === 1) {
      fetchFilms(title, type, year, page);
    } else {
      setPage(1);
    }
    setPage(1);
  };

  return (
    <div className="films-search">
      <Input
        className="films-search__input films-search__input-title"
        name="title"
        value={title}
        func={onChangeSearchData}
      >
        Название
      </Input>
      <Input
        className="films-search__input films-search__input-year"
        name="year"
        value={year}
        func={onChangeSearchData}
      >
        Год
      </Input>
      <Select
        className="films-search__select films-search__select-type"
        name="type"
        value={type}
        options={options}
        func={onChangeSearchData}
      />
      <Button func={findFilms}>Показать</Button>
    </div>
  );
};

export default FilmsSearch;
