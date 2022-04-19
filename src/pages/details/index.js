import React, { useEffect, useState } from 'react';
import { ContainerPanel } from "./styles";

const Details = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(localStorage.getItem('filmes'));
    console.log(movie);
  })

  return (
    <div>
      <ContainerPanel>
        <p>Teste Detail</p>
      </ContainerPanel>
    </div>
  )
}

export default Details;
