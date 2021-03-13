import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Appbar } from '../components/Appbar';
import { About } from '../pages/About';
import { Introduce } from '../pages/Introduce';
import { Project } from '../pages/Project';
import { Resume } from '../pages/Resume';

export const AppRouter = () => {
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route exact path='/' component={Introduce} />
        <Route exact path='/about' component={About} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/projects' component={Project} />

        <Redirect to='/' />
      </Switch>
    </Router>
  );
};
