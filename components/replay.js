import React from "react";

import Audio from "./audio";
import TrackList from "./track-list";

export default class Replay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: null
    };
  }

  handleTrackSelect(track) {
    this.setState({track: track});
  }

  render() {
    return (
      <div>
        <TrackList onSelect={this.handleTrackSelect.bind(this)} />
        <Audio track={this.state.track} />
      </div>
    );
  }
}
