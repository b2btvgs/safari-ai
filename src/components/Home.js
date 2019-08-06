import React, { Component, Fragment } from "react";
// import { API } from "aws-amplify";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Search from "./Search";
import AlbumsListLoader from "./AlbumsListLoader";
import NewAlbum from "./NewAlbum";
import AlbumDetailsLoader from "./AlbumDetailsLoader";
import "./Home.css";

class Home extends Component {
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
