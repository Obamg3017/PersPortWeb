import React from "react";

const About = () => {
  return (
    <div>
      <div className="p-4 flex flex-col md:flex-row items-center justify-center">
        <div className="text-white p-4 basis-1/3">
          <div>
            <h2 className="text-2xl sm:text-5xl font-bold">About Me</h2>

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
        <div >
          <img
         
            className="w-full h-32 sm:h-80 object-cover"
            src="../assets/synergy1.jpeg"
            alt="synergy1"
          />
        </div>
      </div>
      <div className="p-4 flex flex-col md:flex-row items-center justify-center">
        <div className="text-white p-4 flex-1">
          <div>
            <h2 className="text-2xl sm:text-5xl font-bold">About Me</h2>

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
        <div className="p-4 flex-1 grid grid-cols-2 gap-4">
          {Images2?.map((singleImage, i) => (
            <img
              key={i}
              className="w-full h-32 sm:h-80 object-cover"
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
