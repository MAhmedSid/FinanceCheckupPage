import React from "react";
import DataField from "./DataField";

const FinHealthCheckup = () => {
  return (
    <div className="bg-white shadow-[0_4px_30px_20px_rgba(0,0,0,0.04)] w-[31.62rem] h-[40.37rem]">
      <div className="flex flex-col items-center">
        <div className="flex justify-between mt-[32px] w-[27.62rem] h-[47px] bg-gradient-to-r from-primary-0 to-primary-1 shadow-[0_4px_10px_rgba(64,78,237,0.2)]">
          <h2 className="text-2xl font-bold mt-2 ml-2 leading-9">
            Your Financial Health Checkup
          </h2>
        </div>
        <DataField heading="Debt / Income ratio" data="10%" budgetBox={false} />
        <DataField heading="Expense coverage ratio by savings" data="8.33" budgetBox={false} />
        <DataField heading="Assets / Liabilities" data="23%" budgetBox={false} />
        <DataField heading="Assets / (Rent + Debt) coverage" data="1667%" budgetBox={false} />
        <DataField heading="Housing cost ratio" data="20%" budgetBox={false} />
        <DataField heading="Slack in Budget" data="$2000" budgetBox={true} />
      </div>
    </div>
  );
};

export default FinHealthCheckup;
