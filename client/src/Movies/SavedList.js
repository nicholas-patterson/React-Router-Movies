import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => {
  console.log(props);
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => {
        console.log(movie);
        return (
          <div>
            <NavLink
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="saved-movie"
            >
              {movie.title}
            </NavLink>
          </div>
        );
      })}
      <Link to="/" className="home-button">
        Home
      </Link>
    </div>
  );
};

export default SavedList;
