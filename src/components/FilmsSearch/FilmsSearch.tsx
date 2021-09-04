import React from 'react';
import { useActions } from '../../hooks/useActions';

import Input from '../UI/Input';
import Button from '../UI/Button';

const FilmsSearch: React.FC = () => {
  const { fetchFilms } = useActions();

  return (
    <div>
      <Input />
      <Button func={fetchFilms} />
    </div>
  );
};

export default FilmsSearch;
