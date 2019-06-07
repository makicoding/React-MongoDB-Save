import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">

        <div className="row">
          <div className="col-md-6">
            
            <div className="jumbotron">
              <h1>What Books Should I Read?</h1>
            </div>
            
            <form>
              <div className="form-group">
                <input className="form-control" value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title (required)">
                </input>
              </div>

                <div className="form-group">
                  <textarea className="form-control" rows="10" value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Author (optional)">
                  </textarea>
                </div>

              { /* Example of authentication with multiple mandatory required input fields */
                /* <button disabled={!(this.state.title && this.state.synopsis)} onClick={this.handleFormSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">Submit Book
              </button> */
              }

              <button disabled={!(this.state.title)} onClick={this.handleFormSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">Submit Book
              </button>

            </form>
          </div>
          <div className="col-md-6">
            <div className="jumbotron">
              <h1>Books On My List</h1>
            </div>
            {this.state.books.length ? (
              <List>
              {this.state.books.map(book => (
                <ListItem key={book._id}>
                
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <span className="delete-btn" onClick={() => this.deleteBook(book._id)} role="button" tabIndex="0">✗</span>

                </ListItem>
              ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Books;
