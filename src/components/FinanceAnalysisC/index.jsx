import React from "react";
import PieChart from "../Charts/PieChart";
import Remarks from "./Remarks";

const Analysis = () => {
  return (
    <div className="flex flex-row">
      <div className="h-96 w-96 flex-[0.7] flex items-center flex-col">
        <h2 className="w-80 h-[3.2rem] text-[#404EED] bg-[#404EED] bg-opacity-[15%]  text-center rounded-xl font-semibold text-xl px-[14px] py-[10px]  mt-7 leading-[30px]">
          Monthly Expenses vs Savings
        </h2>

        <div className="relative mt-5">
          <div className=" h-[30rem] w-[60rem]">
            <PieChart />
          </div>
        </div>
      </div>
      <div className="flex-[0.5]  mt-[89px]">
        <Remarks
          warning={true}
          text="You may have too much debt, which is considered 
risky to lenders."
        />
        <Remarks
          warning={true}
          text="You have less than 3 months of savings to cover your 
expenses and debt obligations."
        />
        <Remarks warning={false} text="You have a positive net worth." />
        <Remarks
          warning={true}
          text="Your savings can be liquidated to cover <> months of 
payments. 6 months or more is a good sign."
        />
        <Remarks
          warning={false}
          text="Your housing cost is manageable to your income."
        />
        <div className="flex font-[1000] text-xl leading-8 ml-5 mt-12">
          <h4 className="text-black">Your Networth is: </h4>{" "}
          <h4 className="text-[#219F94] ml-1">$150,000</h4>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
