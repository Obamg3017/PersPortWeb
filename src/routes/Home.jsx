import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-[#fcebd6] flex justify-center items-center flex-col h-full scroll-mb-20">
        <div className=" w-[75%] max-w-xxl sm: flex justify-center items-center flex-col  ">
          <h2 className="text-3xl sm:text-5xl font-bold my-12 text-center">
            Olorunfemi Bamgbose
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold my-7 text-center ">
            Software Engineer
          </h3>
          <p className="text-xl sm:text-2xl text-center my-11">
            My background encompasses risk assessment, quality control,
            decision-making, fraud management, and creative problem-solving. I
            consistently approached challenges with a solution-oriented mindset,
            and as a Software Engineer, my “solution-focused” perspective
            remains active around the clock. I bring this expertise to crafting
            innovative and effective software solutions. Fueled by a deep
            curiosity and a drive to learn and grow, I am constantly seeking new
            knowledge and ways to push my skills further. Adaptability and
            passion for impactful outcomes shape my approach to every project,
            and I am excited to tackle any challenge that comes my way. If you’d
            like to get to know me better, please feel free to explore my
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
