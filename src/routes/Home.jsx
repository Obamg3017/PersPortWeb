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

          <p className="text-sm font-bold sm:text-lg text-center my-11">
            With a decade of experience as an underwriter, I approach
            challenges with a solution-oriented mindset. My background involves assessing risks, quality control, decision making, and necessitating creative problem-solving. Now as a dedicated fullstack developer, my "solution-focused" hat stays on around the clock and I bring my expertise to crafting software solutions. Eager for new challenges, I combine adaptability and passion to create impactful outcomes. If you want to get to know me better, please feel free to explore my   
            {/* <a
              href="./about"
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-yellow-600 mx-2"
            >
              about
            </a> */}
            <Link to="/about" className="text-yellow-600 mx-2">
              ABOUT
            </Link>
            page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
