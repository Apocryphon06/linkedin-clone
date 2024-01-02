import React from 'react'

const TextInput = ({
  type,
  name,
  value,
  placeholder,
  handleChange,
  style,
}) => {
  return (
    <div className={`${style ? style : 'w-full'} flex flex-col gap-2`}>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="h-[48px] rounded border border-primaryDark w-full lg:text-base text-sm outline-none hover:bg-black/10 px-2"
      />
    </div>
  )
}

export default TextInput
