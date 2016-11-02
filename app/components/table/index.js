import React from "react";
import Radium from "radium";

class Table extends React.Component {
  style() {
    return {
      borderCollapse: "collapse",
      width: "100%"
    };
  }

  render() {
    return (
      <table style={this.style()}>
        {this.props.children}
      </table>
    );
  }
}

export default Radium(Table);
