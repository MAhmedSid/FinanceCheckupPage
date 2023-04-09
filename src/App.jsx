import ComparisonC from "./components/ComparisonC";

import FinHealthCheckup from "./components/FinHealthCheckupC";
import Analysis from "./components/FinanceAnalysisC";
import FinanceInp from "./components/FinancialInputC";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutingC from "./components/RoutingC";

function App() {
  return (
    <div className="bg-[#ECECEC]">
      <div className="h-[395px] w-full bg-gradient-to-b from-[#404EED] to-[#1D236D] text-white">
        <Header />

        <div className="flex justify-evenly">
          <div>
            <FinanceInp />
            <h2 className="w-[40.875rem] h-[3.1rem] mt-[5rem] shadow-[0_4px_10px_rgba(64,78,237,0.2)] text-2xl font-bold pt-2 pl-8 leading-9  bg-gradient-to-r from-primary-0 to-primary-1">
              Current Surplus
            </h2>
          </div>
          <FinHealthCheckup />
        </div>
        <Analysis />
        <ComparisonC />
        <RoutingC />
        <Footer />
      </div>
    </div>
  );
}

export default App;
