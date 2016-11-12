import React from "react";
import withStyle from "../with-style";

class Container extends React.Component {
  style = {
    background: "#000",
    boxSizing: "border-box",
    color: "#ddd",
    fontFamily: "sans-serif",
    height: "100vh",
    padding: "5.2rem 2rem"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Container);
