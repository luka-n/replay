import React from "react";

import { Button } from "reactstrap";
import { Icon } from "react-fa";

import ProgressBar from "./progress-bar";

const propTypes = {
  currentTime: React.PropTypes.number,
  duration: React.PropTypes.number,
  playing: React.PropTypes.bool.isRequired,
  onPlay: React.PropTypes.func.isRequired,
  onPause: React.PropTypes.func.isRequired,
  onSeek: React.PropTypes.func.isRequired
};

class Controls extends React.Component {
  handleToggleClick() {
    if (this.props.playing) {
      this.props.onPause();
    } else {
      this.props.onPlay();
    }
  }

  handleProgressChange(newValue) {
    const seekTime = this.props.duration / 100 * newValue;
    this.props.onSeek(seekTime);
  }

  render() {
    return (
      <div className="controls text-xs-center">
        <ProgressBar value={this.props.currentTime / this.props.duration * 100}
                     onChange={this.handleProgressChange.bind(this)} />
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
