import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { themeChange } from 'theme-change' // Se usara despues
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { Error } from "./pages/Error";
import { Login } from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
