import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Vendor/Sidebar";
import Header from "../../components/Vendor/Header";
import { useState } from "react";

const StockManagementSystem = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>

      {/* Sidebar + Content wrapper */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Fixed Sidebar */}
        <div className={`fixed top-16 bottom-0 left-0 transition-all duration-300 ${expanded ? "w-56" : "w-20"}`}>
          <Sidebar expanded={expanded} setExpanded={setExpanded} />
        </div>

        {/* Scrollable Content */}
        <main className={`flex-1 transition-all duration-300 ${
            expanded ? "ml-48" : "ml-20"
          } p-6 overflow-y-auto bg-blue-100`}>
          <Outlet /> {/* Nested routes render here */}
        </main>
      </div>
    </div>
  );
};

export default StockManagementSystem;
