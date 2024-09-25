import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "./styles";

const APIKey = import.meta.env.VITE_API_KEY;
const imagePath = 'https://image.tmdb.org/t/p/w500/';

function Details() {

    const { id } = useParams()
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?${APIKey}&language=en-US`)
        .then(response => response.json())
        .then(data => {

            const {title, overview, poster_path, release_date} = data;

            const movie = {
                id,
                title: title,
                sinopse: overview,
                image: `${imagePath}${poster_path}`,
                releaseDate: release_date
            }
            setMovie(movie)
        })
    }, [id])

    return(
        <Container>
            <div className="movie">
                <img src= {movie.image} alt={movie.sinopse}/>
            <div className="details">
                <h1>{movie.title}</h1>
                <span>Sinopse: {movie.sinopse}</span>
                <span className="release-date">Release Date: {movie.releaseDate}</span>
                <Link to= "/"><button>Go Back</button></Link>
            </div>
        </div>
        </Container>
    )
}

export default Details;