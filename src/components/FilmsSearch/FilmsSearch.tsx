import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import Input from '../UI/Input';
import Button from '../UI/Button';

const FilmsSearch: React.FC = () => {
  const { fetchFilms, setFilmsSearchData } = useActions();
  const { searchTitle } = useTypedSelector(state => state.film);

  return (
    <div>
      <Input func={setFilmsSearchData}>Название</Input>
      <Input>Год</Input>
      <Input>Тип</Input>
      <Button func={() => fetchFilms(searchTitle)}>Показать</Button>
    </div>
  );
};

export default FilmsSearch;
