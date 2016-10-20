import React from "react";

import Controls from "./controls";

const propTypes = {
  track: React.PropTypes.object
};

class Audio extends React.Component {
  audioSrc() {
    return this.props.track ? `/tracks/${this.props.track._id}` : null;
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

  render() {
    return (
      <div>
        <audio src={this.audioSrc()}
               ref={this.setAudioTag.bind(this)}>
        </audio>
        <Controls onPlay={this.handlePlay.bind(this)}
                  onPause={this.handlePause.bind(this)} />
      </div>
    );
  }
}

Audio.propTypes = propTypes;

export default Audio;
