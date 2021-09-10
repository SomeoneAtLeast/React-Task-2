import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import './FilmsSearch.scss';

import Input from '../UI/Input';
import Button from '../UI/Button';
import Select from '../UI/Select';

const FilmsSearch: React.FC = () => {
  const { fetchFilms, setFilmsSearchData } = useActions();
  const { searchData } = useTypedSelector(state => state.film);
  const { title, type, year } = searchData;

  const onChangeSearchData = (e: {
    target: { name: string; value: string };
  }) => {
    setFilmsSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="films-search">
      <Input
        className="films-search__input films-search__input-title"
        name="title"
        func={onChangeSearchData}
      >
        Название
      </Input>
      <Input
        className="films-search__input films-search__input-year"
        name="year"
        func={onChangeSearchData}
      >
        Год
      </Input>
      <Select
        className="films-search__select films-search__select-type"
        name="type"
        options={['movie', 'series', 'episode']}
        func={onChangeSearchData}
      />
      <Button func={() => fetchFilms(title, type, year)}>Показать</Button>
    </div>
  );
};

export default FilmsSearch;
