import React from "react";
import { connect } from "react-redux";

import Library from "../components/library";

import { enqueueTrack, loadTracks } from "../actions";

function mapStateToProps(state) {
  return {
    tracks: state.default.tracks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: trackIndex => dispatch(enqueueTrack(trackIndex)),
    loadTracks: () => dispatch(loadTracks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
