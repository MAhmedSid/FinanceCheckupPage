import React from 'react'
import BarChart from "../Charts/BarChart"


const ComparisonC = () => {
  return (
    <div className='flex flex-col items-center mt-44'>
        <h2 className='w-80 h-[3.2rem] text-[#404EED] rounded-xl bg-[#404EED] bg-opacity-[15%] font-semibold text-xl leading-[30px] py-[10px] text-center '>Total Assets vs Liabilities</h2>
         <div className='h-[25rem] w-[95%] mt-[2.6rem] rounded-xl bg-[#404EED] bg-opacity-5'>
       <BarChart />
        </div>
    </div>
  )
}

export default ComparisonC