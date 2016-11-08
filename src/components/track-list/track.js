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

  style = {
    cursor: "pointer"
  };

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
