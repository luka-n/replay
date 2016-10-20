import React from "react";

const propTypes = {
  onPlay: React.PropTypes.func.isRequired,
  onPause: React.PropTypes.func.isRequired
};

class Controls extends React.Component {
  handlePlayClick() {
    this.props.onPlay();
  }

  handlePauseClick() {
    this.props.onPause();
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePlayClick.bind(this)}>Play</button>
        <button onClick={this.handlePauseClick.bind(this)}>Pause</button>
      </div>
    );
  }
}

Controls.propTypes = propTypes;

export default Controls;
