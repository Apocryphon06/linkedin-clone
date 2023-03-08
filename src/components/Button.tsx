import React from "react";

function Button({ label }: any) {
  return (
    <button className="text-base bgHover font-sansSemibold text-linkedinBlue border border-linkedinBlue rounded-full px-5 py-1">
      {label}
    </button>
  );
}

export default Button;
