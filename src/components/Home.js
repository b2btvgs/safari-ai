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
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true
    };
  }

  async componentDidMount() {
    console.log("initiating Home componentDidMount");
    console.log("this.props.isAuthenticated is: " + this.props.isAuthenticated);
    if (!this.props.isAuthenticated) {
      console.log("failed - am returning now");
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
        {this.state.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}

export default Home;
