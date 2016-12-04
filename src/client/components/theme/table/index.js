import React from "react";
import withStyle from "../../with-style";

class Table extends React.Component {
  style = {
    borderCollapse: "collapse",
    width: "100%"
  };

  render() {
    return (
      <table {...this.props}>
        {this.props.children}
      </table>
    );
  }
}

export default withStyle(Table);
