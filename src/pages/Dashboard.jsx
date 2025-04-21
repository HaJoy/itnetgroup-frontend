import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Sidebar } from "../components/layout/Sidebar";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | ITNetGROUP";
  }, []);

  const [currentView, setCurrentView] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 w-full">
        <Navbar username="Admin" toggleSidebar={toggleSidebar} />
        Dashboard
      </div>
    </div>
  );
};
