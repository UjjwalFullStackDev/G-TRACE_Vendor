import { NavLink, useLocation } from "react-router-dom";
import { ShoppingCart, Package, Users, Home, PackageCheck, Package2, ClipboardList, PackagePlus } from "lucide-react";

const Sidebar = () => {

  const location = useLocation();

  // Decide which menu to show based on route
  let menuItems = [];

  if (location.pathname.startsWith("/vendor")) {
    menuItems = [
      { id: "home", icon: Home, label: "Home", path: "/vendors" },
      { id: "purchase", icon: ShoppingCart, label: "Purchase Entry", path: "/vendor/purchase" },
      { id: "requested", icon: Package, label: "Requested Stock", path: "/vendor/requested" },
      { id: "vendors", icon: Users, label: "Vendors", path: "/vendor/vendors" },
    ];
  } else if (location.pathname.startsWith("/stock")) {
    menuItems = [
      { id: "home", icon: Home, label: "Home", path: "/stocks" },
      { id: "requestedStock", icon: ClipboardList, label: "Requested Stocks", path: "/stocks/requested-stocks" },
      { id: "addStock", icon: ShoppingCart, label: "Add Stock", path: "/stocks/purchase-stocks" },
      { id: "stockExpected", icon: PackagePlus, label: "Stock Expected", path: "/stocks/expected-stocks" },
      { id: "receivedStock", icon: PackageCheck, label: "Stock Received", path: "/stocks/received-stocks" },
      { id: "configuredStock", icon: Package2, label: "Stock Configured", path: "/stocks/configured-stocks" },
    ];
  } else {
    // Default / home sidebar
    menuItems = [
      { id: "home", icon: Home, label: "Home", path: "/" },
    ];
  }

  return (
    <div className="h-screen w-20 bg-cyan-800 text-white flex flex-col items-center py-4">
      {menuItems.map(({ id, icon: Icon, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            `flex flex-col items-center mb-6 px-2 py-2 rounded-lg transition-colors ${isActive ? "bg-cyan-900" : "hover:bg-cyan-800"
            }`
          }
        >

          <Icon className="w-6 h-6 mb-1" />
        </NavLink>
      )
      )}
    </div>
  );
};

export default Sidebar;
