import React, { useEffect, useState } from 'react';
import { ContainerPanel, FormSubtitle, ResultsList } from "../main/styles";
import { MovieCard, MovieImage, MovieInfo, BtnSeeMore } from "../../components/listing/styles";
import { RatingLists, RatingList, RatingItem } from "./styles";

const Details = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const cachedMovie = JSON.parse(sessionStorage.getItem('filme'));
    setMovie(cachedMovie);

  }, []);

  return (
    <div>
      <ContainerPanel>
        <ResultsList>
          {movie && (
            <MovieCard>

              <MovieImage src={movie.Poster} alt={`${movie.Title} poster`} />
              <MovieInfo>
                <FormSubtitle>{movie.Title}</FormSubtitle>
                <li><strong>Genre:</strong> {movie.Genre}</li>
                <li><strong>Director:</strong> {movie.Director}</li>
                <li><strong>Plot:</strong> {movie.Plot}</li>
                <li><strong>Released on:</strong> {movie.Released}</li>
                <p><strong>Ratings:</strong></p>
                <RatingLists>
                  {movie.Ratings.map(item => {
                    return (
                      <RatingList key={item.Value}>
                        <RatingItem className='li-item'><strong>Source:</strong> <br /> {item.Source}</RatingItem>
                        <RatingItem className='li-item'><strong>Value:</strong> <br /> {item.Value}</RatingItem>
                      </RatingList>
                    )
                  })}
                </RatingLists>
                <BtnSeeMore to='/'>
                  Go Back
                </BtnSeeMore>
              </MovieInfo>
            </MovieCard>
          )}

        </ResultsList>
      </ContainerPanel>
    </div>
  )
}

export default Details;
