import React from "react";
import withStyle from "../with-style";
import Button from "../theme/button";
import ThemeToolbar from "../theme/toolbar";

class Toolbar extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    onImport: React.PropTypes.func.isRequired
  };

  style = {
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };

  render() {
    return (
      <ThemeToolbar>
        <span>{this.props.count} new tracks to import ...</span>
        <Button onClick={this.props.onImport}>Import all</Button>
      </ThemeToolbar>
    );
  }
}

export default withStyle(Toolbar);
