import React from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route,
  Switch
} from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import AlbumDetailsLoader from "./components/AlbumDetailsLoader";

const Routes = ({ childProps }) => (
  <Router>
    <Switch>
      <AppliedRoute path="/" exact component={Home} props={childProps} />
      <UnauthenticatedRoute
        path="/login"
        exact
        component={Login}
        props={childProps}
      />
      <AuthenticatedRoute
        path="/albums/:albumId"
        exact
        component={AlbumDetailsLoader}
        props={childProps}
      />
    </Switch>
  </Router>
);

export default Routes;
