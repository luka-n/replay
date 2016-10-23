import React from "react";

import Controls from "./controls";

const propTypes = {
  track: React.PropTypes.object
};

class Audio extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    this._audioTag.addEventListener("playing", this.handlePlayingEvent.bind(this));
    this._audioTag.addEventListener("pause", this.handlePauseEvent.bind(this));
    this._audioTag.addEventListener("ended", this.handleEndedEvent.bind(this));
    this._audioTag.addEventListener("timeupdate", this.handleTimeupdateEvent.bind(this));
    this._audioTag.addEventListener("durationchange", this.handleDurationchangeEvent.bind(this));
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
