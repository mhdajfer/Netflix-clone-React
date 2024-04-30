import MoviePoster from "./MoviePoster";
import { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

// eslint-disable-next-line react/prop-types, no-unused-vars
function RowComponent({ url, title, size = "", rowSize = "h-[350px]" }) {
  const [movieList, setMovieList] = useState([]);
  const [videoId, setVideoId] = useState("");
  const YtOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    getBannerImg(url);
  }, [url]);

  function getBannerImg(url) {
    axios.get(url + `${import.meta.env.VITE_MOVIE_API_KEY}`).then((res) => {
      setMovieList(res.data.results);
    });
  }

  const handleTrailer = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${
          import.meta.env.VITE_MOVIE_API_KEY
        }&language=en-US`
      )
      .then((res) => setVideoId(res.data.results[0].key))
      .catch((err) => console.log("something went wrong", err));
    console.log(videoId);
  };
  return (
    <>
      <h1 className="text-white ms-4 font-semibold mb-[-30px]">{title}</h1>
      <div
        className={`flex overflow-x-scroll items-center ${rowSize}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex flex-nowrap">
          {movieList.map((movie) => (
            <MoviePoster
              key={movie?.id}
              movie={movie}
              size={size}
              handleTrailer={handleTrailer}
            />
          ))}
        </div>
      </div>
      {videoId ? <YouTube videoId={videoId} opts={YtOpts} /> : null}
    </>
  );
}

export default RowComponent;
