import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie)=> {
    return (
      <div key={movie.title}>
        <h3>Title: {movie.title}</h3>
        Time: {movie.time} <br></br><br></br>
        Genres: 
        <ul>
          {movie.genres.map((genre)=>{
            return(
              <li key={genre}>{genre}</li>
            );
          })}
        </ul>

      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  )
}

export default Movies;
