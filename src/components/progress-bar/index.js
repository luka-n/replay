import React from "react";
import withStyle from "../with-style";
import Progress from "./progress";

class ProgressBar extends React.Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

  style = {
    height: "0.4rem",
    background: "#333",
    cursor: "pointer"
  };

  handleClick(event) {
    const rect = event.target.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const newValue = Math.round(relativeX / rect.width * 100);
    this.props.onChange(newValue);
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <Progress value={this.props.value} />
      </div>
    )
  }
}

export default withStyle(ProgressBar);