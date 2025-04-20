import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Sidebar } from "../components/layout/Sidebar";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | ITNetGROUP";
  }, []);

  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 w-full">
        <Navbar username="Admin" />
        Dashboard
      </div>
    </div>
  );
};
