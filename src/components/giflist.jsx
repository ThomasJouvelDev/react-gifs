import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} click={this.props.click} />)}
      </div>
    );
  }
}

export default GifList;
