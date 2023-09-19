import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
const Footer = () => {
  return (
    <div className=" text-white py-3 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="text-md sm:text-3xl sm:font-bold">
          Olorunfemi Bamgbose
        </div>
        <div className="flex justify-center items-center gap-4 mt-2">
          <a
            href="http://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="OlorunfemiBamgbose-resume.pdf" download>
            <HiDocumentText size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
