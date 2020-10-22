import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false
    };
  }

  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  handleFocus = () => {
    this.setState({ focus: true });
  }

  handleBlur = () => {
    this.setState({ focus: false });
  }

  render() {
    return (
      <input
        type="text"
        className={`form-search form-control ${this.state.focus ? "focus" : "blur"}`}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );
  }
}

export default Search;
