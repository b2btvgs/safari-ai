import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import AlbumDetailsLoader from "./components/AlbumDetailsLoader";
import NotFound from "./components/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) => (
  // console.log('starting Routes - childProps is: ' + JSON.stringify(childProps));
  <Switch>
    {/* <AppliedRoute path="/login" exact component={Login} props={childProps} /> */}
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/about"
      exact
      component={About}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/contact"
      exact
      component={Contact}
      props={childProps}
    />
    <AuthenticatedRoute path="/" exact component={Home} props={childProps} />
    <AuthenticatedRoute
      path="/albums/:albumId"
      exact
      component={AlbumDetailsLoader}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
