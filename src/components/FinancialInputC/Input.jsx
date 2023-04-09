import React from 'react'

const InputField = (props) => {

    const {label} = props

  return (
    <div className='flex flex-col'>
    <label  className='text-[#121212] opacity-80 font-semibold text-xs leading-4 mt-1 mb-[3px]' htmlFor={label} >{label}</label>
    <input name={label} id={label}  className='w-[14.1rem] h-[50px] rounded-xl bg-[rgb(236,236,236)] bg-opacity-50 text-[#0A1827] text-xs font-medium leading-6 px-[17px] py-[13px] font-body focus:border-[#404EED] focus:border-2 outline-none' type="number" />
  </div>
  )
}

export default InputField