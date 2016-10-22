import React from "react";
import Radium from "radium";

const propTypes = {
  track: React.PropTypes.object.isRequired,
  isOdd: React.PropTypes.bool.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

class Track extends React.Component {
  render() {
    return (
      <tr onClick={this.props.onSelect}
          className={this.props.isSelected ? "table-info" : null}>
        <td>{this.props.track.tags.track_number}</td>
        <td>{this.props.track.tags.artist}</td>
        <td>{this.props.track.tags.title}</td>
        <td>{this.props.track.tags.album}</td>
      </tr>
    );
  }
}

Track.propTypes = propTypes;

export default Radium(Track);
