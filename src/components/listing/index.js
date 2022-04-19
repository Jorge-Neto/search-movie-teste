import React, { useState, useEffect } from "react";
import { BtnSeeMore, MovieCard, MovieImage, MovieInfo } from "./styles";

export default function Listing({ itemToShow }) {
  const [movie, setMovie] = useState([itemToShow.data]);

  useEffect(() => {
    setMovie(itemToShow);
  }, [itemToShow]);

  return (
    <>
      {movie && (
        <MovieCard>
          <MovieImage src={movie ? movie.Poster : ''} />
          <MovieInfo key={movie ? movie.Id : ''}>
            <li className="title">{movie ? movie.Title : ''}</li>
            <li>{movie ? movie.Released : ''} - {movie ? movie.Genre : ''}</li>
            <li>{movie ? movie.Actors : ''}</li>
            <BtnSeeMore to='/details'>
              Details
            </BtnSeeMore>
          </MovieInfo>
        </MovieCard>
      )}
    </>
  );
}
