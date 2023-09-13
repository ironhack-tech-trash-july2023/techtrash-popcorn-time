import Movie from "./Movie";

function Main(props){
    return (
        <div className="Main">
            {props.movies.map((movieObj) => {
                return (
                    <Movie key={movieObj.id} movieDetails={movieObj} callbackToDelete={props.callbackToDelete} />
                )
            })}
        </div>
    );
}

export default Main;