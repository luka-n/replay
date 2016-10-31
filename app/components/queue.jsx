import React from "react";

import TrackList from "./track-list";

export default class Queue extends React.Component {
  static propTypes = {
    tracks: React.PropTypes.array.isRequired,
    currentTrackIndex: React.PropTypes.number,
    onSelect: React.PropTypes.func.isRequired
  };

  render() {
    return (
      <TrackList tracks={this.props.tracks}
                 currentTrackIndex={this.props.currentTrackIndex}
                 onSelect={this.props.onSelect} />
    )
  }
}
