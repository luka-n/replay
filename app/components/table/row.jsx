import React from "react";
import Radium from "radium";

class Row extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func,
    isLast: React.PropTypes.bool,
    isEven: React.PropTypes.bool,
    isActive: React.PropTypes.bool
  };

  style() {
    let background = "inherit";
    if (this.props.isActive) {
      background = "#2f2f2f";
    } else if (this.props.isEven) {
      background = "#0f0f0f"
    }
    return {
      background: background,
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
