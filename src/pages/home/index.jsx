import { Link } from "react-router-dom";
import { Container,  MovieList, Movie} from "./styles";
import { useState, useEffect } from "react";

const APIKey = import.meta.env.VITE_API_KEY;

function Home (){

    const imagePath = 'https://image.tmdb.org/t/p/w500/';
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        //consumir a api
        fetch(`https://api.themoviedb.org/3/movie/popular?${APIKey}&language=en-US`)
        .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])


    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${imagePath}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>  
    )
}

export default Home;