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

import React from "react";
import Toolbar from "./toolbar";
import TrackList from "../track-list";

export default class Import extends React.Component {
  static propTypes = {
    tracks: React.PropTypes.array.isRequired,
    onImport: React.PropTypes.func.isRequired,
    onMount: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.onMount();
  }

  handleImport() {
    this.props.tracks.forEach(
      (track, index) => this.props.onImport(index)
    );
  }

  render() {
    return (
      <div>
        <Toolbar count={this.props.tracks.length}
                 onImport={this.handleImport.bind(this)} />
        <TrackList tracks={this.props.tracks} />
      </div>
    );
  }
}
