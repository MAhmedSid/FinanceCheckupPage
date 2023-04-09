import React from "react";
import InputField from "./Input";

const FinanceInp = () => {
  return (
    <div className="  w-[40.8rem] h-[31.31rem] shadow-[0_4px_30px_20px_rgba(0,0,0,0.04)] bg-white">
      <div className="flex flex-col items-center mx-8 mb-[34px]">
        <div className="flex justify-between mt-[32px] w-[36.8rem] h-[47px] bg-gradient-to-r from-primary-0 to-primary-1 shadow-[0_4px_10px_rgba(64,78,237,0.2)]">
          <h2 className="text-2xl font-bold mt-2 ml-2 leading-9">Basic Financial Inputs ($)</h2>
        </div>

        <form className="w-[590px] grid grid-cols-2 gap-x-[138px] gap-y-4 mt-5   ">
        <InputField  label="Monthly Income"  />
        <InputField  label="Total Savings (Liquid Funds)"  />
        <InputField  label="Monthly Expenses"  />
        <InputField  label="Investments (401K, IRA, Stocks, Bonds)"  />
        <InputField  label="Monthly Debt pmt (credit card, car etc)"  />
        <InputField  label="Total Debt (except mortgage)"  />
        <InputField  label="Housing / Rent, Tax, Inurance"  />
        <InputField  label="Mortgage Balance"  />
        </form>
      </div>
    </div>
  );
};

export default FinanceInp;
