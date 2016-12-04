import React from "react";
import withStyle from "../with-style";

class Nav extends React.Component {
  style = {
    display: "flex",
    alignItems: "stretch"
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
