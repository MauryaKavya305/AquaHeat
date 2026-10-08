import { createContext, useContext, useState } from "react";

const ReportContext = createContext();

export const ReportProvider = ({ children }) => {

  const [reportData, setReportData] = useState({
    media: [],
    category: "",
    location: null,
    description: "",
  });

  return (
    <ReportContext.Provider
      value={{
        reportData,
        setReportData,
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export const useReport = () => {
  return useContext(ReportContext);
};