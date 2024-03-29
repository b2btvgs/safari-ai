import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import AlbumDetails from "./AlbumDetails";

const GetAlbum = `query GetAlbum($id: ID!, $nextTokenForPhotos: String) {
    getAlbum(id: $id) {
        id
        name
        photos(sortDirection: DESC, nextToken: $nextTokenForPhotos) {
            nextToken
            items {
                thumbnail {
                    width
                    height
                    key
                }
                fullsize {
                    width
                    height
                    key
                }
            }
        }
    }
}
`;

class AlbumDetailsLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextTokenForPhotos: null,
      hasMorePhotos: true,
      album: null,
      loading: true
    };
  }

  async loadMorePhotos() {
    if (!this.state.hasMorePhotos) return;

    this.setState({ loading: true });
    console.log("in AlbumDetails - id is: " + JSON.stringify(this.props));
    // console.log("props.is is: " + this.props.id);
    const { data } = await API.graphql(
      graphqlOperation(GetAlbum, {
        id: this.props.match.params.albumId,
        nextTokenForPhotos: this.state.nextTokenForPhotos
      })
    );

    let album;
    if (this.state.album === null) {
      album = data.getAlbum;
    } else {
      album = this.state.album;
      album.photos.items = album.photos.items.concat(
        data.getAlbum.photos.items
      );
    }
    this.setState({
      album: album,
      loading: false,
      nextTokenForPhotos: data.getAlbum.photos.nextToken,
      hasMorePhotos: data.getAlbum.photos.nextToken !== null
    });
  }

  componentDidMount() {
    console.log("this.props.id is: " + JSON.stringify(this.props.id));
    this.loadMorePhotos();
  }

  render() {
    return (
      <AlbumDetails
        loadingPhotos={this.state.loading}
        album={this.state.album}
        loadMorePhotos={this.loadMorePhotos.bind(this)}
        hasMorePhotos={this.state.hasMorePhotos}
      />
    );
  }
}

export default AlbumDetailsLoader;
