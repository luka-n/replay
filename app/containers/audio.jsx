import React from "react";
import { connect } from "react-redux";

import Audio from "../components/audio";

import {
  updatePlayingState,
  updateCurrentTime,
  updateDuration,
  endTrack
} from "../actions";

function mapStateToProps(state) {
  return {
    track: state.default.queue[state.default.currentTrackIndex],
    playing: state.default.playing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlaying: () => dispatch(updatePlayingState(true)),
    onPause: () => dispatch(updatePlayingState(false)),
    onEnded: () => dispatch(endTrack()),
    onTimeupdate: (currentTime) => dispatch(updateCurrentTime(currentTime)),
    onDurationchange: (duration) => dispatch(updateDuration(duration))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
