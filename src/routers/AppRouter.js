import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import AboutPage from '../components/AboutPage';
import YsqItemsList from '../components/YsqItemsList';
import NotFoundPage from '../components/NotFoundPage';

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Header />
      <Dashboard />
      <Switch>
        <Route path="/" exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/ysq" component={YsqItemsList} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);

export { AppRouter as default, history };
