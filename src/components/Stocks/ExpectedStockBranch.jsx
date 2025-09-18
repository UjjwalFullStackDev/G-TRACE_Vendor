import { Search } from "lucide-react";
import { useState, useMemo } from "react";
import TopCardsSection from "./TopCardsSection";

export default function ExpectedStockBranch({ branchStocks, handleViewExpectedStock }) {

  // local states for filtering/sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState(false);

  const requestedCards = [
    { title: "Installer", qty: 120, color: "blue", link: "/stocks/expected" },
    { title: "Branches", qty: 89, color: "orange", link: "/stocks/expected/branches" },
    { title: "Manufacturer", qty: 400, color: "red", link: "/stocks/expected/manufacturer" },
  ];

  // filtered + sorted data
  const filteredRequests = useMemo(() => {
  let data = [...branchStocks];

  if (searchTerm.trim() !== "") {
    data = data.filter((req) => {
      const productOrderStr = String(req.productOrder || "");
      const statusStr = req.status?.toLowerCase() || "";

      return (
        productOrderStr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        statusStr.includes(searchTerm.toLowerCase())
      );
    });
  }

  if (sortByDate) {
    data.sort((a, b) => {
      const dateA = new Date(a.orderDate);
      const dateB = new Date(b.orderDate);
      return dateB - dateA;
    });
  }

  return data;
}, [branchStocks, searchTerm, sortByDate]);


  return (
    <div className="min-h-screen p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Expected (New) Stock</h1>

      {/* Top Cards + Sort Button */}
      <TopCardsSection
        cards={requestedCards}
        sortByDate={sortByDate}
        setSortByDate={setSortByDate}
      />

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header Actions */}
        <div className="px-4 py-3 flex items-center justify-between border-b">
          <button className="btn-primary">Expected (New) Stock</button>
          <div className="flex items-center gap-2">
            <div className="flex items-center border rounded-md px-2">
              <Search className="w-5 h-5 text-gray-600" />
              <input
                type="text"
                placeholder="Search..."
                className="p-2 text-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center border-collapse">
            <thead className="bg-gray-50 border-b text-gray-600 font-semibold">
              <tr>
                <th className="px-4 py-3">Branch</th>
                <th className="px-4 py-3">Total Products</th>
                <th className="px-4 py-3">Units of Products</th>
                <th className="px-4 py-3">View Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr
                    key={req.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">{req.branch}</td>
                    <td className="px-4 py-3">{req.totalProducts}</td>
                    <td className="px-4 py-3">{req.units}</td>
                    <td className="px-4 py-3">
                      <button
                        className="text-cyan-800 bg-cyan-100 py-1 px-4 rounded-md hover:text-white hover:bg-cyan-800 font-medium text-sm cursor-pointer"
                        onClick={() => handleViewExpectedStock(req.id)}
                      >
                        Click
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-6 text-gray-500">
                    No matching requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
