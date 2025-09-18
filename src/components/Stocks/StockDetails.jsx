import { X } from "lucide-react";

const gstRate = 0.18;

const StockDetails = ({ request, onClose }) => {
  if (!request) return null;

  const totalAmount = request.products.reduce(
    (sum, p) => sum + p.qty * p.rate * (1 + gstRate),
    0
  );

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[85%] max-w-6xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-800">
            Order Date – {request.orderDate}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Products Table Header */}
        <div className="grid grid-cols-8 gap-4 px-6 py-3 bg-gray-100 text-sm text-center font-medium text-gray-600 border-b">
          <div>Vendor</div>
          <div>Product</div>
          <div>Unit</div>
          <div>Qty</div>
          <div>Rate</div>
          <div>Amount</div>
          <div>Amount + GST</div>
          <div>Status</div>
        </div>

        {/* Products List */}
        <div className="max-h-[400px] overflow-y-auto">
          {request.products.map((p, idx) => {
            const amount = p.qty * p.rate;
            const gstAmount = amount * (1 + gstRate);
            return (
              <div
                key={idx}
                className="grid grid-cols-8 gap-4 px-6 py-3 text-sm text-gray-900 border-b hover:bg-gray-50 text-center"
              >
                <div>{p.vendor}</div>
                <div>{p.name}</div>
                <div>{p.unit}</div>
                <div>{p.qty}</div>
                <div>₹ {p.rate}</div>
                <div>₹ {amount.toLocaleString()}</div>
                <div>₹ {gstAmount.toLocaleString()}</div>
                <div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      request.status === "Pending at Admin"
                        ? "bg-orange-100 text-orange-700"
                        : request.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : request.status === "In Transit"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
              </div>
            );
          })}

          {request.products.length === 0 && (
            <div className="px-6 py-8 text-center text-gray-500">
              No products found in this request.
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="px-6 py-4 bg-gray-50 flex justify-end items-center gap-6 border-t">
          <div className="text-sm font-medium text-gray-600">Total Amount</div>
          <div className="px-6 py-2 rounded-lg bg-cyan-100 text-cyan-800 font-bold text-lg">
            ₹ {totalAmount.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
