import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="text-center pt-[100px]">
      <p className="text-8xl font-bold text-red-500 ">404</p>
      <p className="text-6xl font-bold opacity-30 uppercase pt-[10px]">
        Page not found!
      </p>
      <p className="text-2xl font-bold text-[#a3a3a3]  pt-[10px]">
        Click{" "}
        <Link to="/">
          <span className="hover:underline cursor-pointer text-black">here</span>
        </Link>{" "}
        to return home
      </p>
    </div>
  );
}

export default PageNotFound;
