import React from "react";
import Radium from "radium";

class Column extends React.Component {
  style() {
    return {
      padding: "0.8rem"
    };
  }

  render() {
    return (
      <td style={this.style()}>
        {this.props.children}
      </td>
    );
  }
}

export default Radium(Column);
