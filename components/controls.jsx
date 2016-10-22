import React from "react";

import { Button, Progress } from "reactstrap";
import { Icon } from "react-fa";

const propTypes = {
  progress: React.PropTypes.number.isRequired,
  onPlay: React.PropTypes.func.isRequired,
  onPause: React.PropTypes.func.isRequired
};

const styles = {
  progress: {
    margin: "0"
  }
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
        <Progress value={this.props.progress} style={styles.progress} />
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
