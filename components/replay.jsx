import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";

import Audio from "./audio";
import TrackList from "./track-list";

import "./replay.scss";

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
      <div className="replay">
        <Navbar dark color="inverse" fixed="top">
          <NavbarBrand href="/">replay</NavbarBrand>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <TrackList onSelect={this.handleTrackSelect.bind(this)} />
            </div>
          </div>
        </div>
        <Navbar light color="faded" fixed="bottom" className="bottom-navbar">
          <Audio track={this.state.track} />
        </Navbar>
      </div>
    );
  }
}
