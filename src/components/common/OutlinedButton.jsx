import React from 'react'

const OutlinedButton = ({ type, onClick, label, width }) => {
    return (
        <div className={`${width || 'w-fit'}`}>
            <button type={type} onClick={onClick} className='text-primaryBlue border border-primaryBlue rounded-full py-2 text-sm px-6 font-medium hover:bg-blueHover'>
                {label}
            </button>
        </div>
    )
}

export default OutlinedButton