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
import withStyle from "../with-style";
import Progress from "./progress";

class ProgressBar extends React.Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

  style = {
    height: "0.4rem",
    background: "#333",
    cursor: "pointer"
  };

  handleClick(event) {
    const rect = event.target.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const newValue = Math.round(relativeX / rect.width * 100);
    this.props.onChange(newValue);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <Progress value={this.props.value} />
      </div>
    );
  }
}

export default withStyle(ProgressBar);
