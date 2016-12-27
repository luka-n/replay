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

import Track from "./track";

import Table from "../theme/table";
import Head from "../theme/table/head";
import Body from "../theme/table/body";
import HeadColumn from "../theme/table/head-column";
import HeadRow from "../theme/table/head-row";

export default class TrackList extends React.Component {
  static propTypes = {
    tracks: React.PropTypes.array.isRequired,
    currentIndex: React.PropTypes.number,
    onSelect: React.PropTypes.func
  };

  handleSelectAlbum(index) {
    const album = this.props.tracks[index].tags.album;
    this.props.tracks.forEach((track, index) => {
      if (track.tags.album === album) {
        this.props.onSelect(index);
      }
    });
  }

  handleSelectArtist(index) {
    const artist = this.props.tracks[index].tags.artist;
    this.props.tracks.forEach((track, index) => {
      if (track.tags.artist === artist) {
        this.props.onSelect(index);
      }
    });
  }

  render() {
    let tracks = [];
    this.props.tracks.map((track, index) => {
      tracks.push(
        <Track key={index}
               track={track}
               isEven={index % 2 !== 0}
               isLast={index === this.props.tracks.length - 1}
               isSelected={index === this.props.currentIndex}
               onSelect={this.props.onSelect &&
                           this.props.onSelect.bind(null, index)}
               onSelectAlbum={this.props.onSelect &&
                                this.handleSelectAlbum.bind(this, index)}
               onSelectArtist={this.props.onSelect &&
                                 this.handleSelectArtist.bind(this, index)} />
      );
    });
    return (
      <Table>
        <Head>
          <HeadRow>
            <HeadColumn>#</HeadColumn>
            <HeadColumn>Artist</HeadColumn>
            <HeadColumn>Title</HeadColumn>
            <HeadColumn>Album</HeadColumn>
          </HeadRow>
        </Head>
        <Body>
          {tracks}
        </Body>
      </Table>
    );
  }
}
