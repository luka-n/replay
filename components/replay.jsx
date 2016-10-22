import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";

import Audio from "./audio";
import TrackList from "./track-list";

const styles = {
  bottomNavbar: {
    padding: "0"
  }
};

export default class Replay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: null
    };
  }

  handleTrackSelect(track) {
    this.setState({track: track});
  }

  render() {
    return (
      <div>
        <Navbar dark color="inverse" fixed="top">
          <NavbarBrand href="/">replay</NavbarBrand>
        </Navbar>
        <TrackList onSelect={this.handleTrackSelect.bind(this)} />
        <Navbar light color="faded" fixed="bottom" style={styles.bottomNavbar}>
          <Audio track={this.state.track} />
        </Navbar>
      </div>
    );
  }
}
