import { Package, TrendingUp, DollarSign, AlertCircle, MoreHorizontal } from 'lucide-react';

const DashboardCard = ({ title, icon: Icon, iconColor, children }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <Icon className={`w-5 h-5 mr-2 ${iconColor}`} />
        <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
      </div>
      <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
    </div>
    <div className="p-4">
      {children}
    </div>
  </div>
);

const ItemRow = ({ name, value, unit = "", color = "text-gray-900" }) => (
  <div className="flex justify-between items-center py-2">
    <div className="flex items-center">
      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
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
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pending Material Request */}
            <DashboardCard
            //   title="Pending Material Request" 
              title="Request" 
              icon={Package} 
              iconColor="text-blue-500"
            >
              <div className="space-y-1">
                <ItemRow name="Stock" value="350" unit="Qty" />
                <ItemRow name="Delhi" value="49" unit="Qty" />
                <ItemRow name="Branch" value="200" unit="Qty" />
              </div>
            </DashboardCard>

            {/* Expected (New) Stock */}
            <DashboardCard 
              title="Expected (New) Stock" 
              icon={TrendingUp} 
              iconColor="text-green-500"
            >
              <div className="space-y-1">
                <ItemRow name="Installer" value="120" unit="Qty" />
                <ItemRow name="Branches" value="89" unit="Qty" />
                <ItemRow name="Manufacturer" value="400" unit="Qty" />
              </div>
            </DashboardCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Stock */}
            <DashboardCard 
              title="Current Stock" 
              icon={Package} 
              iconColor="text-purple-500"
            >
              <div className="space-y-1">
                <ItemRow name="Stock" value="150" unit="Qty" />
                <ItemRow name="Installer" value="59" unit="Qty" />
                <ItemRow name="Branches" value="200" unit="Qty" />
              </div>
            </DashboardCard>

            {/* Expected (Removal) */}
            <DashboardCard 
              title="Expected (Removal)" 
              icon={TrendingUp} 
              iconColor="text-orange-500"
            >
              <div className="space-y-1">
                <ItemRow name="Installer" value="120" unit="Qty" />
                <ItemRow name="Branches" value="89" unit="Qty" />
                <ItemRow name="Manufacturer" value="400" unit="Qty" />
              </div>
            </DashboardCard>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Outstanding Bill (to be Paid) */}
            <DashboardCard 
              title="Outstanding Bill (to be Paid)" 
              icon={DollarSign} 
              iconColor="text-red-500"
            >
              <div className="space-y-1">
                <ItemRow name="Amar" value="₹30,000" />
                <ItemRow name="Dashmesh" value="₹40,000" />
                <ItemRow name="Amar" value="₹6,00,000" />
              </div>
            </DashboardCard>

            {/* Pending at Admin */}
            <DashboardCard 
              title="Pending at Admin" 
              icon={AlertCircle} 
              iconColor="text-yellow-500"
            >
              <div className="space-y-1">
                <ItemRow name="Amar" value="₹30,000" />
                <ItemRow name="Dashmesh" value="₹40,000" />
                <ItemRow name="Amar" value="₹6,00,000" />
              </div>
            </DashboardCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dead Stock */}
            <DashboardCard 
              title="Dead Stock" 
              icon={AlertCircle} 
              iconColor="text-gray-500"
            >
              <div className="space-y-1">
                <ItemRow name="Gps" value="400" unit="Qty" />
                <ItemRow name="E-lock" value="60" unit="Qty" />
                <ItemRow name="Controller" value="120" unit="Qty" />
              </div>
            </DashboardCard>

            {/* All Expected Products to Order */}
            <DashboardCard 
              title="All Expected Products to Order" 
              icon={Package} 
              iconColor="text-blue-600"
            >
              <div className="space-y-1">
                <ItemRow name="Gps" value="350" unit="Qty" />
                <ItemRow name="Controller" value="49" unit="Qty" />
                <ItemRow name="Elock" value="200" unit="Qty" />
              </div>
            </DashboardCard>
          </div>
    
        </div>
      </div>
    </div>
  );
}