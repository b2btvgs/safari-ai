import React, { Component } from "react";

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
import "./App.css";
import Search from "./components/Search";
import AlbumsListLoader from "./components/AlbumsListLoader";
import NewAlbum from "./components/NewAlbum";
import AlbumDetailsLoader from "./components/AlbumDetailsLoader";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Brand>
            <Link to="/">Scratch></Link>
          </Navbar.Brand>
        </Navbar>
        <Router>
          <Grid padded>
            <Grid.Column>
              <Route path="/" exact component={Search} />
              <Route path="/" exact component={AlbumsListLoader} />
              <Route path="/" exact component={NewAlbum} />

              <Route
                path="/albums/:albumId"
                render={() => (
                  <div>
                    <NavLink to="/">Back to Albums list</NavLink>
                  </div>
                )}
              />
              <Route
                path="/albums/:albumId"
                render={props => (
                  <AlbumDetailsLoader id={props.match.params.albumId} />
                )}
              />
            </Grid.Column>
          </Grid>
        </Router>
      </div>
    );
  }
}

// export default withAuthenticator(App, {includeGreetings: true});
export default App;
