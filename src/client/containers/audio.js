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

import {connect} from "react-redux";
import Audio from "../components/audio";
import * as actions from "../actions";
import * as endpoints from "../constants/endpoints";

function mapStateToProps(state) {
  const queueTrack = state.default.queue[state.default.queueIndex];
  return {
    command: state.default.command,
    src: queueTrack && `${endpoints.TRACKS_ENDPOINT}/${queueTrack._id}`
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCommand: () => dispatch(actions.clearCommand()),
    onDurationchange: (duration) => dispatch(actions.durationChange(duration)),
    onEnded: () => dispatch(actions.ended()),
    onPause: () => dispatch(actions.pausedState()),
    onPlaying: () => dispatch(actions.playingState()),
    onTimeupdate: (time) => dispatch(actions.timeUpdate(time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
