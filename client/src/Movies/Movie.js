import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import requester from 'easier-requests';

async function getMovie(movieID, setMovie) {
  const uid = requester.createUniqueID();
  await requester.get(`http://localhost:5000/api/movies/${movieID}`, uid);
  setMovie(requester.response(uid).data);
}

export default function Movie(props) {
  const [movie, setMovie] = useState();
  const id = useRouteMatch().params.id;

  useEffect(() => getMovie(id, setMovie), [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => {
  // }

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
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}

//  LocalWords:  movieID
