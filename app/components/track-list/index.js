import React from "react";
import ReactDOM from "react-dom";

import Track from "./track";

import Table from "../table";
import Head from "../table/head";
import Body from "../table/body";
import Row from "../table/row";
import Column from "../table/column";
import HeadColumn from "../table/head-column";

const propTypes = {
  tracks: React.PropTypes.array.isRequired,
  currentTrackIndex: React.PropTypes.number,
  onSelect: React.PropTypes.func.isRequired,
  onAlbumSelect: React.PropTypes.func.isRequired,
  onArtistSelect: React.PropTypes.func.isRequired
};

class TrackList extends React.Component {
  handleTrackSelect(index) {
    this.props.onSelect(index);
  }

  handleAlbumSelect(index) {
    this.props.onAlbumSelect(index);
  }

  handleArtistSelect(index) {
    this.props.onArtistSelect(index);
  }

  render() {
    let tracks = [];
    this.props.tracks.map((track, index) => {
      tracks.push(
        <Track key={index}
               track={track}
               isOdd={index % 2 === 0}
               isSelected={index === this.props.currentTrackIndex}
               onSelect={this.handleTrackSelect.bind(this, index)}
               onSelectAlbum={this.handleAlbumSelect.bind(this, index)}
               onSelectArtist={this.handleArtistSelect.bind(this, index)} />
      );
    });
    return (
      <Table>
        <Head>
          <Row>
            <HeadColumn>#</HeadColumn>
            <HeadColumn>Artist</HeadColumn>
            <HeadColumn>Title</HeadColumn>
            <HeadColumn>Album</HeadColumn>
          </Row>
        </Head>
        <Body>
          {tracks}
        </Body>
      </Table>
    );
  }
}

export default TrackList;
