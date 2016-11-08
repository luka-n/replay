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
                  ref={(audio) => this.audio = audio} />
  }
}
