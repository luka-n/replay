import React from "react";
import { connect } from "react-redux";

import Audio from "../components/audio";

import {
  updatePlayingState,
  updateCurrentTime,
  updateDuration
} from "../actions";

function mapStateToProps(state) {
  return {
    track: state.tracks[state.currentTrackIndex],
    playing: state.playing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlaying: () => dispatch(updatePlayingState(true)),
    onPause: () => dispatch(updatePlayingState(false)),
    onEnded: () => dispatch(updatePlayingState(false)),
    onTimeupdate: (currentTime) => dispatch(updateCurrentTime(currentTime)),
    onDurationchange: (duration) => dispatch(updateDuration(duration))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
