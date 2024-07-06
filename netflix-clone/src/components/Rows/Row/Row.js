import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../../../Utils/axios"; // Import axios from correct path
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(fetchUrl); // Log the fetchUrl for debugging
        const request = await axios.get(fetchUrl); // Fetch data from the provided URL
        console.log(request); // Log the request object for debugging
        setMovies(request.data.results); // Update state with fetched movie results
      } catch (error) {
        console.log("Error fetching data:", error); // Log any errors that occur during fetching
      }
    };

    fetchData(); // Call the fetchData function when the component mounts or fetchUrl changes
  }, [fetchUrl]); // Depend on fetchUrl to refetch when it changes

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          console.log(url); // Log the fetched trailer URL for debugging
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams); // Log the URLSearchParams object for debugging
          console.log(urlParams.get("v")); // Log the 'v' parameter value for debugging
          setTrailerUrl(urlParams.get("v")); // Set the 'v' parameter value to trailerUrl state
        })
        .catch((error) => console.log(error)); // Log any errors that occur during fetching
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            onClick={() => handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: 40 }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
