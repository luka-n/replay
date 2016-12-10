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
import * as repeatTypes from "../constants/repeat-types";

const initialState = {
  command: null,
  duration: null,
  queue: [],
  queueIndex: null,
  random: false,
  repeat: repeatTypes.REPEAT_NONE,
  state: null,
  time: null,
  tracks: [],
  imports: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_COMMAND:
      return {...state, command: null};
    case actionTypes.PAUSE_COMMAND:
      return {...state, command: {type: "PAUSE"}};
    case actionTypes.PLAY_COMMAND:
      return {...state, command: {type: "PLAY"}};
    case actionTypes.SEEK_COMMAND:
      return {...state, command: {type: "SEEK", time: action.time}};
    case actionTypes.DURATION_CHANGE:
      return {...state, duration: action.duration};
    case actionTypes.TIME_UPDATE:
      return {...state, time: action.time};
    case actionTypes.ENQUEUE:
      return {...state, queue: [...state.queue, action.track]};
    case actionTypes.UPDATE_QUEUE_INDEX:
      return {...state, queueIndex: action.queueIndex};
    case actionTypes.ENDED_STATE:
      return {...state, state: "ENDED"};
    case actionTypes.PAUSED_STATE:
      return {...state, state: "PAUSED"};
    case actionTypes.PLAYING_STATE:
      return {...state, state: "PLAYING"};
    case actionTypes.RECEIVE_TRACKS:
      return {...state, tracks: action.tracks};
    case actionTypes.RECEIVE_IMPORTS:
      return {...state, imports: action.imports};
    case actionTypes.TOGGLE_RANDOM:
      return {...state, random: !state.random};
    case actionTypes.SET_REPEAT:
      return {...state, repeat: action.repeat};
    default:
      return state;
  }
};
