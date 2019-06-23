import React from "react";

function MovieDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      {/* <p>Genre: {props.genre}</p>
      <p>Released: {props.released}</p>
      <p>Director(s): {props.director}</p>
      <p>Actors: {props.actors}</p>
      <p>IMDB Rating: {props.imdbrating}</p>
      <p>Rotten Tomatoes Rating: {props.rottentomatoesrating}</p> */}
      <p>Plot: {props.plot}</p>
    </div>
  );
}

export default MovieDetail;
