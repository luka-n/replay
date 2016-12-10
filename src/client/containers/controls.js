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
import Controls from "../components/controls";
import * as actions from "../actions";

function mapStateToProps(state) {
  return {
    duration: state.default.duration,
    random: state.default.random,
    repeat: state.default.repeat,
    state: state.default.state,
    time: state.default.time
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onNext: () => dispatch(actions.next()),
    onPause: () => dispatch(actions.pause()),
    onPlay: () => dispatch(actions.play()),
    onPrevious: () => dispatch(actions.previous()),
    onRandom: () => dispatch(actions.toggleRandom()),
    onRepeat: (repeat) => dispatch(actions.setRepeat(repeat)),
    onSeek: (time) => dispatch(actions.seek(time))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
