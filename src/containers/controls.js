import { connect } from "react-redux";
import Controls from "../components/controls";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    duration: state.default.duration,
    state: state.default.state,
    time: state.default.time
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNext: () => dispatch(actions.next()),
    onPause: () => dispatch(actions.pause()),
    onPlay: () => dispatch(actions.play()),
    onPrevious: () => dispatch(actions.previous()),
    onSeek: (time) => dispatch(actions.seek(time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
