import React, { Component, Fragment } from "react";
import { API } from "aws-amplify";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Route
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Header, Grid, Segment } from "semantic-ui-react";
import Search from "./Search";
import AlbumsListLoader from "./AlbumsListLoader";
import NewAlbum from "./NewAlbum";
import AlbumDetailsLoader from "./AlbumDetailsLoader";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isAuthenticated: false,
      isAuthenticating: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    this.setState({ isLoading: false });
  }

  renderNotes() {
    return (
      <Fragment>
        <Grid padded>
          <Grid.Column>
            <Search />
            <AlbumsListLoader />
            <NewAlbum />
          </Grid.Column>
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
        </Grid>
      </Fragment>
    );
  }

  renderLander() {
    return <h1>Lander</h1>;
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}

export default Home;
