import Radium from "radium";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Track from "./track";

const propTypes = {
  onSelect: React.PropTypes.func.isRequired
};

const styles = {
  column: {
    padding: "0.5em 1em"
  }
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
    const tracks = await axios.get(`/tracks`);
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
      <table style={{
               width: "100%",
               borderCollapse: "collapse"
             }}>
        <thead style={{
                 backgroundColor: "#111",
                 color: "#ccc",
                 textAlign: "left"
               }}>
          <tr>
            <th style={styles.column}>#</th>
            <th style={styles.column}>Artist</th>
            <th style={styles.column}>Title</th>
            <th style={styles.column}>Album</th>
          </tr>
        </thead>
        <tbody>
          {tracks}
        </tbody>
      </table>
    );
  }
}

export default Radium(TrackList);
