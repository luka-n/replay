import React from "react";
import withStyle from "../with-style";

import { Icon } from "react-fa";

import ProgressBar from "../progress-bar";
import Button from "./button";

class Controls extends React.Component {
  static propTypes = {
    duration: React.PropTypes.number,
    random: React.PropTypes.bool,
    repeat: React.PropTypes.bool,
    state: React.PropTypes.string,
    time: React.PropTypes.number,
    onPlay: React.PropTypes.func.isRequired,
    onPause: React.PropTypes.func.isRequired,
    onSeek: React.PropTypes.func.isRequired,
    onNext: React.PropTypes.func.isRequired,
    onPrevious: React.PropTypes.func.isRequired,
    onRandom: React.PropTypes.func.isRequired,
    onRepeat: React.PropTypes.func.isRequired
  };

  style = {
    textAlign: "center"
  };

  render() {
    return (
      <div>
        <ProgressBar value={this.props.time / this.props.duration * 100}
                     onChange={(value) => this.props.onSeek(this.props.duration / 100 * value)} />
        <Button inactive={!this.props.random} onClick={this.props.onRandom}>
          <Icon name="random" />
        </Button>
        <Button onClick={this.props.onPrevious}>
          <Icon name="step-backward" />
        </Button>
        <Button onClick={this.props.state === "PLAYING" ? this.props.onPause : this.props.onPlay}>
          <Icon name={this.props.state === "PLAYING" ? "pause" : "play"} />
        </Button>
        <Button onClick={this.props.onNext}>
          <Icon name="step-forward" />
        </Button>
        <Button inactive={!this.props.repeat} onClick={this.props.onRepeat}>
          <Icon name="repeat" />
        </Button>
      </div>
    );
  }
}

export default withStyle(Controls);
