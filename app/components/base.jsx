import React from "react";

export default class Base extends React.Component {
  renderRule(...args) {
    return this.context.renderer.renderRule(...args);
  }

  renderStyle() {
    return this.renderRule(this.style);
  }
}

Base.contextTypes = {
  renderer: React.PropTypes.object
};
