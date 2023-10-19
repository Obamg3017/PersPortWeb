import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center  my-auto">
      <div className="text-[#fcebd6] flex justify-center items-center flex-col h-full scroll-mb-20">
        <div className="flex justify-center items-center flex-col w-[48%] max-w-xxl ">
          <h2 className="text-2xl sm:text-5xl font-bold my-6 text-center">
            Olorunfemi Bamgbose
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold my-7 text-center ">
            Fullstack Developer + Underwriter
          </h3>
          
          <p className="text-sm sm:text-lg text-center my-11">
            I am a firm believer in having a solution based approach in almost
            everything that I do-as a senior underwriter for the past ten years,
            gathering information, evaluating risks, making decisions, and
            generating policies base on those factors, eventually led to
            policyholders being affected by the underwriting process-in turn
            this often created difficult discourses, which almost always
            prompted me to put on my “solution focused” hat and find alternatives that
            better served policyholders. Now as a fullstack developer, my
            “solution focused” hat stays on around the clock, as I am a passionate
            believer in solutions through software development. With my
            experience as a underwriter, adaptability, and joy of learning new
            languages, tools, processes, I am avidly seeking new challenges to
            align with my interests and leverage my passions. If you want to get
            to know me better, please feel free to explore my
            {/* <a
              href="./about"
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-yellow-600 mx-2"
            >
              about
            </a> */}
            <Link to="/about" className="text-yellow-600 mx-2">
              about
            </Link>
            page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
