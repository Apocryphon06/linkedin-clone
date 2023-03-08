import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="text-center absolute top-[30%] left-[30%]">
      <p className="lg:text-8xl md:text-6xl text-4xl font-sansSemibold text-red-500 "> 404</p>
      <p className="lg:text-6xl md:text-4xl text-2xl font-sansSemibold opacity-30 uppercase pt-[10px]">
        Page not found!
      </p>
      <p className="lg:text-2xl md:text-xl text-lg font-sansSemibold text-[#a3a3a3]  pt-[10px]">
        Click{" "}
        <Link to="/">
          <span className="hover:underline cursor-pointer text-black">
            here
          </span>
        </Link>{" "}
        to return home
      </p>
    </div>
  );
}

export default PageNotFound;
