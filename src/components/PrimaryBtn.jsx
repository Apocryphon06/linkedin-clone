import React from 'react'

const PrimaryBtn = ({ label, width, onClick }) => {
  return (
    <div className={`${width ? width : 'w-full'}`}>
      <button
        onClick={onClick}
        className="font-medium bg-primaryBlue hover:bg-primaryBlueDark text-white text-base h-[48px] rounded-full w-full flex items-center justify-center text-center"
      >
        {label}
      </button>
    </div>
  )
}

export default PrimaryBtn
