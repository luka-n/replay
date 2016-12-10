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

class Container extends React.Component {
  style = {
    background: "#000",
    boxSizing: "border-box",
    color: "#ddd",
    fontFamily: "sans-serif",
    minHeight: "100vh",
    padding: "5.2rem 2rem"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Container);
