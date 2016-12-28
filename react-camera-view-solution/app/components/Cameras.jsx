import Camera from './Camera';
import React from 'react';

const Cameras = React.createClass({
  handleSearch(searchText) {
      const search = searchText.toLowerCase().trim();

      if (search === '') {
        return this.props.cameras;
      }

      return this.props.cameras.filter((camera) => {
        const cameraVals = Object.values(camera);

        for (const val of cameraVals) {
          const cameraProp = val.toString().toLowerCase();

          if (cameraProp.indexOf(search) !== -1) {
            return true;
          }
        }
        return false;
      });
  },

  handleSort(sortType, camerasSet) {
    let searchFilter = camerasSet.sort((a, b) => {
      if (a[sortType] < b[sortType]) {
        return 1;
      } else if ( a[sortType] > b[sortType]) {
        return -1;
      } else {
        return 0;
      }
    });

    if (sortType === 'title') {
      searchFilter = searchFilter.reverse();

      return searchFilter;
    } else {
      return searchFilter;
    }
  },

  handleFilter() {
    const searchedCameras = this.handleSearch(this.props.searchText);
    const searchedAndSorted = this.handleSort(this.props.sortType, searchedCameras);

    return searchedAndSorted;
  },

  render() {
    const filteredCameras = this.handleFilter();

    const cameraList = filteredCameras.map((camera, index) => {
      return <Camera
        camera={camera}
        key={index}
        handleAddToCart={this.props.handleAddToCart}
      />
    });

    return (
      <div>{ cameraList }</div>
    )
  }
});

export default Cameras;
