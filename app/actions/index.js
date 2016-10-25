import axios from "axios";

export function receiveTracks(tracks) {
  return {
    type: "RECEIVE_TRACKS",
    tracks
  }
}

export function loadTracks() {
  return (dispatch) => {
    return axios.get(`/api/tracks`)
      .then(response => {
        dispatch(receiveTracks(response.data));
      });
  };
}

export function selectTrack(trackIndex) {
  return {
    type: "SELECT_TRACK",
    trackIndex
  };
}

export function updatePlayingState(playingState) {
  return {
    type: "UPDATE_PLAYING_STATE",
    playingState
  }
}

export function updateCurrentTime(currentTime) {
  return {
    type: "UPDATE_CURRENT_TIME",
    currentTime
  }
}

export function updateDuration(duration) {
  return {
    type: "UPDATE_DURATION",
    duration
  }
}
