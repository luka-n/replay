import { connect } from "react-redux";

import Controls from "../components/controls";

import {
  updatePlayingState,
  updateSeekTime,
  nextTrack,
  previousTrack
} from "../actions";

function mapStateToProps(state) {
  return {
    currentTime: state.default.currentTime,
    duration: state.default.duration,
    playing: state.default.playing
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlay: () => dispatch(updatePlayingState(true)),
    onPause: () => dispatch(updatePlayingState(false)),
    onSeek: (seekTime) => dispatch(updateSeekTime(seekTime)),
    onNext: () => dispatch(nextTrack()),
    onPrevious: () => dispatch(previousTrack())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
