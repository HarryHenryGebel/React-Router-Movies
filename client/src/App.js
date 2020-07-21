import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';
import requester from 'easier-requests';

function getMovies(setMovies){
  async function _getMovies(setMovies) {
    const uid = requester.createUniqueID();
    await requester.get('http://localhost:5000/api/movies', uid);
    setMovies(requester.response(uid).data);
  }
  _getMovies(setMovies);
}

function App () {
  requester.setOptions({throwOnFailure: true});
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => getMovies(setMovies), []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path="/">
        <MovieList movies={movies}/>
      </Route>
      <Route path="/movies/:id">
        <Movie />
      </Route>
    </div>
  );
};

export default App;

//  LocalWords:  SavedList
