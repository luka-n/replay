import React from "react";

import TrackList from "./track-list";

const propTypes = {
  tracks: React.PropTypes.array.isRequired,
  currentTrackIndex: React.PropTypes.number,
  onSelect: React.PropTypes.func.isRequired
};

class Queue extends React.Component {
  render() {
    return (
      <TrackList tracks={this.props.tracks}
                 currentTrackIndex={this.props.currentTrackIndex}
                 onSelect={this.props.onSelect} />
    )
  }
}

Queue.propTypes = propTypes;

export default Queue;
