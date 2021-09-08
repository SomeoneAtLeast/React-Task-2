import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './NoFilms.scss';

const NoFilms: React.FC = () => {
  const { firstRun, films } = useTypedSelector(state => state.film);

  return (
    <div className="no-films">
      {firstRun && 'Начните ваш первый поиск!'}
      {!firstRun && films[0].Error ? 'Ничего не нашлось :(' : null}
    </div>
  );
};

export default NoFilms;
