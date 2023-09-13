import { useState } from "react";

import movies from "./data/movies.json";

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  
  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter( (element) => {
        return element.id !== movieId;
    });
    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
