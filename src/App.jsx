import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";

import ReportPage from "./pages/report/ReportPage";
import ReviewPage from "./pages/report/ReviewPage";
//import AnalysisPage from "./pages/report/AnalysisPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/review" element={<ReviewPage />} />
        {/* <Route path="/analysis" element={<AnalysisPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;