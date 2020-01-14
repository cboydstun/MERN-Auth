import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../layout/Navbar";

import Bio from '../../pages/Bio/Bio';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';
import Users from '../../pages/Users/UserList';
import Articles from '../../pages/Articles/ArticlesPage';
import Landing from "../../pages/Landing/Landing";
import Dashboard from "../../pages/Dashboard/Dashboard";

import Register from "../auth/Register";
import Login from "../auth/Login.js";
import PrivateRoute from "../private-route/PrivateRoute";

const Routes = () => (
  <React.Fragment>
    <Router>
        <div>
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Bio} />
              <Route path="/landing" component={Landing} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/Skills" component={Skills} />
              <Route path="/Projects" component={Projects} />

              {/* <PrivateRoute component={PrivateHeader} /> */}

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/Users" component={Users} />
              <PrivateRoute path="/Articles" component={Articles} />
            </Switch>
          </div>
        </div>
    </Router>
  </React.Fragment>
);

export default Routes;