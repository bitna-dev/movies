import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
    const {id} = useParams();

    async function getMovie() {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    const [movie, setMovie] = useState("");
    return (
        <div>
            <img src={movie.medium_cover_image} alt={movie.title}/>
            <h1>{movie.title} ({movie.year})</h1>
            <h3>Genre : {movie.genres.map(genre => <span key={genre}>{genre}, </span>)}</h3>
            <h3>Rating : {movie.rating}</h3>
            <h5>{movie.description_full}</h5>
        </div>

    );
}

export default Detail;
