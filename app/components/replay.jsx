import React from "react";
import Base from "./base";

import Audio from "../containers/audio";
import Controls from "../containers/controls";

import Header from "./header";
import Sidebar from "./sidebar";
import Nav from "./nav";
import Footer from "./footer";

class Replay extends Base {
  style() {
    return {
      padding: "5.2rem 2rem 5.2rem 14rem"
    };
  }

  render() {
    return (
      <div className={this.renderStyle()}>
        <Header>replay</Header>
        <Sidebar>
          <Nav />
        </Sidebar>
        {this.props.children}
        <Footer>
          <Audio />
          <Controls />
        </Footer>
      </div>
    );
  }
}

export default Replay;
