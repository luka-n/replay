import React from "react";

import { Button } from "reactstrap";
import { Icon } from "react-fa";

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
      <div className="text-xs-center">
        <Button color="danger"
                onClick={this.handlePlayClick.bind(this)}>
          <Icon name="play" />
        </Button>
        <Button color="danger"
                onClick={this.handlePauseClick.bind(this)}>
          <Icon name="pause" />
        </Button>
      </div>
    );
  }
}

Controls.propTypes = propTypes;

export default Controls;
