// import ReportPage from "./pages/report/ReportPage";

// function App() {
  
//    return <ReportPage />;
// }

// export default App
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReportPage from "./pages/report/ReportPage";
import ReviewPage from "./pages/report/ReviewPage";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/report"
          element={<ReportPage />}
        />

        <Route
          path="/review"
          element={<ReviewPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;