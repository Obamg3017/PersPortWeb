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
            Software Engineer With A Strong Emphasis on Front-End Development
          </h3>
          <p className="text-xl sm:text-2xl text-center my-11">
            With a decade of experience as an underwriter, I approach challenges
            with a solution-oriented mindset. My background involves assessing
            risks, quality control, decision making, fraud management, and
            necessitating creative problem-solving. As a Software Engineer, my
            "solution-focused" hat stays on around the clock and I bring my
            expertise to crafting software solutions. Eager for new challenges,
            I combine adaptability and passion to create impactful outcomes. If
            you want to get to know me better, please feel free to explore my
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
          <img
            className="w-1/3 md:w-1/8 mx-4 my-1"
            src="skydiving.jpg"
            alt="skydivingpicture"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
