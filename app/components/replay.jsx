import axios from "axios";
import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";

import Audio from "./audio";
import Controls from "./controls";
import TrackList from "./track-list";

import "./replay.scss";

export default class Replay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      currentTrackIndex: null,
      playing: false,
      currentTime: null,
      duration: null
    };
  }

  componentDidMount() {
    this.getTracks();
  }

  async getTracks() {
    const tracks = await axios.get(`/api/tracks`);
    this.setState({tracks: tracks.data});
  }

  handleTrackSelect(index) {
    this.setState({currentTrackIndex: index});
  }

  handlePlayingEvent() {
    this.setState({playing: true});
  }

  handlePauseEvent() {
    this.setState({playing: false});
  }

  handleEndedEvent() {
    this.setState({playing: false});
  }

  handleTimeupdateEvent(currentTime) {
    this.setState({
      currentTime: currentTime
    });
  }

  handleDurationchangeEvent(duration) {
    this.setState({
      duration: duration
    });
  }

  handlePlayClick() {
    this.setState({playing: true});
  }

  handlePauseClick() {
    this.setState({playing: false});
  }

  render() {
    return (
      <div className="replay">
        <Navbar dark color="inverse" fixed="top">
          <NavbarBrand href="/">replay</NavbarBrand>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar col-xs-2">
              <Nav pills stacked>
                <NavItem>
                  <NavLink active href>Library</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href>Queue</NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="col-xs-10 offset-xs-2">
              <TrackList tracks={this.state.tracks}
                         currentTrackIndex={this.state.currentTrackIndex}
                         onSelect={this.handleTrackSelect.bind(this)} />
            </div>
          </div>
        </div>
        <Navbar light color="faded" fixed="bottom" className="bottom-navbar">
          <Audio key={this.state.currentTrackIndex}
                 track={this.state.tracks[this.state.currentTrackIndex]}
                 playing={this.state.playing}
                 onPlaying={this.handlePlayingEvent.bind(this)}
                 onPause={this.handlePauseEvent.bind(this)}
                 onEnded={this.handleEndedEvent.bind(this)}
                 onTimeupdate={this.handleTimeupdateEvent.bind(this)}
                 onDurationchange={this.handleDurationchangeEvent.bind(this)} />
          <Controls progress={this.state.currentTime / this.state.duration * 100}
                    playing={this.state.playing}
                    onPlay={this.handlePlayClick.bind(this)}
                    onPause={this.handlePauseClick.bind(this)} />
        </Navbar>
      </div>
    );
  }
}
