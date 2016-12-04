import React from "react";
import withStyle from "../../with-style";

class Head extends React.Component {
  style = {
    background: "#111",
    borderBottom: "2px solid #333",
    color: "#fff",
    textAlign: "left"
  };

  render() {
    return (
      <thead {...this.props}>
        {this.props.children}
      </thead>
    );
  }
}

export default withStyle(Head);
