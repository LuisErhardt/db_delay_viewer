import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CSVTable from "./components/CSVTable";
import LandingPage from "./components/LandingPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:filename" element={<CSVTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
