import React from "react";
import withStyle from "../with-style";

class Toolbar extends React.Component {
  style = {
    background: "#151515",
    padding: "0.8rem"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Toolbar);
