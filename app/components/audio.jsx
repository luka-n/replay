import React from "react";

import config from "../../config";

const propTypes = {
  track: React.PropTypes.object,
  playing: React.PropTypes.bool.isRequired,
  seekTime: React.PropTypes.number,
  onPlaying: React.PropTypes.func.isRequired,
  onPause: React.PropTypes.func.isRequired,
  onEnded: React.PropTypes.func.isRequired,
  onTimeupdate: React.PropTypes.func.isRequired,
  onDurationchange: React.PropTypes.func.isRequired,
  clearSeekTime: React.PropTypes.func.isRequired
};

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.bindHandlers();
  }

  audioSrc() {
    return this.props.track ?
      `${config.fileServer}/${this.props.track.path}` : null;
  }

  setAudioTag(audioTag) {
    this._audioTag = audioTag;
  }

  handleTimeupdate() {
    this.props.onTimeupdate(this._audioTag.currentTime);
  }

  handleDurationchange() {
    this.props.onDurationchange(this._audioTag.duration);
  }

  bindHandlers() {
    this.timeupdateHandler = this.handleTimeupdate.bind(this);
    this.durationchangeHandler = this.handleDurationchange.bind(this);
  }

  addHandlers() {
    this._audioTag.addEventListener("playing", this.props.onPlaying);
    this._audioTag.addEventListener("pause", this.props.onPause);
    this._audioTag.addEventListener("ended", this.props.onEnded);
    this._audioTag.addEventListener("timeupdate", this.timeupdateHandler);
    this._audioTag.addEventListener("durationchange", this.durationchangeHandler);
  }

  removeHandlers() {
    this._audioTag.removeEventListener("playing", this.props.onPlaying);
    this._audioTag.removeEventListener("pause", this.props.onPause);
    this._audioTag.removeEventListener("ended", this.props.onEnded);
    this._audioTag.removeEventListener("timeupdate", this.timeupdateHandler);
    this._audioTag.removeEventListener("durationchange", this.durationchangeHandler);
  }

  componentDidMount() {
    this.addHandlers();
  }

  componentWillUnmount() {
    this.removeHandlers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.playing && !this.props.playing) {
      this._audioTag.pause();
    } else if (!prevProps.playing && this.props.playing) {
      this._audioTag.play();
    }
    if (this.props.seekTime) {
      this._audioTag.currentTime = this.props.seekTime;
      this.props.clearSeekTime();
    }
  }

  render() {
    return (
      <audio autoPlay
             src={this.audioSrc()}
             ref={this.setAudioTag.bind(this)}>
      </audio>
    );
  }
}

Audio.propTypes = propTypes;

export default Audio;
