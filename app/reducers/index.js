const initialState = {
  tracks: [],
  currentTrackIndex: null,
  playing: false,
  currentTime: null,
  duration: null
};

export default (state=initialState, action) => {
  switch (action.type) {
  case "RECEIVE_TRACKS":
    return Object.assign({}, state, {
      tracks: action.tracks
    });
  case "SELECT_TRACK":
    return Object.assign({}, state, {
      currentTrackIndex: action.trackIndex
    });
  case "UPDATE_PLAYING_STATE":
    return Object.assign({}, state, {
      playing: action.playingState
    });
  case "UPDATE_CURRENT_TIME":
    return Object.assign({}, state, {
      currentTime: action.currentTime
    });
  case "UPDATE_DURATION":
    return Object.assign({}, state, {
      duration: action.duration
    });
  default:
    return state;
  }
};
