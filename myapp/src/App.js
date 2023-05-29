import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import LoginPage from "./pages/loginPage";
import AdminLogin from "./pages/adminLogin";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;