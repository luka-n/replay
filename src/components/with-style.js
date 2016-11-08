import React from "react";
import Radium from "radium";

function withStyle(Component) {
  class ComponentWithStyle extends Component {
    render() {
      const style = [
        typeof(this.style) === "function" && this.style(),
        typeof(this.style) === "object" && this.style,
        this.props.style
      ];
      return React.cloneElement(super.render(), {style});
    }
  }
  return Radium(ComponentWithStyle);
}

export default withStyle;
