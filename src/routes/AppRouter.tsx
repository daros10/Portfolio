import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Appbar } from "../components/Appbar/Appbar";
import { About } from "../pages/About/About";
import { Introduce } from "../pages/Introduce/Introduce";
import { Project } from "../pages/Projects/Project";
import { Resume } from "../pages/Resume/Resume";
import { RoutesEnum } from "../constants/RoutesEnum";

export const AppRouter = () => {
  return (
    <Router>
      <Appbar />
      <Switch>
        <Route exact path={RoutesEnum.INDEX} component={Introduce} />
        <Route exact path={RoutesEnum.ABOUT} component={About} />
        <Route exact path={RoutesEnum.RESUME} component={Resume} />
        <Route exact path={RoutesEnum.PROJECTS} component={Project} />
        <Redirect to={RoutesEnum.INDEX} />
      </Switch>
    </Router>
  );
};
