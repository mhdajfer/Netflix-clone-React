import MoviePoster from "./MoviePoster";
import { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types, no-unused-vars
function RowComponent({ url, title, size = "", rowSize = "h-[350px]" }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getBannerImg(url);
  }, [url]);


  function getBannerImg(url) {
    axios.get(url + `${import.meta.env.VITE_MOVIE_API_KEY}`).then((res) => {
      setMovieList(res.data.results);
    });
  }
  return (
    <>
      <h1 className="text-white ms-4 font-semibold mb-[-30px]">{title}</h1>
      <div
        className={`flex overflow-x-scroll items-center ${rowSize}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex flex-nowrap">
          {movieList.map((movie) => (
            <MoviePoster key={movie?.id} movie={movie} size={size} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RowComponent;
