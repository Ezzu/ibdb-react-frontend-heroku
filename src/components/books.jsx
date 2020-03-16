import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

class Books extends Component {
  state = {
    books: []
  };

  imageStyles = {
    width: 250,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  };
  textCenter = {
    textAlign: "center"
  };

  componentDidMount() {
    fetch("http://localhost:3001/books.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ books: data });
      });
  }

  openBook = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron">
          <h1> Your Favourite Books Reviewed! </h1>
          <p>
            IBDB is international books review site, here you can find books of
            all genres and authors and give those books a review very easily.
          </p>
        </div>
        <div className="row align-items-start">
          {this.state.books.map(book => (
            <div key={book.id} className="col-sm-6 col-md-4 p-3">
              <div style={this.textCenter}>
                <h5>
                  <Link to={`/books/${book.id}`}>{book.title}</Link>
                </h5>
                <div className="caption">
                  <Link to={`/books/${book.id}`}>
                    <img
                      onClick={this.openBook}
                      className="mimg"
                      style={this.imageStyles}
                      src={`http://localhost:3001/assets/${book.image_file_name}`}
                      alt="bookcover.jpg"
                    />
                  </Link>
                  <br style={this.textCenter}></br>
                  By {book.author_name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Books;