import Book from './Book';
import React from 'react';

const App = React.createClass({
  getInitialState() {
    return {
      books: [{
        author: 'George R. R. Martin',
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
        isbn: '978-0553103547',
        stock: 7,
        title: 'A Game of Thrones',
        year: 1996
      }, {
        author: 'Neal Stephenson',
        cover: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Snowcrash.jpg',
        isbn: '978-1491515051',
        stock: 3,
        title: 'Snow Crash',
        year: 1992
      }, {
        author: 'Andy Weir',
        cover: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Martian_2014.jpg',
        isbn: '978-0804139021',
        stock: 11,
        title: 'The Martian',
        year: 2014
      }],

      editing: null
    };
  },

  decrementStock(book) {
    const editing = this.state.editing;

    if (editing && editing.stock === '') {
      return;
    }

    let nextBook;

    const nextBooks = this.state.books.map((element) => {
      if (book !== element) {
        return element;
      }

      if (book.stock === 0) {
        nextBook = book;

        return book;
      }

      const nextStock = book.stock - 1;

      nextBook = Object.assign({}, book, { stock: nextStock });

      return nextBook;
    });

    const nextState = { books: nextBooks };

    if (this.state.editing) {
      nextState.editing = nextBook;
    }

    this.setState(nextState);
  },

  incrementStock(book) {
    const editing = this.state.editing;

    if (editing && editing.stock === '') {
      return;
    }

    let nextBook;

    const nextBooks = this.state.books.map((element) => {
      if (book !== element) {
        return element;
      }

      if (book.stock === 999) {
        nextBook = book;

        return book;
      }

      const nextStock = book.stock + 1;

      nextBook = Object.assign({}, book, { stock: nextStock });

      return nextBook;
    });

    const nextState = { books: nextBooks };

    if (this.state.editing) {
      nextState.editing = nextBook;
    }

    this.setState(nextState);
  },

  startEditing(book) {
    const editing = this.state.editing;

    if (editing && editing.stock === '') {
      return;
    }

    this.setState({ editing: book });
  },

  stopEditing() {
    this.setState({ editing: null });
  },

  updateStock(book, nextStock) {
    let nextBook;

    const nextBooks = this.state.books.map((element) => {
      if (book !== element) {
        return element;
      }

      nextBook = Object.assign({}, book, { stock: nextStock });

      return nextBook;
    });

    this.setState({ books: nextBooks, editing: nextBook });
  },

  render() {
    return <div className="inventory">
      <h1>Inventory</h1>

      <table>
        <thead>
          <tr>
            <th>Cover</th>
            <th>Description</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {this.state.books.map((book, index) => {
            return <Book
              book={book}
              decrementStock={this.decrementStock}
              editing={this.state.editing}
              incrementStock={this.incrementStock}
              index={index}
              key={index}
              startEditing={this.startEditing}
              stopEditing={this.stopEditing}
              updateStock={this.updateStock}
            />;
          })}
        </tbody>
      </table>
    </div>;
  }
});

export default App;
