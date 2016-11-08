import React from "react";
import TrackList from "./track-list";

export default class Queue extends React.Component {
  static propTypes = {
    tracks: React.PropTypes.array,
    currentIndex: React.PropTypes.number,
    onSelect: React.PropTypes.func
  };

  render() {
    return (
      <TrackList tracks={this.props.tracks}
                 currentIndex={this.props.currentIndex}
                 onSelect={this.props.onSelect} />
    )
  }
}
