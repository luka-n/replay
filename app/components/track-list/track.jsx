import React from "react";

import Base from "../base";

import Row from "../table/row";
import Column from "../table/column";

import Artist from "./artist";
import Album from "./album";

export default class Track extends Base {
  static propTypes = {
    track: React.PropTypes.object.isRequired,
    isOdd: React.PropTypes.bool.isRequired,
    isSelected: React.PropTypes.bool.isRequired,
    onSelect: React.PropTypes.func.isRequired,
    onSelectAlbum: React.PropTypes.func.isRequired,
    onSelectArtist: React.PropTypes.func.isRequired
  };

  handleAlbumClick(event) {
    event.stopPropagation();
    this.props.onSelectAlbum();
  }

  handleArtistClick(event) {
    event.stopPropagation();
    this.props.onSelectArtist();
  }

  style() {
    return {
      cursor: "pointer"
    };
  }

  render() {
    return (
      <Row onClick={this.props.onSelect}
           className={this.renderRule(this.style)}>
        <Column>{this.props.track.tags.track_number}</Column>
        <Column>
          <Artist name={this.props.track.tags.artist}
                  onClick={this.handleArtistClick.bind(this)} />
        </Column>
        <Column>{this.props.track.tags.title}</Column>
        <Column>
          <Album name={this.props.track.tags.album}
                  onClick={this.handleAlbumClick.bind(this)} />
        </Column>
      </Row>
    );
  }
}
