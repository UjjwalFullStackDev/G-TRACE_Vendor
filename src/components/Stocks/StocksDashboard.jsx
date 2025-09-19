import { ClipboardList, Package, DollarSign, MoreHorizontal, Trash2, PackagePlus, Clock, PackageMinus, PackageSearch } from 'lucide-react';

const DashboardCard = ({ title, icon: Icon, iconColor, children }) => (
  <div className="rounded-md shadow-sm border border-cyan-200 transition-shadow hover:shadow-md hover:shadow-cyan-200">
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <Icon className={`w-5 h-5 mr-2 ${iconColor}`} />
        <h2 className="text-sm font-semibold text-cyan-800">{title}</h2>
      </div>
      <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
    {/* no padding here, just divide */}
    <div className="bg-light-blue-100 rounded-md divide-y divide-cyan-200">
      {children}
    </div>
  </div>
);


const ItemRow = ({ name, value, unit = "", color = "text-gray-900" }) => (
  <div className="flex justify-between items-center py-2 px-4">
    <div className="flex items-center">
      <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
      <span className="text-sm text-gray-700">{name}</span>
    </div>
    <div className="text-sm font-medium">
      <span className={color}>{value}</span>
      <span className="text-gray-500 ml-1">{unit}</span>
    </div>
  </div>
);


export default function StocksDashboard() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* ---------------- ROW 1 ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 row1">
          {/* Pending Material Request */}
          <div className="bg-white rounded-md shadow-sm p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Pending Material Request
            </h2>
            <DashboardCard title="Request Stock" icon={ClipboardList} iconColor="text-cyan-800 ">
                <ItemRow name="Stock" value="350" unit="Qty" />
                <ItemRow name="Delhi" value="49" unit="Qty" />
                <ItemRow name="Branch" value="200" unit="Qty" />
            </DashboardCard>
          </div>

          {/* Inventory Status (3 cards inside white bg box) */}
          <div className="lg:col-span-3 bg-white rounded-md shadow-sm p-4">
            <h2 className="text-lg font-bold text-center text-gray-800 mb-3">
              Inventory Status
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <DashboardCard title="Expected (New) Stock" icon={PackagePlus} iconColor="text-cyan-800 ">
                <ItemRow name="Installer" value="120" unit="Qty" />
                <ItemRow name="Branches" value="89" unit="Qty" />
                <ItemRow name="Manufacturer" value="400" unit="Qty" />
              </DashboardCard>

              <DashboardCard title="Current Stock" icon={Package} iconColor="text-cyan-800 ">
                <ItemRow name="Stock" value="150" unit="Qty" />
                <ItemRow name="Installer" value="59" unit="Qty" />
                <ItemRow name="Branches" value="200" unit="Qty" />
              </DashboardCard>

              <DashboardCard title="Expected (Removal)" icon={PackageMinus} iconColor="text-cyan-800 ">
                <ItemRow name="Installer" value="120" unit="Qty" />
                <ItemRow name="Branches" value="89" unit="Qty" />
                <ItemRow name="Manufacturer" value="400" unit="Qty" />
              </DashboardCard>
            </div>
          </div>
        </div>

        {/* ---------------- ROW 2 ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 row2">
          {/* Payment Status */}
          <div className="bg-white rounded-md shadow-sm p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Payment Status
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DashboardCard title="Outstanding Bill (to be Paid)" icon={DollarSign} iconColor="text-cyan-800">
                <ItemRow name="Amar" value="₹30,000" />
                <ItemRow name="Dashmesh" value="₹40,000" />
                <ItemRow name="Amar" value="₹6,00,000" />
              </DashboardCard>

              <DashboardCard title="Pending at Admin" icon={Clock} iconColor="text-cyan-800">
                <ItemRow name="Amar" value="₹30,000" />
                <ItemRow name="Dashmesh" value="₹40,000" />
                <ItemRow name="Amar" value="₹6,00,000" />
              </DashboardCard>
            </div>
          </div>

          {/* Material Status */}
          <div className="bg-white rounded-md shadow-sm p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-3">
              Material Status
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <DashboardCard title="Dead Stock" icon={Trash2} iconColor="text-cyan-800">
                <ItemRow name="Gps" value="400" unit="Qty" />
                <ItemRow name="E-lock" value="60" unit="Qty" />
                <ItemRow name="Controller" value="120" unit="Qty" />
              </DashboardCard>

              <DashboardCard title="Expected Products to Order" icon={PackageSearch} iconColor="text-cyan-800">
                <ItemRow name="Gps" value="350" unit="Qty" />
                <ItemRow name="Controller" value="49" unit="Qty" />
                <ItemRow name="Elock" value="200" unit="Qty" />
              </DashboardCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
