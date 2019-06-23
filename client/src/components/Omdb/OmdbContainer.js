import React, { Component } from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import MovieDetail from "./MovieDetail";
import API from "../../utils/searchAPI";
import { Col, Row, Container } from "../../components/Grid";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      <Container>

        <Row>

          <Col size="col-md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>

          <Col size="col-md-8">
            <Card
              heading={this.state.result.Title || "Search for a Movie to Begin"}
            >
              {this.state.result.Title ? (
                <MovieDetail
                  title={this.state.result.Title}
                  src={this.state.result.Poster}
                  // genre={this.state.result.Genre}
                  // released={this.state.result.Released}
                  // director={this.state.result.Director}
                  // actors={this.state.result.Actors}
                  // imdbrating={this.state.result.Ratings[0].Value}
                  // rottentomatoesrating={this.state.result.Ratings[1].Value}
                  plot={this.state.result.Plot}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>

        </Row>

      </Container>
    );
  }
}

export default OmdbContainer;
