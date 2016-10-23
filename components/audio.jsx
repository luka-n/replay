import React from "react";

import Controls from "./controls";

const propTypes = {
  track: React.PropTypes.object
};

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.bindHandlers();
    this.state = {
      playing: false,
      currentTime: null,
      duration: null
    }
  }

  audioSrc() {
    return this.props.track ? `/api/tracks/${this.props.track._id}` : null;
  }

  setAudioTag(audioTag) {
    this._audioTag = audioTag;
  }

  bindHandlers() {
    this.playingHandler = this.handlePlayingEvent.bind(this);
    this.pauseHandler = this.handlePauseEvent.bind(this);
    this.endedHandler = this.handleEndedEvent.bind(this);
    this.timeupdateHandler = this.handleTimeupdateEvent.bind(this);
    this.durationchangeHandler = this.handleDurationchangeEvent.bind(this);
  }

  addHandlers() {
    this._audioTag.addEventListener("playing", this.playingHandler);
    this._audioTag.addEventListener("pause", this.pauseHandler);
    this._audioTag.addEventListener("ended", this.endedHandler);
    this._audioTag.addEventListener("timeupdate", this.timeupdateHandler);
    this._audioTag.addEventListener("durationchange", this.durationchangeHandler);
  }

  removeHandlers() {
    this._audioTag.removeEventListener("playing", this.playingHandler);
    this._audioTag.removeEventListener("pause", this.pauseHandler);
    this._audioTag.removeEventListener("ended", this.endedHandler);
    this._audioTag.removeEventListener("timeupdate", this.timeupdateHandler);
    this._audioTag.removeEventListener("durationchange", this.durationchangeHandler);
  }

  componentDidMount() {
    this.addHandlers();
  }

  componentWillUnmount() {
    this.removeHandlers();
  }

  handlePlayingEvent() {
    this.setState({playing: true});
  }

  handlePauseEvent() {
    this.setState({playing: false});
  }

  handleEndedEvent() {
    this.setState({playing: false, progress: 0});
  }

  handleTimeupdateEvent() {
    this.setState({
      currentTime: this._audioTag.currentTime
    });
  }

  handleDurationchangeEvent() {
    this.setState({
      duration: this._audioTag.duration
    });
  }

  handlePlayClick() {
    this._audioTag.play();
  }

  handlePauseClick() {
    this._audioTag.pause();
  }

  render() {
    return (
      <div>
        <audio src={this.audioSrc()}
               ref={this.setAudioTag.bind(this)}>
        </audio>
        <Controls progress={this.state.currentTime / this.state.duration * 100}
                  playing={this.state.playing}
                  onPlay={this.handlePlayClick.bind(this)}
                  onPause={this.handlePauseClick.bind(this)} />
      </div>
    );
  }
}

Audio.propTypes = propTypes;

export default Audio;
