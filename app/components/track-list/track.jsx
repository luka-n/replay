import React from "react";

const propTypes = {
  track: React.PropTypes.object.isRequired,
  isOdd: React.PropTypes.bool.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  onSelectAlbum: React.PropTypes.func.isRequired,
  onSelectArtist: React.PropTypes.func.isRequired
};

class Track extends React.Component {
  handleAlbumClick(event) {
    event.stopPropagation();
    this.props.onSelectAlbum();
  }

  handleArtistClick(event) {
    event.stopPropagation();
    this.props.onSelectArtist();
  }

  render() {
    return (
      <tr onClick={this.props.onSelect}
          className={this.props.isSelected ? "table-info" : null}>
        <td>{this.props.track.tags.track_number}</td>
        <td>
          <span className="artist" onClick={this.handleArtistClick.bind(this)}>
            {this.props.track.tags.artist}
          </span>
        </td>
        <td>{this.props.track.tags.title}</td>
        <td>
          <span className="album" onClick={this.handleAlbumClick.bind(this)}>
            {this.props.track.tags.album}
          </span>
        </td>
      </tr>
    );
  }
}

Track.propTypes = propTypes;

export default Track;
