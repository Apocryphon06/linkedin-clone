import Image from 'next/image'
import React, { Fragment } from 'react'

const OutlinedBtn = ({ label, width, onClick, image }) => {
  return (
    <div className={`${width ? width : 'w-full'}`}>
      <button
        onClick={onClick}
        className="font-medium text-primaryDark text-base h-[48px] rounded-full w-full flex gap-2 items-center justify-center text-center border border-primaryDark"
      >
        {typeof image !== 'undefined' ? (
          <Image width={20} height={20} src={image} alt={image} className='w-5 h-5' />
        ) : (
          <Fragment />
        )}
        {label}
      </button>
    </div>
  )
}

export default OutlinedBtn
