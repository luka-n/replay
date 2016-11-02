import React from "react";
import Radium from "radium";

class Progress extends React.Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired
  };

  style() {
    return {
      background: "#2a9fd6",
      height: "0.4rem",
      width: `${this.props.value || 0}%`
    };
  }

  render() {
    return (
      <div style={this.style()}>
      </div>
    );
  }
}

export default Radium(Progress);
