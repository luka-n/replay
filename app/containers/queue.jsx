import { connect } from "react-redux";

import Queue from "../components/queue";

import { selectTrack } from "../actions";

function mapStateToProps(state) {
  return {
    tracks: state.default.queue,
    currentTrackIndex: state.default.currentTrackIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: trackIndex => dispatch(selectTrack(trackIndex))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
