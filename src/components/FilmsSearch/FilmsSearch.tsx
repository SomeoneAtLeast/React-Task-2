import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import './FilmsSearch.scss';

import Input from '../UI/Input';
import Button from '../UI/Button';

const FilmsSearch: React.FC = () => {
  const { fetchFilms, setFilmsSearchData } = useActions();
  const { searchTitle } = useTypedSelector(state => state.film);

  return (
    <div className="films-search">
      <Input
        className="films-search__input films-search__input-title"
        func={setFilmsSearchData}
      >
        Название
      </Input>
      <Input className="films-search__input films-search__input-year">
        Год
      </Input>
      <Input className="films-search__input films-search__input-type">
        Тип
      </Input>
      <Button func={() => fetchFilms(searchTitle)}>Показать</Button>
    </div>
  );
};

export default FilmsSearch;
