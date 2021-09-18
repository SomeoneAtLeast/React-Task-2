import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './NoFilms.scss';

const NoFilms: React.FC = () => {
  const { firstRun, loading, films } = useTypedSelector(state => state.film);

  return (
    <div className="no-films">
      {firstRun && 'Начните ваш первый поиск!'}
      {!firstRun && !films && !loading
        ? 'Ничего не нашлось или результатов слишком много :('
        : null}
      {!firstRun && loading ? 'Идет загрузка...' : null}
    </div>
  );
};

export default NoFilms;
