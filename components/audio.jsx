import React from "react";

import Controls from "./controls";

const propTypes = {
  track: React.PropTypes.object
};

class Audio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      playing: false
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
      progress: (this._audioTag.played.end(0) / this._audioTag.duration) * 100
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
        <Controls progress={this.state.progress}
                  playing={this.state.playing}
                  onPlay={this.handlePlayClick.bind(this)}
                  onPause={this.handlePauseClick.bind(this)} />
      </div>
    );
  }
}

Audio.propTypes = propTypes;

export default Audio;
