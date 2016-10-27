import React from "react";

const propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
};

class ProgressBar extends React.Component {
  handleClick(event) {
    const rect = event.target.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const newValue = Math.round(relativeX / rect.width * 100);
    this.props.onChange(newValue);
  }

  render() {
    return (
      <div className="progress-bar" onClick={this.handleClick.bind(this)}>
        <div className="progress-bar-progress"
             style={{width: `${this.props.value}%`}}>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = propTypes;

export default ProgressBar;
