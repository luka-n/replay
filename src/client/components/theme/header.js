import React from "react";
import withStyle from "../with-style";

class Header extends React.Component {
  style = {
    background: "#000",
    boxSizing: "border-box",
    borderBottom: "thin solid #333",
    height: "3.2rem",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    padding: "0 2rem",
    display: "flex",
    alignItems: "stretch",
    justifyContent: "space-between"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Header);
