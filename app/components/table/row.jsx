import React from "react";
import Radium from "radium";

class Row extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func,
    isLast: React.PropTypes.bool,
    isEven: React.PropTypes.bool
  };

  style() {
    return {
      background: this.props.isEven ? "#0f0f0f" : "inherit",
      borderBottom: this.props.isLast ? "0" : "1px solid #222",
      ":hover": {
        background: "#1a1a1a"
      }
    };
  }

  render() {
    return (
      <tr onClick={this.props.onClick} style={this.style()}>
        {this.props.children}
      </tr>
    );
  }
}

export default Radium(Row);
