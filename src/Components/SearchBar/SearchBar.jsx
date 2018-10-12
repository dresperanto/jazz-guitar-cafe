import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css'

class SearchBar extends Component {
  state = {
    value: ''
  }


  Search = (e) => {
    this.setState({ value: e.target.value })
    // this.props.callback(this.state.value);
  }

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search Jazz Guitarists"
            onChange={this.Search}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;