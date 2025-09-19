import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VendorManagementSystem from "./pages/VendorManagementSystem/VendorManagementSystem";
import VendorRoutes from "./pages/VendorManagementSystem/VendorRoutes";
import ErrorPage from "./pages/ErrorPage";
import StockrManagementSystem from "./pages/StockManagementSystem/StockManagementSystem";
import StockRoutes from "./pages/StockManagementSystem/StockRoutes";
import SalesManagementSystes from "./pages/SalesManagementSystem/SalesManagementSystem";
import SalesLogin from "./components/Sales/SalesLogin";
import CceLogin from "./components/Cce/CceLogin";
import CceManagementSystem from "./pages/CceManagementSystem/CceManagementSystem";
import SalesRoutes from "./pages/SalesManagementSystem/SalesRoutes";
import CceRoutes from "./pages/CceManagementSystem/CceRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/vendors",
      element: <VendorManagementSystem />,
      errorElement: <ErrorPage />,
      children: VendorRoutes,
    },
    {
      path: "/stocks",
      element: <StockrManagementSystem />,
      errorElement: <ErrorPage />,
      children: StockRoutes,
    },
    {
      path: "/sales",
      element: <SalesManagementSystes />,
      children: SalesRoutes,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SalesLogin />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cce-login",
      element: <CceLogin />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/cce",
      element: <CceManagementSystem />,
      children: CceRoutes,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
