import React, { Component } from 'react';

class Gif extends Component {
  handleGifClick = () => {
    this.props.click(this.props.id);
  }

  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e47f517504046a9844c80c6633a8afd7971a6143728&rid=giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleGifClick} />
    );
  }
}

export default Gif;
