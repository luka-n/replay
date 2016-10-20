import React from "react";
import Radium from "radium";

const propTypes = {
  track: React.PropTypes.object.isRequired,
  isOdd: React.PropTypes.bool.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onSelect: React.PropTypes.func.isRequired
};

const styles = {
  column: {
    padding: "0.5em 1em"
  }
};

class Track extends React.Component {
  getBackgroundColor() {
    if (this.props.isSelected) {
      return "lightblue";
    } else if (this.props.isOdd) {
      return "inherit";
    } else {
      return "lightgray";
    }
  }

  render() {
    return (
      <tr onClick={this.props.onSelect}
          style={{
            backgroundColor: this.getBackgroundColor(),
            padding: "0.25em 0.5em",
            ":hover": {
              backgroundColor: "lightyellow"
            }
          }}>
        <td style={styles.column}>{this.props.track.tags.track_number}</td>
        <td style={styles.column}>{this.props.track.tags.artist}</td>
        <td style={styles.column}>{this.props.track.tags.title}</td>
        <td style={styles.column}>{this.props.track.tags.album}</td>
      </tr>
    );
  }
}

Track.propTypes = propTypes;

export default Radium(Track);
