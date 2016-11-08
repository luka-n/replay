import React from "react";
import withStyle from "../../with-style";

class HeadColumn extends React.Component {
  style = {
    padding: "0.8rem"
  };

  render() {
    return (
      <th {...this.props}>
        {this.props.children}
      </th>
    );
  }
}

export default withStyle(HeadColumn);
