import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex justify-between items-center text-[#fcebd6] px-4 py-3">
      <Link className="text-md sm:text-3xl sm:font-bold" to={"/"}>
        O.B
      </Link>
      <div className="flex justify-center items-center gap-4">
        <Link className="text-md sm:text-3xl sm:font-bold" to={"portfolio"}>
          Portfolio
        </Link>
        <Link className="text-md sm:text-3xl sm:font-bold" to={"about"}>
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
