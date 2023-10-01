import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GiLaptop } from "react-icons/gi";
import { Link } from "react-router-dom";
import PortfolioData from "../data/PortfolioData";

const Portfolio = () => {
  return (
    <div className="p-16">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl text-[#fcebd6] font-semibold mb-4">
          Projects
        </h1>
        <GiLaptop
          size={60}
          style={{
            display: "block",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="text-[#fcebd6] space-x-2"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-9 mt-12">
          {/* Work 1 */}
          {PortfolioData.map((singleData, i) => (
            <div key={i} className="rounded overflow-hidden group relative">
              <img
                src={singleData.Images[0]}
                alt={singleData.title}
                className="w-full h-full object-cover rounded transform transition-transform duration-500 hover:scale-110"
              />
              <div className="w-full h-0 bg-gradient-to-b from-[rgb(0,0,0,0.7)] to-black-600 rounded absolute left-0 bottom-[-20%] overflow-hidden transition-height duration-500 group-hover:h-full group-hover:bottom-0 flex items-center justify-center flex-col p-4 text-center">
                <h2 className="font-semibold text-[#fcebd6] text-xl mb-4">
                  {singleData.title}
                </h2>
                <p className="text-[#fcebd6] text-lg">{singleData.shortDesc}</p>
                <Link
                  to={`/portfolio/${singleData.id}`}
                  className="mt-4 text-red-600 text-xl bg-white w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <BsBoxArrowUpRight
                    style={{ stroke: "red", strokeWidth: "1" }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
