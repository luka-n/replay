import React from "react";
import ImportToolbar from "./import-toolbar";
import TrackList from "./track-list";

export default class Import extends React.Component {
  static propTypes = {
    tracks: React.PropTypes.array.isRequired,
    onImport: React.PropTypes.func.isRequired,
    onMount: React.PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.onMount();
  }

  handleImport() {
    this.props.tracks.forEach(
      (track, index) => this.props.onImport(index)
    );
  }

  render() {
    return (
      <div>
        <ImportToolbar count={this.props.tracks.length}
                       onImport={this.handleImport.bind(this)} />
        <TrackList tracks={this.props.tracks} />
      </div>
    );
  }
}
