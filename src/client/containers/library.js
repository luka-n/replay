import {connect} from "react-redux";
import Library from "../components/library";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    tracks: state.default.tracks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => dispatch(actions.loadTracks()),
    onSelect: (track) => dispatch(actions.enqueue(track))
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
    onSelect: (index) => dispatchProps.onSelect(stateProps.tracks[index]),
    ...ownProps
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps, mergeProps
)(Library);
