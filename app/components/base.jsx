import React from "react";

export default class Base extends React.Component {
  renderStyle() {
    return this.context.renderer.renderRule(this.style.bind(this));
  }
}

Base.contextTypes = {
  renderer: React.PropTypes.object
};
