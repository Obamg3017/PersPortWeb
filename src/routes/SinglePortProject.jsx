import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PortfolioData from "../data/PortfolioData";
const SinglePortProject = () => {
  const [filteredItem, setFilteredItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const selectedProject = PortfolioData.find((project) => project.id == id);
      setFilteredItem(selectedProject);
    }
  }, [id]);
  console.log(filteredItem);
  return (
    <div className="p-4 flex flex-col md:flex-row items-center justify-center">
      <div className="text-[#fcebd6] p-4 flex-1">
        <h2 className="text-2xl sm:text-5xl font-bold">
          {filteredItem?.title}
        </h2>
        <div>
          <h3 className="text-xl sm:text-3xl font-bold my-4 ">Role:</h3>
          <p className="text-lg sm:text-xl ">{filteredItem?.role}</p>
        </div>
        <div className="my-5">
          <h3 className="text-xl sm:text-3xl font-bold my-4 ">
            Overview:
          </h3>
          <p className="text-lg sm:text-lg italic ">
            {filteredItem?.detailDesc}
          </p>
        </div>{" "}
        <div>
          <h3 className="text-xl sm:text-3xl font-bold my-4 ">Link:</h3>
          <a
            href={filteredItem?.RouteLink?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-2xl text-yellow-600 "
          >
            {filteredItem?.RouteLink?.name}
          </a>
        </div>
      </div>
      <div className="p-2 flex-[2.5] grid grid-cols-2 gap-2">
        {filteredItem?.Images?.map((singleImage, i) => (
          <img
            key={i}
            className="w-full rounded-3xl h-32 sm:h-80 object-fill"
            src={singleImage}
            alt={singleImage}
          />
        ))}
      </div>
    </div>
  );
};

export default SinglePortProject;
