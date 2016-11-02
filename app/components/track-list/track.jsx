import React from "react";
import Radium from "radium";

import Row from "../table/row";
import Column from "../table/column";

import Artist from "./artist";
import Album from "./album";

class Track extends React.Component {
  static propTypes = {
    track: React.PropTypes.object.isRequired,
    isEven: React.PropTypes.bool.isRequired,
    isLast: React.PropTypes.bool.isRequired,
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
           isEven={this.props.isEven}
           isLast={this.props.isLast}
           style={this.style()}>
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

export default Radium(Track);
