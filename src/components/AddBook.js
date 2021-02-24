import React, { Component } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation,
} from "../queries/queries";

/**
 * @author traj3ctory
 * @class AddBook
 **/

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      genre: "",
      authorId: "",
    };
  }

  displayAuthors() {
    let data = this.props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading Author</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  }

  render() {
    return (
      <>
        <div className="card shadow border-0 side-stick">
          <div className="card-header py-2 mx-2 bg-main" style={{marginTop:"-2vh"}}>Add Book</div>
          <div className="card-body rounded-3">
            <form onSubmit={this.submitForm.bind(this)} className="w-100">
              <div className="field">
                <label>Book Name:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>

              <div className="field">
                <label>Genre:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => this.setState({ genre: e.target.value })}
                />
              </div>

              <div className="field">
                <label>Author:</label>
                <select
                  className="custom-select"
                  onChange={(e) => this.setState({ authorId: e.target.value })}
                >
                  <option value="">--Select Author--</option>
                  {this.displayAuthors()}
                </select>
              </div>

              <button className="btn btn-sm btn-main btn-block mt-4">
                + Add
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
