import { CheckCheck, Search } from "lucide-react";
import { useState, useMemo } from "react";

export default function ReceivedStock({ receivedStocks }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByDate, setSortByDate] = useState(false);
  const [selected, setSelected] = useState([]);
  const [stocks, setStocks] = useState(receivedStocks);
  const [otpVisible, setOtpVisible] = useState(null); // which row’s OTP is visible
  const [otpValue, setOtpValue] = useState(""); // current OTP value

  // --- Filter + Sort ---
  const filteredRequests = useMemo(() => {
    let data = [...stocks];
    if (searchTerm.trim() !== "") {
      data = data.filter((req) =>
        [req.productName, req.itgcId, req.imei, req.status, req.givenBy]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    if (sortByDate) {
      data.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
    }
    return data;
  }, [stocks, searchTerm, sortByDate]);

  // --- Select handlers ---
  const toggleSelectAll = () => {
    if (selected.length === filteredRequests.length) {
      setSelected([]);
    } else {
      setSelected(filteredRequests.map((req) => req.id));
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  // --- Actions ---
  const handleAccept = (id) => {
    setOtpVisible(id); // show OTP popup instead of directly accepting
  };

  const handleOtpSubmit = (id) => {
    if (otpValue.trim() === "") return;
    setStocks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, actionStatus: "accepted" } : item
      )
    );
    setOtpVisible(null);
    setOtpValue("");
  };

  const handleReceived = (id) => {
    setOtpVisible(id); // again OTP before final mark
  };

  const handleOtpReceived = (id) => {
    if (otpValue.trim() === "") return;
    setStocks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, actionStatus: "received" } : item
      )
    );
    setOtpVisible(null);
    setOtpValue("");
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Received Stock</h1>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3 flex items-center justify-between border-b">
          <button
            onClick={toggleSelectAll}
            className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-100"
          >
            {selected.length === filteredRequests.length
              ? "Unselect All"
              : "Select All"}
          </button>
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
                <th className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={
                      selected.length > 0 &&
                      selected.length === filteredRequests.length
                    }
                    onChange={toggleSelectAll}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded"
                  />
                </th>
                <th className="px-4 py-3">Product Name</th>
                <th className="px-4 py-3">Itgc Id</th>
                <th className="px-4 py-3">Device IMEI</th>
                <th className="px-4 py-3">Device S.No</th>
                <th className="px-4 py-3">Device Status</th>
                <th className="px-4 py-3">Given By</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr
                    key={req.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={selected.includes(req.id)}
                        onChange={() => toggleSelect(req.id)}
                        className="w-4 h-4 text-teal-600 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-4 py-3">{req.productName}</td>
                    <td className="px-4 py-3">{req.itgcId}</td>
                    <td className="px-4 py-3">{req.imei}</td>
                    <td className="px-4 py-3">{req.serialNo}</td>
                    <td className="px-4 py-3 font-medium">
                      <span
                        className={`px-3 py-1 rounded text-xs ${req.status === "Repair"
                            ? "bg-orange-100 text-orange-700"
                            : req.status === "Dead"
                              ? "bg-red-100 text-red-700"
                              : req.status === "Removal"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-700"
                          }`}
                      >
                        {req.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{req.givenBy}</td>

                    {/* ✅ Action column */}
                    <td className="px-4 py-3 relative">
                      {/* Pending → show Accept */}
                      {req.actionStatus === "pending" && (
                        <>
                          <button
                            onClick={() => handleAccept(req.id)}
                            className="btn-primary"
                          >
                            Accept
                          </button>
                          {otpVisible === req.id && (
                            <div className="absolute top-full left-0 mt-2 w-38 bg-white shadow-lg border rounded-md p-3 z-50">
                              <input
                                type="text"
                                value={otpValue}
                                onChange={(e) => setOtpValue(e.target.value)}
                                placeholder="Enter OTP"
                                className="w-full border rounded px-2 py-1 text-sm mb-2"
                              />
                              <button
                                onClick={() => handleOtpSubmit(req.id)}
                                className="btn-secondary w-full"
                              >
                                Verify OTP
                              </button>
                            </div>
                          )}
                        </>
                      )}

                      {/* Accepted → show Received */}
                      {req.actionStatus === "accepted" && (
                        <>
                          <button
                            onClick={() => handleReceived(req.id)}
                            className="btn-secondary flex gap-2"
                          >
                            <CheckCheck className="w-5 h-5" />Received
                          </button>
                          {otpVisible === req.id && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border rounded-md p-3 z-50">
                              <input
                                type="text"
                                value={otpValue}
                                onChange={(e) => setOtpValue(e.target.value)}
                                placeholder="Enter OTP"
                                className="w-full border rounded px-2 py-1 text-sm mb-2"
                              />
                              <button
                                onClick={() => handleOtpReceived(req.id)}
                                className="btn-primary w-full"
                              >
                                Verify OTP
                              </button>
                            </div>
                          )}
                        </>
                      )}

                      {/* Received → show Completed */}
                      {req.actionStatus === "received" && (
                        <span className="block w-full text-center px-3 py-2 text-sm rounded-md bg-gray-200 text-gray-700">
                          Completed
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-4 py-6 text-gray-500">
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
