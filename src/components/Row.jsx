import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Row({ title, fetchURL, rowId }) {
  const [movies, setMovies] = useState([]);

  const sliderLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className="bg-white left-0 rounded-full  absolute  opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block "
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block"
        />
      </div>
    </>
  );
}

export default Row;
