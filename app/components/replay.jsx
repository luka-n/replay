import React from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import { IndexLink, Link } from "react-router";

import Audio from "../containers/audio";
import Controls from "../containers/controls";

import "./replay.scss";

export default class Replay extends React.Component {
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
                  <IndexLink to="/"
                             activeClassName="active"
                             className="nav-link">
                    Queue
                  </IndexLink>
                </NavItem>
                <NavItem>
                  <Link to="/library"
                        activeClassName="active"
                        className="nav-link">
                    Library</Link>
                </NavItem>
              </Nav>
            </div>
            <div className="col-xs-10 offset-xs-2">
              {this.props.children}
            </div>
          </div>
        </div>
        <Navbar light color="faded" fixed="bottom" className="bottom-navbar">
          <Audio />
          <Controls />
        </Navbar>
      </div>
    );
  }
}
