import React from "react";

import { Progress } from "reactstrap";

import Controls from "./controls";

const propTypes = {
  track: React.PropTypes.object
};

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    }
  }
  audioSrc() {
    return this.props.track ? `/api/tracks/${this.props.track._id}` : null;
  }

  setAudioTag(audioTag) {
    this._audioTag = audioTag;
  }

  handlePlay() {
    this._audioTag.play();
  }

  handlePause() {
    this._audioTag.pause();
  }

  componentDidMount() {
    this._audioTag
        .addEventListener("timeupdate", this.handleProgress.bind(this));
  }

  handleProgress() {
    this.setState({
      progress: (this._audioTag.played.end(0) / this._audioTag.duration) * 100
    });
  }

  render() {
    return (
      <div>
        <audio src={this.audioSrc()}
               ref={this.setAudioTag.bind(this)}>
        </audio>
        <Progress value={this.state.progress} />
        <Controls onPlay={this.handlePlay.bind(this)}
                  onPause={this.handlePause.bind(this)} />
      </div>
    );
  }
}

Audio.propTypes = propTypes;

export default Audio;
