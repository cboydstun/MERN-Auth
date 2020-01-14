import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../layout/Navbar";

import Bio from '../../pages/Bio/Bio';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';
import Users from '../../pages/Users/UserList';
import Articles from '../../pages/Articles/ArticlesPage';

import Landing from "../layout/Landing";
import Register from "../auth/Register";
import Login from "../auth/Login.js";
import PrivateRoute from "../private-route/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";

const Routes = () => (
  // <Switch>
  //   <Route exact path="/" component={Bio} />
  //   <Route path="/Skills" component={Skills} />
  //   <Route path="/Projects" component={Projects} />
  //   <Route path="/Users" component={Users} />
  //   <Route path="/Articles" component={Articles} />
  // </Switch>
  <React.Fragment>

  <Router>
    <div>
      <Navbar/>
      <div>
        <Route exact path="/" component={Bio} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Users" component={Users} />
        <Route path="/Articles" component={Articles} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </div>
  </Router>
  </React.Fragment>
);

export default Routes;