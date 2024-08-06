import React from "react";
import example1 from "../assets/example1.jpeg";
import example4 from "../assets/example4.jpg";
import example5 from "../assets/example5.jpg";
import example6 from "../assets/example6.jpg";
import example7 from "../assets/example7.jpg";
import example8 from "../assets/example8.jpg";
import example9 from "../assets/example9.jpg";
import example10 from "../assets/example10.jpg";

const About = () => {
  const Images2 = [example5, example6, example7, example8, example9, example10];
  return (
    <div className=" ">
      <div className="p-4 flex flex-col md:p-12  md:flex-row items-center justify-center">
        <div className="text-[#fcebd6] p-4 md:p-12 flex-[.9]">
          <div>
            <h2 className="text-2xl text-center sm:text-5xl sm:text-left mb-4 font-bold ">
              About Me
            </h2>

            <p className="text-lg text-center sm:text-2xl sm:text-left italic ">
              Hello, Welcome! I'm Femi and I am based in New York City. My tech
              stack includes JavaScript, React, Express, PostgreSQL, SQL,
              MongoDB, Python, EJS, TailwindCSS, and Node.js. My passion for
              technology began in high school, where I studied programming and
              desktop publishing. <br></br>
              <br></br>My time working as an underwriter was rewarding because I
              learned so much about insurance, but one of the best aspects was
              the opportunity to collaborate with the engineering team. I
              provided feedback on applications used by the underwriting team,
              focusing on improving user experience, efficiency, and overall
              usability. Witnessing the engineering team plan, design, and code
              was inspiring and reignited my passion for technology. I was
              really impressed by their ability to solve complex problems. This
              experience sparked my curiosity and motivated me to learn how to
              code. Driven by this renewed passion, I transitioned into the tech
              space as an IT support specialist and later joined a Bootcamp to
              become a Software Engineer. My journey reflects my dedication to
              continuous learning and my commitment to utilize technology to
              create impactful solutions.
            </p>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-12">
          <img
            className="w-full rounded-md md:rounded-3xl object-cover"
            src={example4}
            alt="example4"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col md:p-12 md:flex-row-reverse items-center justify-center">
        <div className="text-[#fcebd6] p-4 md:p-12 flex-1">
          <div>
            <h2 className="text-2xl text-center mb-4 sm:text-5xl sm:text-left font-bold ">
              Other Than Coding 🏀 🏈 ⚾ ⚽ 🏒 ⛳
            </h2>

            <p className="text-lg text-center sm:text-2xl sm:text-left italic ">
              I am a huge sports enthusiast and a big fan of almost every sport
              like basketball, football, soccer, baseball, hockey, track and
              field, golf, and many others. I do favor the sport of basketball
              because I played it pretty much all of my life. At a young age,
              basektball taught me life lessons such as, discipline, patience,
              the value of teamwork, and resilency — plus, it is also a
              wonderful way of knocking out some good cardio! <br></br>
              <br></br>I also enjoy traveling the world and experiencing
              different cultures and everything that comes with it (especially
              the food 😁). Speaking of food, as someone who loves to eat, I am
              also health conscious as well. Finding the time to include
              physical activities into my daily routine provides much balance. I
              enjoy going for runs, hiking, going to the gym, and especially
              riding my bike around the city! 
              {/* I would love to connect, you can
              find me on
              <a
                href="http://www.linkedin.com/in/olorunfemi-bamgbose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ca8a04] mx-2 font-bold"
              >
                Linkedin.
              </a> */}
            </p>
          </div>
        </div>
        <div className="p-4 md:p-12 flex-1 grid grid-cols-2 gap-4">
          {Images2?.map((singleImage, i) => (
            <img
              key={i}
              className="w-full rounded-sm md:rounded-xl h-32 sm:h-80 object-cover"
              src={singleImage}
              alt={singleImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

<a
  href="http://www.linkedin.com/in/olorunfemi-bamgbose"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#ca8a04] mx-2 font-bold"
></a>;
