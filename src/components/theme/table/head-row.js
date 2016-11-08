import React from "react";
import withStyle from "../../with-style";

class HeadRow extends React.Component {
  render() {
    return (
      <tr {...this.props}>
        {this.props.children}
      </tr>
    );
  }
}

export default withStyle(HeadRow);
