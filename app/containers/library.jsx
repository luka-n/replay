import React from "react";
import { connect } from "react-redux";

import Library from "../components/library";

import { selectTrack, loadTracks } from "../actions";

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    currentTrackIndex: state.currentTrackIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: trackIndex => dispatch(selectTrack(trackIndex)),
    loadTracks: () => dispatch(loadTracks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
