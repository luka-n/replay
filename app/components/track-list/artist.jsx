import React from "react";
import Radium from "radium";

class Artist extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  };

  style() {
    return {
      ":hover": {
        color: "#2a9fd6",
        textDecoration: "underline"
      }
    };
  }

  render() {
    return (
      <span onClick={this.props.onClick} style={this.style()}>
        {this.props.name}
      </span>
    );
  }
}

export default Radium(Artist);
