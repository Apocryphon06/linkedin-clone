import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function PageNotFound() {
  return (
    <div className="pt-[160px] flex flex-col justify-center items-center">
      <p className="text-2xl font-sans">Something went wrong</p>
      <p className="text-base mt-[7px]">Refresh the page</p>
      <br/>
      <Link to="/">
        <Button label="Try again" />
      </Link>
    </div>
  );
}

export default PageNotFound;
