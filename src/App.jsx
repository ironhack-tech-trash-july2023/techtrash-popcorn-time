import { useState } from "react";

import movies from "./data/movies.json";

import Header from './components/Header'
import AddMovie from "./components/AddMovie";
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieTitle) => {
    const newList = moviesToDisplay.filter((element) => {
      return element.title !== movieTitle;
    });
    setMoviesToDisplay(newList);
  }



  const addNewMovie = (newMovie) => {
    const newList = [newMovie, ...moviesToDisplay];
    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <AddMovie callbackToAddMovie={addNewMovie} />
      <Main movies={moviesToDisplay} callbackToDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
