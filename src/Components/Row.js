import React, { useState, useEffect } from 'react';
import axios from "../axios";
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
import '../Row.css';
function Row(props) {
    const base_url = "https://image.tmdb.org/t/p/original";
    //props d..
    const { title, fetchUrl, isLargeRow } = props
    //usestate
    const [movies, setovies] = useState([]);
    const [trailerId, setTrailerId] = useState("")
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const handleClick = (movie) => {
        console.log(movie);
        if (trailerId) {
            setTrailerId('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.orginal_name || "")
                .then((url) => {
                    console.log(url)
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerId(urlParams.get("v"));
                }).catch((error) => console.log(movie?.name, error))
        }
    }
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="row" >
            <h2>{title}</h2>

            <div className="row__posters">
                {/**several row posters */}
                {movies.map(movie => (

                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title}
                        onClick={() => handleClick(movie)}
                    ></img>
                ))}
            </div>
            {trailerId && <YouTube videoId={trailerId} opts={opts} ></YouTube>}
        </div >
    )
}

export default Row;
