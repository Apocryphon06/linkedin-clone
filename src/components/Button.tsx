import React from "react";

function Button({ label, icon, padding, onClick, variant }: any) {

  
  return (
    <>
      {variant === "secondary" ? (
        <button
          onClick={onClick}
          className={`text-base hover:bg-grayLight hover:shadow-md font-sansSemibold text-gray border-2 border-gray rounded-full ${
            padding ? padding : "px-5"
          } py-1`}
        >
          <div className="flex flex-row items-center gap-1">
            {icon ?? <></>} {label}
          </div>
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`text-base bgHover hover:shadow-md font-sansSemibold text-linkedinBlue border border-linkedinBlue rounded-full ${
            padding ? padding : "px-5"
          } py-1`}
        >
          <div className="flex flex-row items-center gap-1">
            {icon ?? <></>} {label}
          </div>
        </button>
      )}
    </>
  );
}

export default Button;
