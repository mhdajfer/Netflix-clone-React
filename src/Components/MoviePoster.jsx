/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
function MoviePoster({ movie, size }) {
  const [hoverPoster, sethoverPoster] = useState(false);
  return (
    <>
      <div className={`w-48 hover:scale-125 mx-1 transition-all ` + size}>
        <img
          src={import.meta.env.VITE_IMG_BASIC_URL + movie?.poster_path}
          alt=""
          className=" cursor-pointer hover:z-10  w-full h-full object-cover"
        />
      </div>
    </>
  );
}

export default MoviePoster;
