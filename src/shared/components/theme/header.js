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

class Header extends React.Component {
  style = {
    background: "#000",
    boxSizing: "border-box",
    borderBottom: "thin solid #333",
    height: "3.2rem",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    padding: "0 2rem",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Header);
