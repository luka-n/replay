import React from "react";
import Radium from "radium";

import { Icon } from "react-fa";

import ProgressBar from "../progress-bar";
import Button from "./button";

class Controls extends React.Component {
  static propTypes = {
    currentTime: React.PropTypes.number,
    duration: React.PropTypes.number,
    playing: React.PropTypes.bool.isRequired,
    onPlay: React.PropTypes.func.isRequired,
    onPause: React.PropTypes.func.isRequired,
    onSeek: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onPrevious: React.PropTypes.func.isRequired
  };

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

  style() {
    return {
      textAlign: "center"
    };
  }

  render() {
    return (
      <div style={this.style()}>
        <ProgressBar value={this.props.currentTime / this.props.duration * 100}
                     onChange={this.handleProgressChange.bind(this)} />
        <Button onClick={this.props.onPrevious}>
          <Icon name="step-backward" />
        </Button>
        <Button onClick={this.handleToggleClick.bind(this)}>
          <Icon name={this.props.playing ? "pause" : "play"} />
        </Button>
        <Button onClick={this.props.onNext}>
          <Icon name="step-forward" />
        </Button>
      </div>
    );
  }
}

export default Radium(Controls);
