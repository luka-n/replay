import React from "react";
import withStyle from "../with-style";

class Nav extends React.Component {
  style = {
    background: "#333",
    margin: "2rem"
  };

  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyle(Nav);
