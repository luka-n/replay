import React from "react";

import { Button, Progress } from "reactstrap";
import { Icon } from "react-fa";

const propTypes = {
  progress: React.PropTypes.number.isRequired,
  playing: React.PropTypes.bool.isRequired,
  onPlay: React.PropTypes.func.isRequired,
  onPause: React.PropTypes.func.isRequired
};

const styles = {
  progress: {
    margin: "0"
  }
};

class Controls extends React.Component {
  handleToggleClick() {
    if (this.props.playing) {
      this.props.onPause();
    } else {
      this.props.onPlay();
    }
  }

  render() {
    return (
      <div className="text-xs-center">
        <Progress value={this.props.progress} style={styles.progress} />
        <Button color="danger"
                onClick={this.handleToggleClick.bind(this)}>
          <Icon name={this.props.playing ? "pause" : "play"} />
        </Button>
      </div>
    );
  }
}

Controls.propTypes = propTypes;

export default Controls;
