import React from 'react';

const ENTER_KEY = 13;

const Book = React.createClass({
  handleChange(event) {
    const value = event.target.value;

    if (value === '') {
      this.props.updateStock(this.props.book, value);
    }
    else if (/^\d{1,3}$/.test(value)) {
      this.props.updateStock(this.props.book, parseInt(value));
    }
  },

  handleClick(event) {
    if (this.props.book.stock === '') {
      return;
    }

    if (event.target.value === '+') {
      this.props.incrementStock(this.props.book);
    }
    else if (event.target.value === '-') {
      this.props.decrementStock(this.props.book);
    }
  },

  handleDoubleClick() {
    this.props.startEditing(this.props.book);
  },

  handleKeyDown(event) {
    if (event.which !== ENTER_KEY) {
      return;
    }

    if (this.props.book.stock === '') {
      return;
    }

    event.preventDefault();

    this.props.stopEditing();
  },

  render() {
    const book = this.props.book;

    return <tr className={this.props.index % 2 ? 'row0' : 'row1'}>
      <td>
        <img alt={book.title} src={book.cover} />
      </td>
      <td>
        <div className="title">{book.title}</div>
        <div>By {book.author}</div>
        <div>Published in {book.year}</div>
        <div>ISBN {book.isbn}</div>
      </td>
      <td>
        <input
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          type="button"
          value="-"
        />

        <label
          className={this.props.editing === book ? 'hide' : 'show'}
          onDoubleClick={this.handleDoubleClick}
        >
          {book.stock}
        </label>

        <input
          className={this.props.editing === book ? 'show' : 'hide'}
          maxLength="3"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          size="4"
          type="text"
          value={book.stock}
        />

        <input
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          type="button"
          value="+"
        />
      </td>
    </tr>;
  }
});

export default Book;
