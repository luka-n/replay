import {connect} from "react-redux";
import Queue from "../components/queue";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    tracks: state.default.queue,
    currentIndex: state.default.queueIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelect: (index) => dispatch(actions.play(index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
