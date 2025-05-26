import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const PageDisplay = ({ children }) => {
  // State variables
  const [isOpen, setIsOpen] = useState(false);

  // Funcion para cambiar el estado del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 w-full bg-white">
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Contenido */}
        <div className="p-4  h-[calc(100vh-4rem)] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
