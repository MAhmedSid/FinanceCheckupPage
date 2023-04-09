import React from 'react'
import {FaCircle} from "react-icons/fa"

const Remarks = (props) => {
  return (
    <div className='flex text-gray-900 mt-[15px] ml-5'>
        <FaCircle height="1rem" width="1rem" color='#404EED' className='mt-1  absolute' />
        <p className={`font-semibold text-sm leading-6 ml-7 max-w-lg ${props.warning ? "text-[#890F0D]" : "text-[#219F94]"}`} >{props.text}</p>
    </div>
  )
}

export default Remarks