import React, { Component } from "react";
import { Auth } from "aws-amplify";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";
import {} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Header, Grid, Segment } from "semantic-ui-react";

import Amplify from "aws-amplify";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import aws_exports from "./aws-exports";
import Search from "./components/Search";
import AlbumsListLoader from "./components/AlbumsListLoader";
import NewAlbum from "./components/NewAlbum";
import AlbumDetailsLoader from "./components/AlbumDetailsLoader";
import Routes from "./Routes";
import "./App.css";
Amplify.configure(aws_exports);

class App extends Component {
  async componentDidMount() {
    try {
      console.log("componentDidMount initiated");
      await Auth.currentSession();

      this.userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  render() {
    const childProps = {
      //   isAuthenticated: this.state.isAuthenticated,
      isAuthenticated: true,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Brand>{/* <Link to="/">Scratch></Link> */}</Navbar.Brand>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

export default App;
