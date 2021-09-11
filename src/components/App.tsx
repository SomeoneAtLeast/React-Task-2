import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

import FilmDetails from './FilmDetails';
import FilmsList from './FilmsList';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={FilmsList} />
          <Route path="/film-details/:id" component={FilmDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
