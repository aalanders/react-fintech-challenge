import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Fund from "./components/Fund/Fund";
import Company from "./components/Company/Company";
import Dashboard from "./components/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/fund" />} />
        <Route element={<Company />} path="/fund/:fundId/company/:companyId" />
        <Route element={<Fund />} path="/fund/:fundId" />
        <Route element={<Dashboard />} path="/fund" />
      </Routes>
    </div>
  );
}

export default App;
