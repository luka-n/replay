import React from "react";

import {
  MdPause,
  MdPlayArrow,
  MdRepeat,
  MdRepeatOne,
  MdShuffle,
  MdSkipNext,
  MdSkipPrevious
} from "react-icons/lib/md";

import withStyle from "../with-style";
import ProgressBar from "../progress-bar";

import {
  REPEAT_NONE,
  REPEAT_ALL,
  REPEAT_SINGLE
} from "../../constants/repeat-types";

import Button from "./button";

class Controls extends React.Component {
  static propTypes = {
    duration: React.PropTypes.number,
    random: React.PropTypes.bool,
    repeat: React.PropTypes.string,
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

  handleRepeatClick() {
    switch (this.props.repeat) {
      case REPEAT_NONE: return this.props.onRepeat(REPEAT_ALL);
      case REPEAT_ALL: return this.props.onRepeat(REPEAT_SINGLE);
      case REPEAT_SINGLE: return this.props.onRepeat(REPEAT_NONE);
    }
  }

  render() {
    return (
      <div>
        <ProgressBar value={this.props.time / this.props.duration * 100}
                     onChange={(value) => this.props.onSeek(this.props.duration / 100 * value)} />
        <Button inactive={!this.props.random} onClick={this.props.onRandom}>
          <MdShuffle size={32} />
        </Button>
        <Button onClick={this.props.onPrevious}>
          <MdSkipPrevious size={32} />
        </Button>
        <Button onClick={this.props.state === "PLAYING" ? this.props.onPause : this.props.onPlay}>
          {
            this.props.state === "PLAYING" ?
              <MdPause size={32} /> :
              <MdPlayArrow size={32} />
          }
        </Button>
        <Button onClick={this.props.onNext}>
          <MdSkipNext size={32} />
        </Button>
        <Button inactive={this.props.repeat === REPEAT_NONE}
                onClick={this.handleRepeatClick.bind(this)}>
          {
            this.props.repeat === REPEAT_SINGLE ?
              <MdRepeatOne size={32} /> :
              <MdRepeat size={32} />
          }
        </Button>
      </div>
    );
  }
}

export default withStyle(Controls);
