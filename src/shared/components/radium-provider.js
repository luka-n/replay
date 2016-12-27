import React from "react";

export default class RadiumProvider extends React.Component {
  static propTypes = {
    radiumConfig: React.PropTypes.object
  };

  static childContextTypes = {
    _radiumConfig: React.PropTypes.object
  };

  getChildContext() {
    return {_radiumConfig: this.props.radiumConfig};
  }

  render() {
    return React.cloneElement(this.props.children, {...this.props});
  }
}
