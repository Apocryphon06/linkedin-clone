import React from "react";

function Input({ type, placeholder, value, onChange, width }: any) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`outline-linkedinBlue text-[14px] rounded-md ${
        width ? width : "w-full"
      }bg-none border p-2 py-1 border-gray mb-[10px]`}
    />
  );
}

export default Input;
