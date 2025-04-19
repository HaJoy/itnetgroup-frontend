import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { themeChange } from 'theme-change' // Se usara despues
import "./App.css";
import { Dashboard } from "./components/pages/Dashboard";
import { Error } from "./components/pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
