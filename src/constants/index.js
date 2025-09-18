export const sampleVendors = [
    {
      id: "v1",
      name: "Steel Traders",
      products: [
        { id: "p1", name: "Steel Rod", rate: 120, unit: "Kg", minOrderQty: 50 },
        { id: "p2", name: "Iron Sheet", rate: 250, unit: "Sheet", minOrderQty: 10 },
      ],
    },
    {
      id: "v2",
      name: "Electricals Hub",
      products: [
        { id: "p3", name: "Motor", rate: 5000, unit: "Pcs", minOrderQty: 2 },
        { id: "p4", name: "Solenoid Coil", rate: 1200, unit: "Pcs", minOrderQty: 5 },
      ],
    },
    {
      id: "v3",
      name: "Furniture Hub",
      products: [
        { id: "p5", name: "Wooden Chair", rate: 1500, unit: "Pcs", minOrderQty: 4 },
        { id: "p6", name: "Office Table", rate: 3200, unit: "Pcs", minOrderQty: 2 },
      ],
    },
  ];

  export const sampleRequests = [
  {
    id: 1,
    orderDate: "10 Jan, 2025",
    status: "Pending at Admin",
    products: [
      { vendor: "Steel Traders", name: "Steel Rod", unit: "Kg", qty: 100, rate: 120 },
      { vendor: "Steel Traders", name: "Iron Sheet", unit: "Sheet", qty: 20, rate: 250 },
    ],
  },
  {
    id: 2,
    orderDate: "15 Jan, 2025",
    status: "Approved by Admin",
    products: [
      { vendor: "Electricals Hub", name: "Motor", unit: "Pcs", qty: 5, rate: 5000 },
      { vendor: "Electricals Hub", name: "Solenoid Coil", unit: "Pcs", qty: 10, rate: 1200 },
    ],
  },
  {
    id: 3,
    orderDate: "20 Jan, 2025",
    status: "In Transit",
    products: [
      { vendor: "Furniture Hub", name: "Wooden Chair", unit: "Pcs", qty: 8, rate: 1500 },
      { vendor: "Furniture Hub", name: "Office Table", unit: "Pcs", qty: 3, rate: 3200 },
    ],
  },
  {
    id: 4,
    orderDate: "25 Jan, 2025",
    status: "Delivered",
    products: [
      { vendor: "Steel Traders", name: "Iron Sheet", unit: "Sheet", qty: 15, rate: 250 },
    ],
  },
  {
    id: 5,
    orderDate: "30 Jan, 2025",
    status: "Pending at Admin",
    products: [
      { vendor: "Electricals Hub", name: "Solenoid Coil", unit: "Pcs", qty: 6, rate: 1200 },
    ],
  },
];

export const stockSummary = [
  {
    id: 1,
    name: "Pooja",
    totalProducts: 5,
    units: 40,
    givenDate: "2 Jan, 2025",
    acceptedDate: "10 Jan, 2025",
    details: {
      devices: [
        {
          productName: "GPS",
          model: "Pointer",
          imei: "860260051813495",
          serialNo: "28602813995",
        },
        {
          productName: "GPS Chines",
          model: "V5",
          imei: "860260051813495",
          serialNo: "28602813995",
        },
        {
          productName: "GPS RTPL",
          model: "RTPL",
          imei: "860260051813495",
          serialNo: "28602813995",
        },
      ],
      accessories: [
        { productName: "Cable", model: "USB-A", qty: 10 },
        { productName: "Charger", model: "12V", qty: 5 },
      ],
      controllers: [
        { productName: "Controller A", model: "C-200", qty: 2 },
      ],
      locks: [{ productName: "Smart Lock", model: "L-20", qty: 1 }],
      sims: [{ provider: "Airtel", number: "9876543210" }],
    },
  },
  {
    id: 2,
    name: "Amar",
    totalProducts: 15,
    units: 30,
    givenDate: "2 Jan, 2025",
    acceptedDate: "10 Jan, 2025",
    details: {
      devices: [
        {
          productName: "GPS RTPL",
          model: "RTPL",
          imei: "860260051813495",
          serialNo: "28602813995",
        },
      ],
      accessories: [],
      controllers: [],
      locks: [],
      sims: [],
    },
  },
];


export const branchStockSummary = [
  {
    id: 1,
    branch: "Delhi Branch",
    totalProducts: 12,
    units: 50,
    details: {
      devices: [
        {
          productName: "GPS",
          model: "Pointer",
          imei: "860260051813495",
          serialNo: "28602813995",
        },
        {
          productName: "GPS RTPL",
          model: "RTPL",
          imei: "860260051813496",
          serialNo: "28602813996",
        },
      ],
      accessories: [
        { productName: "Cable", model: "USB-C", qty: 8 },
        { productName: "Charger", model: "24V", qty: 4 },
      ],
      controllers: [{ productName: "Controller B", model: "C-300", qty: 3 }],
      locks: [{ productName: "Heavy Lock", model: "L-50", qty: 2 }],
      sims: [{ provider: "Jio", number: "9123456789" }],
    },
  },
  {
    id: 2,
    branch: "Mumbai Branch",
    totalProducts: 20,
    units: 70,
    details: {
      devices: [
        {
          productName: "GPS Chines",
          model: "V5",
          imei: "860260051813497",
          serialNo: "28602813997",
        },
      ],
      accessories: [{ productName: "Antenna", model: "AN-10", qty: 6 }],
      controllers: [],
      locks: [],
      sims: [{ provider: "Vodafone", number: "9988776655" }],
    },
  },
];


export const manufacturerStockSummary = [
  {
    id: 1,
    manufacturer: "SteelWorks Ltd",
    totalProducts: 25,
    units: 100,
    status: "Given to vendor",
    details: {
      devices: [
        {
          productName: "GPS Pro",
          model: "GX-1",
          imei: "860260051813498",
          serialNo: "28602813998",
        },
        {
          productName: "GPS Pro",
          model: "GX-2",
          imei: "860260051813499",
          serialNo: "28602813999",
        },
      ],
      accessories: [
        { productName: "Adapter", model: "AD-12", qty: 10 },
        { productName: "Cable", model: "Type-C", qty: 15 },
      ],
      controllers: [{ productName: "Controller X", model: "CX-500", qty: 5 }],
      locks: [{ productName: "Digital Lock", model: "DL-10", qty: 3 }],
      sims: [{ provider: "BSNL", number: "9011223344" }],
    },
  },
  {
    id: 2,
    manufacturer: "TechnoMakers Inc",
    totalProducts: 18,
    units: 60,
    status: "Given to vendor",
    details: {
      devices: [
        {
          productName: "GPS Lite",
          model: "L-100",
          imei: "860260051813500",
          serialNo: "28602814000",
        },
      ],
      accessories: [{ productName: "Dock", model: "DK-1", qty: 7 }],
      controllers: [],
      locks: [{ productName: "Pad Lock", model: "PL-22", qty: 2 }],
      sims: [{ provider: "Idea", number: "9876501234" }],
    },
  },
];


export const receivedStockSummary = [
  {
    id: 1,
    productName: "RDM AIS140",
    itgcId: "1260X86028133355",
    imei: "860260051813495",
    serialNo: "28602813995",
    status: "Repair",
    givenBy: "RND (Mayank)",
    actionStatus: "accepted",
  },
  {
    id: 2,
    productName: "Wifi Camera",
    itgcId: "1260X86028133355",
    imei: "860260051813635",
    serialNo: "28602813995",
    status: "Repair",
    givenBy: "Branches (Ahmedabad)",
    actionStatus: "pending",
  },
  {
    id: 3,
    productName: "RDM AIS140",
    itgcId: "1260X8602813343",
    imei: "860260051814295",
    serialNo: "28602813995",
    status: "Dead",
    givenBy: "Installer (Amar)",
    actionStatus: "pending",
  },
  {
    id: 4,
    productName: "Wifi Camera",
    itgcId: "1260X8602813636",
    imei: "860260051813963",
    serialNo: "28602813995",
    status: "Repair",
    givenBy: "Dispatcher (Ankit)",
    actionStatus: "pending",
  },
  {
    id: 5,
    productName: "RDM AIS140",
    itgcId: "1260X8602813266",
    imei: "860260051813955",
    serialNo: "28602813995",
    status: "Dead",
    givenBy: "RND (Mayank)",
    actionStatus: "pending",
  },
  {
    id: 6,
    productName: "RDM AIS140",
    itgcId: "1260X8602813967",
    imei: "860260051813985",
    serialNo: "28602813995",
    status: "Dead",
    givenBy: "Branches (Ahmedabad)",
    actionStatus: "pending",
  },
  {
    id: 7,
    productName: "Wifi Camera",
    itgcId: "1260X8602813645",
    imei: "860260051813225",
    serialNo: "8602813995",
    status: "Dead",
    givenBy: "Installer (Amar)",
    actionStatus: "pending",
  },
  {
    id: 8,
    productName: "RDM AIS140",
    itgcId: "1260X8602813585",
    imei: "860260051813325",
    serialNo: "28602813995",
    status: "Removal",
    givenBy: "Dispatcher (Ankit)",
    actionStatus: "pending",
  },
  {
    id: 9,
    productName: "RDM AIS140",
    itgcId: "1260X8602813355",
    imei: "0001093",
    serialNo: "28602813995",
    status: "Removal",
    givenBy: "Branches (Ahmedabad)",
    actionStatus: "pending",
  },
];


export const configuredStockSummery = [
    {
      id: 1,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Branches",
      selectName: "Kolkata"
    },
    {
      id: 2,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "3268388",
      action: "Software",
      selectName: "Ahmedabad"
    },
    {
      id: 3,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Installer",
      selectName: "Mumbai"
    },
    {
      id: 4,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Installer",
      selectName: "Select"
    },
    {
      id: 5,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Select",
      selectName: "Select"
    },
    {
      id: 6,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Select",
      selectName: "Select"
    },
    {
      id: 7,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Select",
      selectName: "Select"
    },
    {
      id: 8,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Select",
      selectName: "Select"
    },
    {
      id: 9,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Select",
      selectName: "Select"
    },
    {
      id: 10,
      productName: "RDM AIS140",
      itgcId: "1260X86028I3335",
      deviceIMEI: "860260051813495",
      usedSim: "9182235",
      action: "Select",
      selectName: "Select"
    }
  ]