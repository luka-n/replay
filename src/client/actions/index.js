// Copyright (C) 2016 Luka Novsak <lnovsak@gmail.com>
//
// This file is part of replay.
//
// replay is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// replay is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with replay.  If not, see <http://www.gnu.org/licenses/>.

import * as actionTypes from "../constants/action-types";
import * as endpoints from "../constants/endpoints";
import * as repeatTypes from "../constants/repeat-types";

export function updateQueueIndex(queueIndex) {
  return {type: actionTypes.UPDATE_QUEUE_INDEX, queueIndex};
}

export function receiveTracks(tracks) {
  return {type: actionTypes.RECEIVE_TRACKS, tracks};
}

export function loadTracks() {
  return async (dispatch) => {
    const response = await fetch(endpoints.TRACKS_ENDPOINT);
    const json = await response.json();
    dispatch(receiveTracks(json));
  };
}

export function enqueue(track) {
  return {type: actionTypes.ENQUEUE, track};
}

export function next() {
  return (dispatch, getState) => {
    const state = getState().default;
    if (state.random) {
      dispatch(play(Math.floor(Math.random() * state.queue.length)));
    } else if (state.queueIndex + 1 < state.queue.length) {
      dispatch(play(state.queueIndex + 1));
    } else if (state.repeat === repeatTypes.REPEAT_ALL) {
      dispatch(play(0));
    }
  };
}

export function pause() {
  return {type: actionTypes.PAUSE_COMMAND};
}

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
}

export function previous() {
  return (dispatch, getState) => {
    const state = getState().default;
    if (state.random) {
      dispatch(play(Math.floor(Math.random() * state.queue.length)));
    } else if (state.queueIndex > 0) {
      dispatch(play(state.queueIndex - 1));
    }
  };
}

export function seek(time) {
  return {type: actionTypes.SEEK_COMMAND, time};
}

export function clearCommand() {
  return {type: actionTypes.CLEAR_COMMAND};
}

export function durationChange(duration) {
  return {type: actionTypes.DURATION_CHANGE, duration};
}

export function timeUpdate(time) {
  return {type: actionTypes.TIME_UPDATE, time};
}

export function endedState() {
  return {type: actionTypes.ENDED_STATE};
}

export function ended() {
  return (dispatch, getState) => {
    const state = getState().default;
    dispatch(endedState());
    if (state.repeat === repeatTypes.REPEAT_SINGLE) {
      dispatch(play(state.queueIndex));
    } else {
      dispatch(next());
    }
  };
}

export function pausedState() {
  return {type: actionTypes.PAUSED_STATE};
}

export function playingState() {
  return {type: actionTypes.PLAYING_STATE};
}

export function toggleRandom() {
  return {type: actionTypes.TOGGLE_RANDOM};
}

export function setRepeat(repeat) {
  return {type: actionTypes.SET_REPEAT, repeat};
}

export function receiveImports(imports) {
  return {type: actionTypes.RECEIVE_IMPORTS, imports};
}

export function loadImports() {
  return async (dispatch) => {
    const response = await fetch(endpoints.IMPORTS_ENDPOINT);
    const json = await response.json();
    dispatch(receiveImports(json));
  };
}

export function importTrack(track) {
  return async (dispatch) => {
    await fetch(endpoints.TRACKS_ENDPOINT, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({file: track.path})
    });
    dispatch(loadImports());
  };
}
