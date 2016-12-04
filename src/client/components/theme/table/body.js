import React from "react";
import withStyle from "../../with-style";

class Body extends React.Component {
  render() {
    return (
      <tbody {...this.props}>
        {this.props.children}
      </tbody>
    );
  }
}

export default withStyle(Body);
