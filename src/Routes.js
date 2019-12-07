import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from './modules/Commons/containers/PrivateRoute';
import AdminRoute from './modules/Commons/containers/AdminRoute';


import Home from './modules/Home/containers/Home';
import NearByOffers from './modules/NearByOffers/containers/NearByOffers';



import MyHeader from './modules/Commons/components/MyHeader';
import BottomNav from './modules/Commons/containers/BottomNav';
import RouteComponent from './RouteComponent';

//Moving header and footer here as we need Links in them, and link will work inside router
const Routes = () => (
  <Router>
    <MyHeader />
    <Switch>
      <Route
        exact
        name="dashboard"
        path="/"
        component={routeProps => (<RouteComponent name="dashboard" Comp={Home} {...routeProps} />)}
      />
      <Route
        exact
        name="NearByOffers"
        path="/NearByOffers"
        component= {routeProps => (<RouteComponent name="NearByOffers" Comp={NearByOffers} {...routeProps} />)}
      />
    </Switch>
    <BottomNav />
  </Router>
);

export default Routes;
