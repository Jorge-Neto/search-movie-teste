import React, { useState, useEffect } from "react";
import { BtnSeeMore, MovieCard, MovieImage, MovieInfo } from "./styles";

export default function Listing({ itemToShow }) {
  const [movie, setMovie] = useState([itemToShow.data]);

  useEffect(() => {
    console.log(movie, itemToShow);
    setMovie(itemToShow);
  }, [itemToShow]);

  return (
    <>
      {movie && (
        <MovieCard>
          <MovieImage src={movie ? movie.Poster : ''} />
          <MovieInfo key={movie ? movie.Id : ''}>
            <li>{movie ? movie.Title : ''}</li>
            <li>{movie ? movie.Year : ''}</li>
            <li>{movie ? movie.Genre : ''}</li>
            <BtnSeeMore to='/details'>
              Details
              </BtnSeeMore>
          </MovieInfo>
        </MovieCard>
      )}
    </>
  );
}
