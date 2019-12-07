import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from './modules/Commons/containers/PrivateRoute';
import AdminRoute from './modules/Commons/containers/AdminRoute';
import Home from './modules/Home/containers/Home';
import Header from './modules/Commons/containers/Header';
import BottomNav from './modules/Commons/containers/BottomNav';
import RouteComponent from './RouteComponent';

//Moving header and footer here as we need Links in them, and link will work inside router
const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route
        exact
        name="dashboard"
        path="/"
        component={routeProps => (<RouteComponent name="dashboard" Comp={Home} {...routeProps} />)}
      />
    </Switch>
    <BottomNav />
  </Router>
);

export default Routes;
