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

class Button extends React.Component {
  style = {
    background: "#272727",
    border: "0",
    color: "#eee",
    cursor: "pointer",
    padding: "0.8rem 1.6rem",
    ":hover": {
      background: "#333"
    }
  };

  render() {
    return (
      <button {...this.props}>
        {this.props.children}
      </button>
    );
  }
}

export default withStyle(Button);
