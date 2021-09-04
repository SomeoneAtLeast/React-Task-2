import React from 'react';
import './App.scss';

import FilmsList from './FilmsList';

const App: React.FC = () => {
  return (
    <div className="app">
      <FilmsList />
    </div>
  );
};

export default App;
