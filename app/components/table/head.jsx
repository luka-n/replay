import React from "react";
import Radium from "radium";

class Head extends React.Component {
  style() {
    return {
      background: "#111",
      borderBottom: "2px solid #333",
      color: "#fff",
      textAlign: "left"
    };
  }

  render() {
    return (
      <thead style={this.style()}>
        {this.props.children}
      </thead>
    );
  }
}

export default Radium(Head);
