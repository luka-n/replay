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
import withStyle from "../../with-style";

class Row extends React.Component {
  static propTypes = {
    isLast: React.PropTypes.bool,
    isEven: React.PropTypes.bool,
    isActive: React.PropTypes.bool
  };

  style() {
    let background = "inherit";
    if (this.props.isActive) {
      background = "#2f2f2f";
    } else if (this.props.isEven) {
      background = "#0f0f0f";
    }
    return {
      background: background,
      borderBottom: this.props.isLast ? "0" : "1px solid #222",
      ":hover": {
        background: "#1a1a1a"
      }
    };
  }

  render() {
    const props = {...this.props};
    delete props.isLast;
    delete props.isEven;
    delete props.isActive;
    return (
      <tr {...props}>
        {this.props.children}
      </tr>
    );
  }
}

export default withStyle(Row);
