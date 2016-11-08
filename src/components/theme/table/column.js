import React from "react";
import withStyle from "../../with-style";

class Column extends React.Component {
  style = {
    padding: "0.8rem"
  };

  render() {
    return (
      <td {...this.props}>
        {this.props.children}
      </td>
    );
  }
}

export default withStyle(Column);
