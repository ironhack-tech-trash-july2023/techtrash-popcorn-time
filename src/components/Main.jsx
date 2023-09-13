import { useState } from "react";

import movies from "../data/movies.json";
import Movie from "./Movie";

function Main(){

    // const [variable, setVariable] = useState(initalValue);

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {

        const newList = moviesToDisplay.filter( (element) => {
            if(element.id !== movieId){
                return true;
            } else {
                return false;
            }
        });


        // const newList = moviesToDisplay.filter( (element) => {
        //     return element.id !== movieId;
        // });


        setMoviesToDisplay(newList);

    }

    let message;
    if(moviesToDisplay.length > 0){
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>
    } else {
        message = <h1>Sorry, no movies to display</h1>
    }


    return (
        <div className="Main">
            
            {message}

            {moviesToDisplay.map((movieObj) => {
                return (
                    <Movie movieDetails={movieObj} callbackToDelete={deleteMovie} />
                )
            })}
            
        </div>
    );
}

export default Main;