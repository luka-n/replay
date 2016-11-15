import React from "react";
import withStyle from "./with-style";
import Button from "./theme/button";
import Toolbar from "./theme/toolbar";

class ImportToolbar extends React.Component {
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
      <Toolbar>
        <span>{this.props.count} new tracks to import ...</span>
        <Button onClick={this.props.onImport}>Import all</Button>
      </Toolbar>
    );
  }
}

export default withStyle(ImportToolbar);
