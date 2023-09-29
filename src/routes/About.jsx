import React from "react";
import synergy1 from "../assets/synergy1.jpeg";
const About = () => {
  const Images2 = [synergy1, synergy1, synergy1, synergy1];
  return (
    <div className="border-[#fcebd6] border-y-2 border-solid  ">
      <div className="p-4 flex flex-col md:p-12  md:flex-row items-center justify-center">
        <div className="text-[#fcebd6] p-4 md:p-12 flex-1">
          <div>
            <h2 className="text-2xl sm:text-5xl mb-4 font-bold underline">
              About Me
            </h2>

            <p className="text-lg sm:text-2xl italic ">
              Hello! My name is Olorunfemi Bamgbose (yes I know I know, my name
              is pretty long lol), but you can call me O or Femi 😎! I am based
              in New York City and am a full-stack software developer. I’ve
              spent the last year and a half studying Javascript in depth and
              working on projects. My skill set includes JavaScript, React,
              Redux, Node.js, Express, PostgreSQL, Sequelize, Next.js, Figma,
              TailwindCSS, HTML, CSS, and Git. My passion for software
              engineering began several years ago when working
              cross-functionally as an underwriter, with the engineering team-I
              would provide feedback on applications that were used by the
              underwriting team. The feedback consists of user-experience,
              efficiency tips and everything you can possibly think of that
              would make life easier for underwriters to navigate through these
              applications/systems seamlessly. Seeing the engineering team work
              together, plan, design, and write code was something I found to be
              amazing! At that point, curiosity took over and eventually my
              passion grew while learning how to code.
            </p>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-12">
          <img
            className="w-full rounded-md md:rounded-3xl object-cover"
            src={synergy1}
            alt="synergy1"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col md:p-12 md:flex-row-reverse items-center justify-center">
        <div className="text-[#fcebd6] p-4 md:p-12 flex-1">
          <div>
            <h2 className="text-2xl mb-4 sm:text-5xl font-bold underline">
              Other Than Coding
            </h2>

            <p className="text-lg sm:text-2xl italic ">
              Outside of my passion for coding and software development, I am a
              huge sports enthusiast and a big fan of almost every sport like
              basketball, football, soccer, baseball, hockey, track and field,
              golf, and many others. I’m a part of a local basketball
              recreational league and the love for the game of basketball allows
              me to continue to play-at a young age playing basektball taught me
              life lessons such as, discipline, patience, the value of teamwork,
              and resilency-plus, its also a wonderful way of knocking out some
              cardio! I also enjoying traveling the world and experiencing
              different cultures and everything that comes with it (especially
              the food 😁). Speaking of food, as someone who loves to eat, I am
              also health conscious as well. Finding the time to include
              physical activities into my daily routine provides balance. I
              enjoy going for a run, hiking, going to the gym, and especially
              riding my bike around all of NYC’s beautiful bike paths!
              {/* <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black mx-2"
              >
                place instagram link
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
