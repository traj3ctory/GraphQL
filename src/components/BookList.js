import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

// Components
import BookDetails from "./BookDetails";
/**
 * @author traj3ctory
 * @class BookList
 **/

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
    };
  }

  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    } else {
      let count = 1;
      return data.books.map((book) => {
        return (
          <li
            className="list-group-item"
            key={book.id}
            onClick={(e) => {
              this.setState({ selected: book.id });
            }}
          >{count++}.)&ensp;
            {book.name}
          </li>
        );
      });
    }
  }
  render() {
    return (
      <>
        <div className="card border-0 shadow mb-3">
          <div className="card-body">
            <ul className="list-group-flush">{this.displayBooks()}</ul>
          </div>
        </div>
        <div className="card border-0 shadow">
          <div className="card-body">
            <BookDetails bookId={this.state.selected} />
          </div>
        </div>
      </>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
