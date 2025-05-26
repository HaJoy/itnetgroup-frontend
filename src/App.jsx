import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { themeChange } from 'theme-change' // Se usara despues
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Error } from "./pages/Error";
import { Login } from "./pages/Login";
import { UserProvider } from "./context/userCtx";
import { AssetsPage } from "./pages/AssetsPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assets/:assetType" element={<AssetsPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
