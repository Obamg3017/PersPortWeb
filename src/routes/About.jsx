import React from "react";
import synergy1 from "../assets/synergy1.jpeg";
const About = () => {
  const Images2 = [synergy1, synergy1, synergy1, synergy1];
  return (
    <div className="border-[#fcebd6] border-y-2 border-solid  ">
      <div className="p-4 flex flex-col md:p-12  md:flex-row items-center justify-center">
        <div className="text-[#fcebd6] p-4 md:p-12 flex-1">
          <div>
            <h2 className="text-2xl sm:text-5xl mb-4 font-bold">About Me</h2>

            <p className="text-lg sm:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              doloribus eius eaque rem itaque, ratione consectetur quam
              laudantium expedita ad. Dicta ut quas odit hic rem! Deleniti
              quaerat in provident? Quibusdam nisi maiores eveniet perferendis
              non illo voluptatibus quas repellat porro quaerat. Esse deserunt
              optio aliquid dolore id omnis voluptatum amet error quibusdam
              corporis hic possimus repellat nesciunt ipsa debitis cum, aperiam
              fuga quam? Corrupti quo illum fugiat voluptatibus, aliquid aliquam
              autem rerum! Tempore non dolor possimus enim itaque iusto alias
              nulla, consequatur labore ullam necessitatibus fugit dolore vel
              beatae. Impedit veniam id culpa repellat dolor, aliquam architecto
              ratione. Itaque?
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
            <h2 className="text-2xl mb-4 sm:text-5xl font-bold">About Me</h2>

            <p className="text-lg sm:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              doloribus eius eaque rem itaque, ratione consectetur quam
              laudantium expedita ad. Dicta ut quas odit hic rem! Deleniti
              quaerat in provident? Quibusdam nisi maiores eveniet perferendis
              non illo voluptatibus quas repellat porro quaerat. Esse deserunt
              optio aliquid dolore id omnis voluptatum amet error quibusdam
              corporis hic possimus repellat nesciunt ipsa debitis cum, aperiam
              fuga quam? Corrupti quo illum fugiat voluptatibus, aliquid aliquam
              autem rerum! Tempore non dolor possimus enim itaque
              <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black mx-2"
              >
                iusto alias
              </a>
              nulla, consequatur labore ullam necessitatibus fugit dolore vel
              beatae. Impedit veniam id culpa repellat dolor, aliquam architecto
              ratione. Itaque?
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
