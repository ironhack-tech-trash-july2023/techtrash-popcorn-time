import { useState } from "react";


function AddMovie(props) {

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const movieDetails = {
            title: title,
            rating: rating
        }

        // invoke function in the parent component
        props.callbackToAddMovie(movieDetails);

        // clear form
        setTitle("");
        setRating("");
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        required={true}
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>


                <label>
                    Rating:
                    <input
                        name="rating"
                        type="number"
                        required={true}
                        min={1}
                        max={10}
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </section>
    )
}

export default AddMovie;