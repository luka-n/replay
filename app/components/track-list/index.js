import React from "react";
import ReactDOM from "react-dom";

import { Table } from "reactstrap";

import Track from "./track";

const propTypes = {
  tracks: React.PropTypes.array.isRequired,
  currentTrackIndex: React.PropTypes.number,
  onSelect: React.PropTypes.func.isRequired,
  onAlbumSelect: React.PropTypes.func.isRequired,
  onArtistSelect: React.PropTypes.func.isRequired
};

class TrackList extends React.Component {
  handleTrackSelect(index) {
    this.props.onSelect(index);
  }

  handleAlbumSelect(index) {
    this.props.onAlbumSelect(index);
  }

  handleArtistSelect(index) {
    this.props.onArtistSelect(index);
  }

  render() {
    let tracks = [];
    this.props.tracks.map((track, index) => {
      tracks.push(
        <Track key={index}
               track={track}
               isOdd={index % 2 === 0}
               isSelected={index === this.props.currentTrackIndex}
               onSelect={this.handleTrackSelect.bind(this, index)}
               onSelectAlbum={this.handleAlbumSelect.bind(this, index)}
               onSelectArtist={this.handleArtistSelect.bind(this, index)} />
      );
    });
    return (
      <Table hover={true} striped={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Artist</th>
            <th>Title</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {tracks}
        </tbody>
      </Table>
    );
  }
}

export default TrackList;