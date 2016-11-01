import React from "react";
import Base from "../base";
import Progress from "./progress";

export default class ProgressBar extends Base {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

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

  render() {
    return (
      <div className={this.renderStyle()}
           onClick={this.handleClick.bind(this)}>
        <Progress value={this.props.value} />
      </div>
    )
  }
}
