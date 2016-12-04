import React from "react";
import withStyle from "../with-style";

class Progress extends React.Component {
  static propTypes = {
    value: React.PropTypes.number.isRequired
  };

  style() {
    return {
      background: "#2a9fd6",
      height: "0.4rem",
      width: `${this.props.value || 0}%`
    };
  }

  render() {
    return <div />;
  }
}

export default withStyle(Progress);
