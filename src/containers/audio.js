import { connect } from "react-redux";
import Audio from "../components/audio";
import * as actions from "../actions";

function mapStateToProps(state) {
  const queueTrack = state.default.queue[state.default.queueIndex];
  return {
    command: state.default.command,
    src: queueTrack && queueTrack.src
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCommand: () => dispatch(actions.clearCommand()),
    onDurationchange: (duration) => dispatch(actions.durationChange(duration)),
    onEnded: () => dispatch(actions.endedState()),
    onPause: () => dispatch(actions.pausedState()),
    onPlaying: () => dispatch(actions.playingState()),
    onTimeupdate: (time) => dispatch(actions.timeUpdate(time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
