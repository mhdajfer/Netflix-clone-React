import axios from "axios";
import { useEffect, useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Banner() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    getBannerImg();
  }, []);

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
        <div className="h-[550px] lg:h-[730px]">
          <img
            src={import.meta.env.VITE_IMG_BASIC_URL + movie?.backdrop_path}
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 text-white  w-[30rem] ms-6">
            <h1 className="font-bold text-6xl mb-8">{movie?.title}</h1>
            <p className="font-semibold text-2xl ">
              #{Math.floor(movie.vote_average)} in Movies today
            </p>
            <p className="my-6">{movie.overview}</p>
            <div className="flex">
              <button
                type="button"
                className="flex  items-center text-black bg-gray-200 hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 "
              >
                <FaCirclePlay size={20} className="mx-1" /> Play now
              </button>
              <button
                type="button"
                className="text-white flex items-center bg-gray-300 bg-opacity-40 hover:bg-opacity-80  border border-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-md px-5 py-2.5 me-2 mb-2 "
              >
                <IoIosInformationCircleOutline size={20} className="mx-1" />{" "}
                Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
