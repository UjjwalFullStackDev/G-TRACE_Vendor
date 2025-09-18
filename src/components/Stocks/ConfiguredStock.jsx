import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";

export default function ConfiguredStock({ configuredStocks, setConfiguredStocks }) {

  const actionOptions = ["Select", "Branches", "Software", "Installer"];
  const locationOptions = ["Select", "Kolkata", "Ahmedabad", "Mumbai", "Delhi", "Chennai", "Bangalore"];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const [openAction, setOpenAction] = useState(false);
  const [openName, setOpenName] = useState(false);

  const filteredRequests = useMemo(() => {
    let data = [...configuredStocks];
    if (searchTerm.trim() !== "") {
      data = data.filter((req) =>
        [req.productName, req.itgcId, req.deviceIMEI, req.usedSim, req.action, req.selectName]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
    return data;
  }, [configuredStocks, searchTerm]);

  const handleSelectAll = () => {
    if (selectedItems.length === filteredRequests.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredRequests.map(item => item.id));
    }
  };

  const handleItemSelect = (id) => {
    setSelectedItems(prev =>
      prev.includes(id)
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleActionChange = (id, newAction) => {
    setConfiguredStocks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, action: newAction } : item
      )
    );
  };

  const handleLocationChange = (id, newLocation) => {
    setConfiguredStocks(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selectName: newLocation } : item
      )
    );
  };

  const getActionButtonClass = (action) => {
    switch (action) {
      case "Branches":
        return "text-orange-400 border-orange-400";
      case "Software":
        return "text-cyan-800 border-cyan-800";
      case "Installer":
        return "text-red-600 border-red-600";
      default:
        return "text-gray-700 border-gray-200";
    }
  };

  const handleSubmit = (id) => {
    const item = filteredRequests.find(item => item.id === id);
    console.log("Submitting:", item);
    // Handle submit logic here
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Configured Stock</h1>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header with Select All and Submit buttons */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={handleSelectAll}
              className="btn-secondary"
            >
              Select All
            </button>
          </div>
          <div className="flex items-center gap-2">
            {/* Dropdown 1 - Action */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setOpenAction(!openAction)}
                className="btn-secondary flex gap-1"
              >
                Select action
                <ChevronDown className="ml-2 h-4 w-4 mt-1" />
              </button>

              {openAction && (
                <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dropdown 2 - Name */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setOpenName(!openName)}
                className="btn-secondary flex gap-1"
              >
                Select Name
                <ChevronDown className="ml-2 mt-1 h-4 w-4" />
              </button>

              {openName && (
                <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">John</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Alice</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Michael</li>
                  </ul>
                </div>
              )}
            </div>
            <button
              className="btn-secondary mx-2"
            >
              Submit
            </button>

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
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === filteredRequests.length && filteredRequests.length > 0}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Itgc Id
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Device IMEI
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Used Sim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Select Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredRequests.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleItemSelect(item.id)}
                      className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.productName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.itgcId}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.deviceIMEI}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {item.usedSim}
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <select
                        value={item.action}
                        onChange={(e) => handleActionChange(item.id, e.target.value)}
                        className={`appearance-none px-3 py-2 text-sm font-semibold rounded-md border ${getActionButtonClass(item.action)} cursor-pointer min-w-[100px]`}
                      >
                        {actionOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <select
                        value={item.selectName}
                        onChange={(e) => handleLocationChange(item.id, e.target.value)}
                        className="appearance-none px-3 py-2 text-sm font-semibold rounded-md border border-gray-300 bg-white text-gray-700 cursor-pointer min-w-[120px]"
                      >
                        {locationOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-400" />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleSubmit(item.id)}
                      className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors text-sm font-medium"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}