import React from "react";
import TrackList from "./track-list";

export default class Library extends React.Component {
  static propTypes = {
    tracks: React.PropTypes.array,
    onMount: React.PropTypes.func.isRequired,
    onSelect: React.PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return <TrackList tracks={this.props.tracks}
                      onSelect={this.props.onSelect} />;
  }
}
