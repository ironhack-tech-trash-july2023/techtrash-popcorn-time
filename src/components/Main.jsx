import { useState } from "react";
import movies from "../data/movies.json";

import "./Main.css";

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
                    <section key={movieObj.id} className="card" >
                        <h2>{movieObj.title}</h2>

                        { movieObj.imgURL 
                            ? <img src={movieObj.imgURL} /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" /> 
                        }

                        


                        <h3>Rating: {movieObj.rating}</h3>
                        {movieObj.rating > 8 && <p>RECOMMENDED</p>}

                        <button onClick={() => {deleteMovie(movieObj.id)}}>Delete</button>
                    </section>
                )
            })}
        </div>
    );
}

export default Main;