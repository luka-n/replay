import React from "react";
import withStyle from "../with-style";

class HeaderBrand extends React.Component {
  style = {
    fontSize: "1.6rem",
    display: "flex",
    alignItems: "center"
  };

  render() {
    return (
      <span {...this.props}>
        {this.props.children}
      </span>
    );
  }
}

export default withStyle(HeaderBrand);
