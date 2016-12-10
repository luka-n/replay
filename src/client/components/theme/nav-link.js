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
import {Link} from "react-router";
import withStyle from "../with-style";

const LinkWithStyle = withStyle(Link);

class NavLink extends React.Component {
  static propTypes = {
    to: React.PropTypes.string.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  isActive() {
    return this.context.router.isActive(this.props.to, true);
  }

  style() {
    return {
      color: this.isActive() ? "#fff" : "#999",
      cursor: "pointer",
      fontSize: "1.2rem",
      padding: "0rem 1rem",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      ":hover": {
        background: "#1a1a1a"
      }
    };
  }

  render() {
    return (
      <LinkWithStyle {...this.props}>
        {this.props.children}
      </LinkWithStyle>
    );
  }
}

export default withStyle(NavLink);
