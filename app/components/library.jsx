import React from "react";

import TrackList from "./track-list";

const propTypes = {
  tracks: React.PropTypes.array.isRequired,
  currentTrackIndex: React.PropTypes.number,
  loadTracks: React.PropTypes.func.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  onAlbumSelect: React.PropTypes.func.isRequired,
  onArtistSelect: React.PropTypes.func.isRequired
};

class Library extends React.Component {
  componentDidMount() {
    this.props.loadTracks();
  }

  render() {
    return (
      <TrackList tracks={this.props.tracks}
                 currentTrackIndex={this.props.currentTrackIndex}
                 onSelect={this.props.onSelect}
                 onAlbumSelect={this.props.onAlbumSelect}
                 onArtistSelect={this.props.onArtistSelect} />
    );
  }
}

Library.propTypes = propTypes;

export default Library;
