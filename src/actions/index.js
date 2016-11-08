import * as actionTypes from "../constants/action-types";

export function updateQueueIndex(queueIndex) {
  return {type: actionTypes.UPDATE_QUEUE_INDEX, queueIndex};
};

export function receiveTracks(tracks) {
  return {type: actionTypes.RECEIVE_TRACKS, tracks};
};

export function loadTracks() {
  return async (dispatch) => {
    const response = await fetch("/api/tracks");
    const json = await response.json();
    dispatch(receiveTracks(json));
  };
};

export function enqueue(track) {
  return {type: actionTypes.ENQUEUE, track};
};

export function next() {
  return (dispatch, getState) => {
    const state = getState().default;
    if (state.random) {
      dispatch(play(Math.floor(Math.random() * state.queue.length)));
    } else if (state.queueIndex + 1 < state.queue.length) {
      dispatch(play(state.queueIndex + 1));
    } else if (state.repeat) {
      dispatch(play(0));
    }
  };
};

export function pause() {
  return {type: actionTypes.PAUSE_COMMAND};
};

export function playCommand() {
  return {type: actionTypes.PLAY_COMMAND};
}

export function play(index) {
  return (dispatch, getState) => {
    const state = getState().default;
    if (index !== state.queueIndex) {
      dispatch(updateQueueIndex(index));
    }
    dispatch(playCommand());
  };
};

export function previous() {
  return (dispatch, getState) => {
    const state = getState().default;
    if (state.random) {
      dispatch(play(Math.floor(Math.random() * state.queue.length)));
    } else if (state.queueIndex > 0) {
      dispatch(play(state.queueIndex - 1));
    }
  };
};

export function seek(time) {
  return {type: actionTypes.SEEK_COMMAND, time};
};

export function clearCommand() {
  return {type: actionTypes.CLEAR_COMMAND};
};

export function durationChange(duration) {
  return {type: actionTypes.DURATION_CHANGE, duration};
};

export function timeUpdate(time) {
  return {type: actionTypes.TIME_UPDATE, time};
};

export function endedState() {
  return {type: actionTypes.ENDED_STATE};
};

export function ended() {
  return (dispatch) => {
    dispatch(endedState());
    dispatch(next());
  };
};

export function pausedState() {
  return {type: actionTypes.PAUSED_STATE};
};

export function playingState() {
  return {type: actionTypes.PLAYING_STATE};
};

export function toggleRandom() {
  return {type: actionTypes.TOGGLE_RANDOM};
};

export function toggleRepeat() {
  return {type: actionTypes.TOGGLE_REPEAT};
};
