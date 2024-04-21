import axios from "axios";
import { useEffect, useState } from "react";

function Banner() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    getBannerImg();
  }, []);

  console.log(movie);

  function getBannerImg() {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&year=2023&api_key=${
          import.meta.env.VITE_MOVIE_API_KEY
        }`
      )
      .then((res) => {
        setMovie(res.data.results[4]);
      });
  }
  return (
    <>
      <div className="h-fit w-full">
        <div className="relative h-[550px] lg:h-[730px]">
          <img
            src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-40 text-white  w-[30rem] ms-6">
            <h1 className="font-bold text-6xl mb-8">{movie?.title}</h1>
            <p className="font-semibold text-2xl ">
              #{Math.floor(movie.vote_average)} in Movies today
            </p>
            <p className="my-6">{movie.overview}</p>
            <div>
              <button
                type="button"
                className="text-black bg-gray-200 hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 "
              >
                Dark
              </button>
              <button
                type="button"
                className="text-white bg-gray-300 bg-opacity-40 hover:bg-opacity-80  border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 "
              >
                Light
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
