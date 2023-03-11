import React from "react";
import connect from "../assets/icons/connect.svg";
import Button from "./Button";

function Card() {
  return (
    <div className=" w-[180px] text-center rounded-lg shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-center items-center border border-[#d3d3d3]">
      {/* background */}
      <img
        src={`https://picsum.photos/200?id=${Math.random()*10}`}
        alt="bg"
        className="h-[85px] w-full rounded-tl-lg rounded-tr-lg"
      />
      {/* profile pic */}
      <img
        // src={`https://picsum.photos/200?id=${Math.random()*10}`}
        // src={`https://source.unsplash.com/random/?people?id=${Math.random()*10}`}
        src={`https://loremflickr.com/200/200?id=${Math.random()*10}`}

        alt="profile"
        className="w-[90px] h-[90px] rounded-full relative top-[-40px] border-2 border-white"
      />
      <div className="relative bottom-[30px] mb-[-10px]">
        <p className="text-base font-sansSemibold">Pranav</p>
        <p className="text-sm text-gray">Frontend Developer</p>

        <p className="text-xs text-gray py-[10px]"> 13 mutual connections</p>
        <Button
          label="Connect"
          icon={
            <img className="w-[16px] h-[16px]" src={connect} alt={connect} />
          }
        />
      </div>
    </div>
  );
}

export default Card;
