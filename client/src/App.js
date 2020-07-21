import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import MovieList from './Movies/MovieList.js';
import SavedList from './Movies/SavedList';

function App () {
  requester.setOptions({throwOnFailure: true});
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path="/">
        <MovieList movies={movies}/>
      </Route>
    </div>
  );
};

export default App;

//  LocalWords:  SavedList
