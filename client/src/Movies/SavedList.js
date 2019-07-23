import React from "react";
import { Route, Link, NavLink } from "react-router-dom";

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
            {/* <Route path={`/movies/${movie.id}`} /> */}
            {/* <Route path={`${props.history.location.pathname}`} /> */}
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
