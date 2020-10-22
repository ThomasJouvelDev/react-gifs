import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifList from './giflist';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "wZtxnyxWTImyzpRxf1"
    };
  }

  gifSearch = (query) => {
    giphy('ha1G39XV46Lr7E2fEGk8ERnmMYfEC8bU').search({
      q: query,
      rating: 'g',
      limit: 20
    }, (err, res) => {
      this.setState({ gifs: res.data });
    });
  }

  handleClick = (id) => {
    this.setState({ selectedGifId: id });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Search   search={this.gifSearch} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} click={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
