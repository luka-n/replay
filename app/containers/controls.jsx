import React from "react";
import { connect } from "react-redux";

import Controls from "../components/controls";

import { updatePlayingState } from "../actions";

function mapStateToProps(state) {
  return {
    progress: state.currentTime / state.duration * 100,
    playing: state.playing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlay: () => dispatch(updatePlayingState(true)),
    onPause: () => dispatch(updatePlayingState(false))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
