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
import Row from "../theme/table/row";
import Column from "../theme/table/column";
import ActionLink from "../theme/action-link";

class Track extends React.Component {
  static propTypes = {
    track: React.PropTypes.object.isRequired,
    isEven: React.PropTypes.bool.isRequired,
    isLast: React.PropTypes.bool.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    onSelect: React.PropTypes.func,
    onSelectAlbum: React.PropTypes.func,
    onSelectArtist: React.PropTypes.func
  };

  style() {
    return {
      cursor: this.props.onSelect ? "pointer" : "auto"
    };
  }

  handleAlbumClick(event) {
    event.stopPropagation();
    this.props.onSelectAlbum();
  }

  handleArtistClick(event) {
    event.stopPropagation();
    this.props.onSelectArtist();
  }

  renderArtist() {
    if (this.props.onSelectArtist) {
      return (
        <ActionLink onClick={this.handleArtistClick.bind(this)}>
          {this.props.track.tags.artist}
        </ActionLink>
      );
    } else {
      return this.props.track.tags.artist;
    }
  }

  renderAlbum() {
    if (this.props.onSelectAlbum) {
      return (
        <ActionLink onClick={this.handleAlbumClick.bind(this)}>
          {this.props.track.tags.album}
        </ActionLink>
      );
    } else {
      return this.props.track.tags.album;
    }
  }

  render() {
    return (
      <Row onClick={this.props.onSelect}
           isEven={this.props.isEven}
           isLast={this.props.isLast}
           isActive={this.props.isSelected}>
        <Column>{this.props.track.tags.track_number}</Column>
        <Column>{this.renderArtist()}</Column>
        <Column>{this.props.track.tags.title}</Column>
        <Column>{this.renderAlbum()}</Column>
      </Row>
    );
  }
}

export default withStyle(Track);
