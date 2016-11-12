import React from "react";

import Audio from "../containers/audio";
import Controls from "../containers/controls";

import Container from "./theme/container";
import Header from "./theme/header";
import HeaderBrand from "./theme/header-brand";
import Nav from "./theme/nav";
import NavLink from "./theme/nav-link";
import Footer from "./theme/footer";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <HeaderBrand>replay</HeaderBrand>
          <Nav>
            <NavLink to="/">Queue</NavLink>
            <NavLink last to="/library">Library</NavLink>
          </Nav>
        </Header>
        {this.props.children}
        <Footer>
          <Audio />
          <Controls />
        </Footer>
      </Container>
    );
  }
}
