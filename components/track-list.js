import Radium from "radium";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { Table } from "reactstrap";

import Track from "./track";

const propTypes = {
  onSelect: React.PropTypes.func.isRequired
};

class TrackList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      track: {}
    };
  }

  componentDidMount() {
    this.getTracks();
  }

  async getTracks() {
    const tracks = await axios.get(`/api/tracks`);
    this.setState({tracks: tracks.data});
  }

  handleTrackSelect(track) {
    this.setState({track: track});
    this.props.onSelect(track);
  }

  render() {
    let tracks = [];
    this.state.tracks.map((track, index) => {
      tracks.push(
        <Track key={index}
               track={track}
               isOdd={index % 2 === 0}
               isSelected={track._id === this.state.track._id}
               onSelect={this.handleTrackSelect.bind(this, track)} />
      );
    });
    return (
      <Table hover={true} striped={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Artist</th>
            <th>Title</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {tracks}
        </tbody>
      </Table>
    );
  }
}

export default Radium(TrackList);
