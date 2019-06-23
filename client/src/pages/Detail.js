import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { Container, Row, Col } from "../components/Grid";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (

      <div>

        {/* Navbar imported from components folder */}
        <Nav />

        <Container>
          
          <Row>
            <Col size="col-md-12">

              <div className="jumbotron">
                <h1>
                  {this.state.book.title} 
                </h1>
              </div>

            </Col>
          </Row>

          <Row>
            <Col size="col-md-10 col-md-offset-1">

              <article>
                <h1>Synopsis</h1>
                <p>
                  {this.state.book.synopsis}
                </p>
              </article>
            
            </Col>
          </Row>

          <Row>
            <Col size="col-md-2">
              <a href="/">← Back to Authors</a>
            </Col>
          </Row>

        </Container>

      </div>

    );
  }

}

export default Detail;
