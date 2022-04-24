import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CodingTest from "./components/codingTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:url" element={<Home />} />
        <Route path="/test" element={<CodingTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
