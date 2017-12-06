import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
  }
  render() {
    let {term} = this.state;

    return (
      <div className="searchBar">
        <h2>Search For Videos on Youtube :</h2>
        <p>
        double click to select and unselect videos
        </p>
      <input
        value={term}
        placeholder="Search"
        size={70}
        onChange={ event => this._inputChange(event.target.value)}
       />
      </div>
    );
  }

  _inputChange = (input) => {
    let {onChange} = this.props;
    this.setState({term:input});
    onChange(input);
  }
}

