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
import Navigation from './UI/Navigation';
import AboutUs from '../pages/AboutUs';

const App: React.FC = () => {
  const links = [
    { to: '/', name: 'Главная' },
    { to: '/about-us', name: 'О нас' },
  ];

  return (
    <div className="app">
      <Router>
        <header>
          <Navigation links={links} />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={FilmsList} />
            <Route path="/film-details/:id" component={FilmDetails} />
            <Route exact path="/about-us" component={AboutUs} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
