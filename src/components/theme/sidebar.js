import React from "react";
import withStyle from "../with-style";

class Sidebar extends React.Component {
  style = {
    background: "#000",
    width: "14rem",
    position: "fixed",
    left: "0",
    top: "3.2rem",
    bottom: "3.2rem"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Sidebar);
