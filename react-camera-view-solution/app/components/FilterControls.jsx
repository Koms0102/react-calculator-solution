import React from 'react';
import ReactDOM from 'react-dom';

const FilterControls = React.createClass({
  componentDidMount() {
    $('select').material_select();
    $(ReactDOM.findDOMNode(this.refs.mySelectBox)).on('change', this.handleSort);
  },

  handleSearch(event) {
    const searchText = event.target.value;

    this.props.handleSearch(searchText);
  },

  handleSort(event) {
    this.props.handleSort(event.target.value);
  },

  render() {
    return (
      <div className="row">
        <div className="input-field col s8">
          <input
            type="text"
            value={this.props.search}
            onChange={this.handleSearch}
            placeholder="Search here"
          />
        </div>
        <div className="input-field col s4">
          <select ref="mySelectBox" value={this.props.sortType} onChange={this.handleSort}>
            <option value="title">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    )
  }
});

export default FilterControls;
