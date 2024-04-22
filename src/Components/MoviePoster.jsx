/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable no-unused-vars */
function MoviePoster({ movie }) {
  const [hoverPoster, sethoverPoster] = useState(false);
  return (
    <>
      <div className="w-48 hover:scale-125 mx-1 relative ">
        <img
          src={import.meta.env.VITE_IMG_BASIC_URL + movie?.poster_path}
          alt=""
          className=" cursor-pointer z-99"
        />
        <div className="hidden">
          {/* <p>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
          </p> */}
        </div>
      </div>
    </>
  );
}

export default MoviePoster;
