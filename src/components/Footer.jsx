import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
const Footer = () => {
  return (
    <div className=" text-[#fcebd6] py-3 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-md sm:text-3xl sm:font-bold">
          Olorunfemi Bamgbose
        </div>
        <div className="flex justify-center items-center gap-4 mt-2">
          <a
            href="http://www.linkedin.com/in/olorunfemi-bamgbose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Obamg3017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a href="RESUME-Olorunfemi_.docx" download>
            <HiDocumentText size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
