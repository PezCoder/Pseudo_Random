import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import PrivateRoute from './modules/Commons/containers/PrivateRoute';
import AdminRoute from './modules/Commons/containers/AdminRoute';


import Home from './modules/Home/containers/Home';
import NearByOffers from './modules/NearByOffers/containers/NearByOffers';
import BadgeShowcase from './modules/BadgeShowcase/BadgeShowcase.js';
import UpcomingBadgeShowcase from './modules/BadgeShowcase/UpcomingBadgeShowcase.js';
import StoreList from './modules/Stores/containers/StoreList';
import StorePage from './modules/Stores/containers/StorePage';


import Header from './modules/Commons/components/Header';
import BottomNav from './modules/Commons/containers/BottomNav';
import RouteComponent from './RouteComponent';

//Moving header and footer here as we need Links in them, and link will work inside router
const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route
        exact
        name="upcoming-badges"
        path="/"
        component={routeProps => (<RouteComponent name="upcoming-badges" Comp={UpcomingBadgeShowcase} {...routeProps} />)}
      />
      <Route
        exact
        name="all-badges"
        path="/badges/all"
        component={routeProps => (<RouteComponent name="all-badges" Comp={BadgeShowcase} {...routeProps} />)}
      />
      <Route
        exact
        name="NearByOffers"
        path="/NearByOffers"
        component= {routeProps => (<RouteComponent name="NearByOffers" Comp={NearByOffers} {...routeProps} />)}
      />
      <Route
        exact
        name="storelist"
        path="/stores"
        component= {routeProps => (<RouteComponent name="StoreList" Comp={StoreList} {...routeProps} />)}
        />
        <Route
            exact
            name="storePage"
            path="/store/:storeId"
            component= {routeProps => (<RouteComponent name="StorePage" Comp={StorePage} {...routeProps} />)}
            />
    </Switch>
    <BottomNav />
  </Router>
);

export default Routes;
