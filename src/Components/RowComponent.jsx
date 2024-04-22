import MoviePoster from "./MoviePoster";
import { useState, useEffect } from "react";
import axios from "axios";

function RowComponent() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getBannerImg();
  }, []);

  console.log(movieList);

  function getBannerImg() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&year=2023&api_key=${
          import.meta.env.VITE_MOVIE_API_KEY
        }`
      )
      .then((res) => {
        setMovieList(res.data.results);
      });
  }
  return (
    <>
      <h1 className="text-white">Trending</h1>
      <div
        className="flex overflow-x-scroll h-80 items-center"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex flex-nowrap bg-green-700">
          {movieList.map((movie) => (
            <MoviePoster key={movie?.id} movie={movie} />
          ))}
        </div>
      </div>
      <div
        className="flex space-x-6 m-12 p-4 bg-green-400 w-56 auto"
        style={{ overflowX: "auto", overflowY: "visible" }}
      >
        <img
          src={import.meta.env.VITE_IMG_BASIC_URL + movieList[2]?.poster_path}
          className="w-48 hover:scale-125"
        />
        <img
          src={import.meta.env.VITE_IMG_BASIC_URL + movieList[2]?.poster_path}
          className="w-48 hover:scale-125"
        />
      </div>
    </>
  );
}

export default RowComponent;
