import React from "react";
import withStyle from "../../with-style";

class Row extends React.Component {
  static propTypes = {
    isLast: React.PropTypes.bool,
    isEven: React.PropTypes.bool,
    isActive: React.PropTypes.bool
  };

  style() {
    let background = "inherit";
    if (this.props.isActive) {
      background = "#2f2f2f";
    } else if (this.props.isEven) {
      background = "#0f0f0f";
    }
    return {
      background: background,
      borderBottom: this.props.isLast ? "0" : "1px solid #222",
      ":hover": {
        background: "#1a1a1a"
      }
    };
  }

  render() {
    const props = {...this.props};
    delete props.isLast;
    delete props.isEven;
    delete props.isActive;
    return (
      <tr {...props}>
        {this.props.children}
      </tr>
    );
  }
}

export default withStyle(Row);
