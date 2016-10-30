import React from "react";

import { Icon } from "react-fa";

import Base from "./base";
import ProgressBar from "./progress-bar";

const propTypes = {
  currentTime: React.PropTypes.number,
  duration: React.PropTypes.number,
  playing: React.PropTypes.bool.isRequired,
  onPlay: React.PropTypes.func.isRequired,
  onPause: React.PropTypes.func.isRequired,
  onSeek: React.PropTypes.func.isRequired
};

class Controls extends Base {
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

  buttonStyle(props) {
    return {
      background: "#000",
      border: "0",
      color: "#ddd",
      cursor: "pointer",
      width: "2.8rem",
      height: "2.8rem",
      lineHeight: "2.8rem",
      fontSize: "1.4rem",
      ":hover": {
        background: "#1a1a1a"
      }
    };
  }

  render() {
    return (
      <div className={this.renderStyle()}>
        <ProgressBar value={this.props.currentTime / this.props.duration * 100}
                     onChange={this.handleProgressChange.bind(this)} />
        <button className={this.renderRule(this.buttonStyle)}
                onClick={this.handleToggleClick.bind(this)}>
          <Icon name={this.props.playing ? "pause" : "play"} />
        </button>
      </div>
    );
  }
}

Controls.propTypes = propTypes;

export default Controls;
