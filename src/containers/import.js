import { connect } from "react-redux";
import Import from "../components/import";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    tracks: state.default.imports
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onImport: (track) => dispatch(actions.importTrack(track)),
    onMount: () => dispatch(actions.loadImports())
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...stateProps,
    ...dispatchProps,
    onImport: (index) => dispatchProps.onImport(stateProps.tracks[index]),
    ...ownProps
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps, mergeProps
)(Import);
