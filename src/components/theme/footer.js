import React from "react";
import withStyle from "../with-style";

class Footer extends React.Component {
  style = {
    background: "#000",
    height: "3.2rem",
    position: "fixed",
    bottom: "0",
    left: "0",
    right: "0"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Footer);
