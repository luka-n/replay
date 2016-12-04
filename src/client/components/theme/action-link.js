import React from "react";
import withStyle from "../with-style";

class ActionLink extends React.Component {
  style = {
    cursor: "pointer",
    ":hover": {
      color: "#2a9fd6",
      textDecoration: "underline"
    }
  };

  render() {
    return (
      <span {...this.props}>
        {this.props.children}
      </span>
    );
  }
}

export default withStyle(ActionLink);
