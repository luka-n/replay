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

export default class RadiumProvider extends React.Component {
  static propTypes = {
    radiumConfig: React.PropTypes.object
  };

  static childContextTypes = {
    _radiumConfig: React.PropTypes.object
  };

  getChildContext() {
    return {_radiumConfig: this.props.radiumConfig};
  }

  render() {
    return React.cloneElement(this.props.children, {...this.props});
  }
}
