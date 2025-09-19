import { NavLink, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Home,
  PackageCheck,
  ClipboardList,
  PackagePlus,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  LayoutDashboard,
  Boxes,
} from "lucide-react";

const Sidebar = ({ expanded, setExpanded }) => {
  const location = useLocation();

  let menuItems = [];

  if (location.pathname.startsWith("/vendor")) {
    menuItems = [
      { id: "home", icon: Home, label: "Home", path: "/vendors" },
      { id: "addVendor", icon: UserPlus, label: "Add Vendor", path: "/vendors/add-vendor" },
    ];
  } else if (location.pathname.startsWith("/stock")) {
    menuItems = [
      { id: "home", icon: Home, label: "Home", path: "/stocks" },
      { id: "requestedStock", icon: ClipboardList, label: "Requested Stocks", path: "/stocks/requested-stocks" },
      { id: "addStock", icon: ShoppingCart, label: "Add Stock", path: "/stocks/purchase-stocks" },
      { id: "stockExpected", icon: PackagePlus, label: "Stock Expected", path: "/stocks/expected-stocks" },
      { id: "receivedStock", icon: PackageCheck, label: "Received Stock", path: "/stocks/received-stocks" },
      { id: "configuredStock", icon: Boxes, label: "Configured Stock", path: "/stocks/configured-stocks" },
    ];
  } else {
    menuItems = [{ id: "home", icon: Home, label: "Home", path: "/" }];
  }

  return (
    <div
      className={`h-screen ${expanded ? "w-48" : "w-20"}
      bg-gradient-to-b from-cyan-800 to-cyan-900 text-white flex flex-col 
      transition-all duration-500 ease-in-out shadow-2xl relative`}
    >
      {/* Header Section */}
      <div className="p-4 border-b border-cyan-700/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 p-1 bg-cyan-600 rounded-md flex items-center justify-center shadow-lg">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <div className={`transition-all duration-500 ${expanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'} overflow-hidden`}>
            {expanded && (
              <h2 className="text-lg font-bold text-cyan-100 whitespace-nowrap">
                Dashboard
              </h2>
            )}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-2 py-3 space-y-3">
        {menuItems.map(({ id, icon: Icon, path, label }) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              `group flex items-center gap-4 px-2 py-2 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden
              ${isActive 
                ? "bg-cyan-700/60 text-white shadow-lg border-l-4 border-cyan-400" 
                : "hover:bg-cyan-700/40 text-cyan-100 hover:text-white"
              }`
            }
          >
            {/* Icon with subtle animation */}
            <div className="relative">
              <Icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
            </div>
            
            {/* Label with smooth reveal animation */}
            <div className={`transition-all duration-500 overflow-hidden ${
              expanded 
                ? 'opacity-100 translate-x-0 max-w-xs' 
                : 'opacity-0 -translate-x-4 max-w-0'
            }`}>
              {expanded && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {label}
                </span>
              )}
            </div>

            {/* Tooltip for collapsed state */}
            {!expanded && (
              <div className="absolute left-full ml-4 px-3 py-2 bg-cyan-900 text-white text-sm rounded-lg 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                           shadow-xl border border-cyan-700 z-50 whitespace-nowrap">
                {label}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-cyan-900 rotate-45 border-r border-b border-cyan-700"></div>
                </div>
              </div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Toggle Button at Bottom */}
      <div className="p-4 mb-16 border-t border-cyan-700/50 bg-cyan-800/50">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className={`w-full flex items-center rounded-md px-2 py-3 transition-all duration-300 transform hover:scale-105
                   hover:bg-cyan-700/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50
                   group shadow-lg ${expanded ? "justify-start gap-3" : "justify-center"}`}
        >
          <div className="transition-transform duration-300 group-hover:rotate-180">
            {expanded ? (
              <ChevronLeft className="w-5 h-5" />
            ) : (
              <ChevronRight className="w-5 h-5" />
            )}
          </div>
          
          <div className={`transition-all duration-500 overflow-hidden ${
            expanded 
              ? 'opacity-100 translate-x-0 max-w-xs' 
              : 'opacity-0 -translate-x-4 max-w-0'
          }`}>
            {expanded && (
              <span className="text-sm font-medium whitespace-nowrap">
                Collapse
              </span>
            )}
          </div>
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-400/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
    </div>
  );
};

export default Sidebar;