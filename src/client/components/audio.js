// Copyright (C) 2016 Luka Novsak <lnovsak@gmail.com>
//
// This file is part of replay.
//
// replay is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// replay is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with replay.  If not, see <http://www.gnu.org/licenses/>.

import React from "react";

export default class Audio extends React.Component {
  static propTypes = {
    command: React.PropTypes.object,
    onCommand: React.PropTypes.func.isRequired,
    onDurationchange: React.PropTypes.func.isRequired,
    onEnded: React.PropTypes.func.isRequired,
    onPause: React.PropTypes.func.isRequired,
    onPlaying: React.PropTypes.func.isRequired,
    onTimeupdate: React.PropTypes.func.isRequired,
    src: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.handleDurationchange = this.handleDurationchange.bind(this);
    this.handleTimeupdate = this.handleTimeupdate.bind(this);
  }

  handleDurationchange() {
    this.props.onDurationchange(this.audio.duration);
  }

  handleTimeupdate() {
    this.props.onTimeupdate(this.audio.currentTime);
  }

  componentDidMount() {
    this.audio.addEventListener("durationchange", this.handleDurationchange);
    this.audio.addEventListener("ended", this.props.onEnded);
    this.audio.addEventListener("pause", this.props.onPause);
    this.audio.addEventListener("playing", this.props.onPlaying);
    this.audio.addEventListener("timeupdate", this.handleTimeupdate);
  }

  componentWillUnmount() {
    this.audio.removeEventListener("durationchange", this.handleDurationchange);
    this.audio.removeEventListener("ended", this.props.onEnded);
    this.audio.removeEventListener("pause", this.props.onPause);
    this.audio.removeEventListener("playing", this.props.onPlaying);
    this.audio.removeEventListener("timeupdate", this.handleTimeupdate);
  }

  componentDidUpdate() {
    if (this.props.command) {
      this.props.onCommand();
      const mapCommandsToFunctions = {
        "PAUSE": this.pause.bind(this),
        "PLAY": this.play.bind(this),
        "SEEK": this.seek.bind(this, this.props.command.time)
      };
      mapCommandsToFunctions[this.props.command.type]();
    }
  }

  pause() {
    this.audio.pause();
  }

  play() {
    this.audio.play();
  }

  seek(time) {
    this.audio.currentTime = time;
  }

  render() {
    return <audio src={this.props.src}
                  ref={(audio) => this.audio = audio} />;
  }
}
