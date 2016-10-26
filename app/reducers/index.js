const initialState = {
  tracks: [],
  queue: [],
  currentTrackIndex: null,
  playing: false,
  currentTime: null,
  duration: null
};

export default (state=initialState, action) => {
  switch (action.type) {
  case "RECEIVE_TRACKS":
    return {
      ...state,
      tracks: action.tracks
    };
  case "SELECT_TRACK":
    return {
      ...state,
      currentTrackIndex: action.trackIndex
    };
  case "ENQUEUE_TRACK":
    return {
      ...state,
      queue: state.queue.concat(state.tracks[action.trackIndex])
    };
  case "END_TRACK":
    if (state.queue[state.currentTrackIndex + 1]) {
      return {
        ...state,
        currentTrackIndex: state.currentTrackIndex + 1
      };
    } else {
      return {
        ...state,
        playing: false
      };
    }
  case "UPDATE_PLAYING_STATE":
    return {
      ...state,
      playing: action.playingState
    };
  case "UPDATE_CURRENT_TIME":
    return {
      ...state,
      currentTime: action.currentTime
    };
  case "UPDATE_DURATION":
    return {
      ...state,
      duration: action.duration
    };
  default:
    return state;
  }
};
