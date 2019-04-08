import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';


const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
);


export { AppRouter as default, history };