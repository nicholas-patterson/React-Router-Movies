import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = props => {
  const [movie, setMovie] = useState();
  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then(response => {
      setMovie(response.data);
    });
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;

  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}

        {stars.map(star => {
          return (
            <div key={star} className="movie-star">
              {star}
            </div>
          );
        })}
      </div>
      <button onClick={saveMovie} className="save-button">
        Save
      </button>
    </div>
  );
};

export default Movie;
