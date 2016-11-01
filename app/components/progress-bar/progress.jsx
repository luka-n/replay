import React from "react";
import Base from "../base";

export default class Progress extends Base {
  static propTypes = {
    value: React.PropTypes.number.isRequired
  };

  style() {
    return {
      background: "#2a9fd6",
      height: "0.4rem"
    };
  }

  render() {
    return (
      <div className={this.renderStyle()}
           style={{width: `${this.props.value || 0}%`}}>
      </div>
    );
  }
}
