import Cameras from './Cameras';
import FilterControls from './FilterControls';
import React from 'react';

const Catalog = React.createClass({
  getInitialState() {
    return {
      ratingFilter: null,
      searchText: '',
      sortType: 'name',
    }
  },

  handleSearch(searchText) {
    this.setState({ searchText });
  },

  handleSort(sortType) {
    this.setState({ sortType });
  },

  render() {
    return (
      <div className="col s12 m8">
        <FilterControls
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
          sortType={this.sortType}
        />
        <Cameras
          cameras={this.props.cameras}
          handleAddToCart={this.props.handleAddToCart}
          searchText={this.state.searchText}
          sortType={this.state.sortType}
        />
      </div>
    )
  }
});

export default Catalog;
