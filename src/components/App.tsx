import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';
import { routes } from '../routes';
import { navigationLinks } from '../navigationLinks';

import FilmsListPage from '../pages/FilmsListPage';
import Navigation from './UI/Navigation';
import AboutUsPage from '../pages/AboutUsPage';
import FilmDetailsPage from '../pages/FilmDetailsPage';

const App: React.FC = () => {
  const { home, aboutUs, filmDetails } = routes;
  return (
    <div className="app">
      <Router>
        <header>
          <Navigation links={navigationLinks} />
        </header>
        <main>
          <Switch>
            <Route exact path={home} component={FilmsListPage} />
            <Route path={filmDetails} component={FilmDetailsPage} />
            <Route exact path={aboutUs} component={AboutUsPage} />
            <Redirect to={home} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
