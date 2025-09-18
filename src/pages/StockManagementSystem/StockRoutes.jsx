import { useState } from "react";
import PurchaseEntry from "../../components/Stocks/PurchaseEntry";
import RequestedStock from "../../components/Stocks/RequestedStock";
import StockDetails from "../../components/Stocks/StockDetails";
import ExpectedStock from "../../components/Stocks/ExpectedStock";
import { branchStockSummary, configuredStockSummery, manufacturerStockSummary, receivedStockSummary, sampleRequests, sampleVendors, stockSummary } from "../../constants";
import ExpectedStockDetails from "../../components/Stocks/ExpectedStockDetails";
import ExpectedStockBranch from "../../components/Stocks/ExpectedStockBranch";
import ExpectedStockManufacture from "../../components/Stocks/ExpectedStockManufacture";
import ReceivedStock from "../../components/Stocks/ReceivedStock";
import ConfiguredStock from "../../components/Stocks/ConfiguredStock";

function StockProvider({ children }) {

  const [vendors, setVendors] = useState(sampleVendors);
  const [requests, setRequests] = useState(sampleRequests);
  const [expectedStocks, setExpectedStocks] = useState(stockSummary);
  const [branchStocks, setBranchStocks] = useState(branchStockSummary);
  const [manufacturerStocks, setManufacturerStocks] = useState(manufacturerStockSummary);
  const [receivedStocks, setReceivedStocks] = useState(receivedStockSummary);
  const [configuredStocks, setConfiguredStocks] = useState(configuredStockSummery);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

 const addRequest = (requestData) => {
    const newRequest = {
      id: requests.length + 1,
      orderDate: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      status: "Pending at Admin",
      products: requestData.products,
    };
    setRequests((prev) => [...prev, newRequest]);
  };

  const handleViewRequestsStock = (requestId) => {
    setSelectedRequestId(requestId);
  };

  const handleViewExpectedStock = (expectedStocksRequestId) => {
    setSelectedRequestId(expectedStocksRequestId);
  };

  const handleClose = () => {
    setSelectedRequestId(null);
  };

  return (
    <>
      {children({
        vendors,
        setVendors,
        requests,
        setRequests,
        expectedStocks,
        setExpectedStocks,
        branchStocks,
        setBranchStocks,
        manufacturerStocks,
        setManufacturerStocks,
        receivedStocks,
        setReceivedStocks,
        configuredStocks,
        setConfiguredStocks,
        showAddProductModal,
        setShowAddProductModal,
        handleViewRequestsStock,
        handleViewExpectedStock,
        handleClose,      
        addRequest,
        isLoading,
        isError,
        selectedRequestId,
      })}
    </>
  );
}


const StockRoutes = [
  {
    index: true,
    element: (
      <StockProvider>
        {({ requests, handleViewRequestsStock, selectedRequestId, handleClose }) => (
          <>
            <RequestedStock requests={requests} handleViewRequestsStock={handleViewRequestsStock} />
            {selectedRequestId && (
              <StockDetails
                request={requests.find((r) => r.id === selectedRequestId)}
                onClose={handleClose}
              />
            )}
          </>
        )}
      </StockProvider>
    ),
  },
  {
    path: "purchase",
    element: (
      <StockProvider>
        {({ vendors, isLoading, isError, addRequest }) => (
          <PurchaseEntry
            vendors={vendors}
            isLoading={isLoading}
            isError={isError}
            addRequest={addRequest}
          />
        )}
      </StockProvider>
    ),
  },
  {
    path: "expected",
    element: (
      <StockProvider>
        {({ expectedStocks, handleViewExpectedStock, selectedRequestId, handleClose }) => (
          <>
          <ExpectedStock expectedStocks={expectedStocks} handleViewExpectedStock={handleViewExpectedStock} />
          {selectedRequestId && (
            <ExpectedStockDetails 
              expectedStock={expectedStocks.find((s) => s.id === selectedRequestId)}
              onClose={handleClose}
          />)}
          </>
        )}
      </StockProvider>
    ),
  },
  {
    path: "expected/branches",
    element: (
      <StockProvider>
        {({ branchStocks, handleViewExpectedStock, selectedRequestId, handleClose }) => (
          <>
          <ExpectedStockBranch branchStocks={branchStocks} handleViewExpectedStock={handleViewExpectedStock} />
          {selectedRequestId && (
            <ExpectedStockDetails 
              branchStock={branchStocks.find((b) => b.id === selectedRequestId)}
              onClose={handleClose}
          />)}
          </>
        )}
      </StockProvider>
    ),
  },
  {
    path: "expected/manufacturer",
    element: (
      <StockProvider>
        {({ manufacturerStocks, handleViewExpectedStock, selectedRequestId, handleClose }) => (
          <>
          <ExpectedStockManufacture manufacturerStocks={manufacturerStocks} handleViewExpectedStock={handleViewExpectedStock} />
          {selectedRequestId && (
            <ExpectedStockDetails 
              manufacturerStock={manufacturerStocks.find((m) => m.id === selectedRequestId)}
              onClose={handleClose}
          />)}
          </>
        )}
      </StockProvider>
    ),
  },
  {
    path: "received-stocks",
    element: (
      <StockProvider>
        {({ receivedStocks }) => (
          <>
          <ReceivedStock receivedStocks={receivedStocks} />
          </>
        )}
      </StockProvider>
    ),
  },
  {
    path: "configured-stocks",
    element: (
      <StockProvider>
        {({ configuredStocks, setConfiguredStocks }) => (
          <>
          <ConfiguredStock configuredStocks={configuredStocks} setConfiguredStocks={setConfiguredStocks}/>
          </>
        )}
      </StockProvider>
    ),
  },
];

export default StockRoutes;
