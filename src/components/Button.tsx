import React from "react";

function Button({ label, icon }: any) {
  return (
    <button className="text-base bgHover font-sansSemibold text-linkedinBlue border border-linkedinBlue rounded-full px-5 py-1">
      <div className="flex flex-row items-center gap-1">
      {icon ?? <></>} {label}
      </div>
    </button>
  );
}

export default Button;
