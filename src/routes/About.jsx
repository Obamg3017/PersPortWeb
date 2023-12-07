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
              Hello! My name is Olorunfemi Bamgbose, but you can call me O or
              Femi 😎! I am based in New York City and am a Front-End Developer
              and Underwriter. I’ve spent the last two years studying Javascript in
              depth and working on various projects. My skill set includes
              JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize,
              Next.js, Figma, TailwindCSS, HTML, CSS, and Git. <br></br>
              <br></br>My passion for software engineering began several years
              ago when working cross-functionally as an underwriter, with the
              engineering team-I would provide feedback on applications that
              were used by the underwriting team. The feedback consists of
              user-experience, efficiency tips and everything you can possibly
              think of that would make life easier for underwriters to navigate
              through these applications/systems seamlessly. Seeing the
              engineering team work together, plan, design, and write code was
              something I found to be amazing! At that point, curiosity took
              over and eventually my passion grew while learning how to code!
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
              Outside of my passion for coding and software development, I am a
              huge sports enthusiast and a big fan of almost every sport like
              basketball, football, soccer, baseball, hockey, track and field,
              golf, and many others. I do favor the sport of basketball because
              I played it pretty much all of my life. Currently, I’m a part of a
              basketball recreational league and continue to find time to play.
              At a young age, basektball taught me life lessons such as,
              discipline, patience, the value of teamwork, and resilency-plus,
              it is also a wonderful way of knocking out some good cardio!{" "}
              <br></br>
              <br></br>I also enjoy traveling the world and experiencing
              different cultures and everything that comes with it (especially
              the food 😁). Speaking of food, as someone who loves to eat, I am
              also health conscious as well. Finding the time to include
              physical activities into my daily routine provides much balance. I
              also enjoy going for runs, hiking, going to the gym, and
              especially riding my bike around all of NYC’s beautiful bike
              paths! I would love to connect, you can find me on
              <a
                href="http://www.linkedin.com/in/olorunfemi-bamgbose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ca8a04] mx-2 font-bold"
              >
                Linkedin.
              </a>
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
