import { X } from "lucide-react";
import { useState } from "react";

export default function ExpectedStockDetails({
  expectedStock,
  branchStock,
  manufacturerStock,
  onClose,
}) {
  const tabs = ["Device", "Accessory", "Controller", "Lock", "Sim"];
  const [active, setActive] = useState("Device");

  // Pick whichever stock is available
  const stock =
    expectedStock || branchStock || manufacturerStock || { details: {} };

  const stockTitle = expectedStock
    ? `${expectedStock.name} Bag`
    : branchStock
    ? `${branchStock.name} Branch Stock`
    : manufacturerStock
    ? `${manufacturerStock.name} Manufacturer Stock`
    : "Stock Details";

  const details = stock.details || {};

  const renderTable = () => {
    switch (active) {
      case "Device":
        return details.devices?.length > 0 ? (
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-100 text-gray-600 font-medium border-b">
              <tr>
                <th className="px-6 py-3 text-left">Product Name</th>
                <th className="px-6 py-3 text-left">Product Model</th>
                <th className="px-6 py-3 text-left">Device IMEI</th>
                <th className="px-6 py-3 text-left">Device S.No</th>
              </tr>
            </thead>
            <tbody>
              {details.devices.map((d, idx) => (
                <tr
                  key={idx}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-3">{d.productName}</td>
                  <td className="px-6 py-3">{d.model}</td>
                  <td className="px-6 py-3">{d.imei}</td>
                  <td className="px-6 py-3">{d.serialNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="px-6 py-3 text-gray-500">No devices found.</p>
        );

      case "Accessory":
        return details.accessories?.length > 0 ? (
          <ul className="list-disc pl-6 space-y-1 px-6 py-3 text-sm text-gray-700">
            {details.accessories.map((a, idx) => (
              <li key={idx}>
                <span className="font-medium">{a.productName}</span> ({a.model})
                – Qty: {a.qty}
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-6 py-3 text-gray-500">No accessories found.</p>
        );

      case "Controller":
        return details.controllers?.length > 0 ? (
          <ul className="list-disc pl-6 space-y-1 px-6 py-3 text-sm text-gray-700">
            {details.controllers.map((c, idx) => (
              <li key={idx}>
                <span className="font-medium">{c.productName}</span> ({c.model})
                – Qty: {c.qty}
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-6 py-3 text-gray-500">No controllers found.</p>
        );

      case "Lock":
        return details.locks?.length > 0 ? (
          <ul className="list-disc pl-6 space-y-1 px-6 py-3 text-sm text-gray-700">
            {details.locks.map((l, idx) => (
              <li key={idx}>
                <span className="font-medium">{l.productName}</span> ({l.model})
                – Qty: {l.qty}
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-6 py-3 text-gray-500">No locks found.</p>
        );

      case "Sim":
        return details.sims?.length > 0 ? (
          <ul className="list-disc pl-6 space-y-1 px-6 py-3 text-sm text-gray-700">
            {details.sims.map((s, idx) => (
              <li key={idx}>
                <span className="font-medium">{s.provider}</span> – {s.number}
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-6 py-3 text-gray-500">No SIMs found.</p>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[85%] max-w-6xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800">{stockTitle}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 border-b px-6 bg-gray-50">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`py-3 text-sm font-medium transition-colors ${
                active === tab
                  ? "border-b-2 border-cyan-700 text-cyan-800"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-h-[420px] overflow-y-auto">{renderTable()}</div>
      </div>
    </div>
  );
}
