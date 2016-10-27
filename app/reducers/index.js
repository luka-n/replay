const initialState = {
  tracks: [],
  queue: [],
  currentTrackIndex: null,
  playing: false,
  currentTime: null,
  duration: null,
  seekTime: null
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
  case "ENQUEUE_ALBUM":
    const album = state.tracks[action.trackIndex].tags.album;
    const albumTracks = state.tracks.filter(track => track.tags.album === album);
    return {
      ...state,
      queue: state.queue.concat(albumTracks)
    };
  case "ENQUEUE_ARTIST":
    const artist = state.tracks[action.trackIndex].tags.artist;
    const artistTracks = state.tracks.filter(track => track.tags.artist === artist);
    return {
      ...state,
      queue: state.queue.concat(artistTracks)
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
  case "UPDATE_SEEK_TIME":
    return {
      ...state,
      seekTime: action.seekTime
    };
  case "CLEAR_SEEK_TIME":
    return {
      ...state,
      seekTime: null
    };
  default:
    return state;
  }
};
