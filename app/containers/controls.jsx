import React from "react";
import { connect } from "react-redux";

import Controls from "../components/controls";

import { updatePlayingState } from "../actions";

function mapStateToProps(state) {
  return {
    progress: state.default.currentTime / state.default.duration * 100,
    playing: state.default.playing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlay: () => dispatch(updatePlayingState(true)),
    onPause: () => dispatch(updatePlayingState(false))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
