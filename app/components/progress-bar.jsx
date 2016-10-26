import React from "react";

import "./progress-bar.scss";

const propTypes = {
  value: React.PropTypes.number.isRequired
};

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress-bar">
        <div className="progress-bar-progress"
             style={{width: `${this.props.value}%`}}>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = propTypes;

export default ProgressBar;
