import PropTypes from "prop-types";
import { Link } from "react-router-dom"


function Movie({id,medium_cover_image,title,year,summary,genres }){
    return <div>
        <img src={medium_cover_image} alt={title}/>
        <Link to={`/movie/${id}`}><h2>{title}({year})</h2></Link>
        <p>{summary}</p>
        <ul>
            {genres.map(gen => (
                <li key={gen}>{gen}</li>
            ))}
        </ul>
    </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
