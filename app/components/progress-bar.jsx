import React from "react";
import Base from "./base";

const propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
};

class ProgressBar extends Base {
  handleClick(event) {
    const rect = event.target.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const newValue = Math.round(relativeX / rect.width * 100);
    this.props.onChange(newValue);
  }

  style() {
    return {
      height: "0.4rem",
      background: "#333"
    };
  }

  progressStyle() {
    return {
      background: "#2a9fd6",
      height: "0.4rem"
    }
  }

  render() {
    return (
      <div className={this.renderStyle()}
           onClick={this.handleClick.bind(this)}>
        <div className={this.renderRule(this.progressStyle)}
             style={{width: `${this.props.value || 0}%`}}>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = propTypes;

export default ProgressBar;
