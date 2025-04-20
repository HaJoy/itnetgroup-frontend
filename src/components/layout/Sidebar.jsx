import React from "react";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { BoxIcon } from "lucide-react";

export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);

  };

  return (
    <aside>
      <div className={"flex flex-col h-screen bg-base-100 shadow-sm transition-width " + (isOpen ? "w-64" : "w-16")}>
        <div className="flex items-center justify-center h-16 border-b">
          <button className="btn btn-ghost" onClick={toggleSidebar}>
            <BoxIcon size={20} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a href="#" className="btn btn-ghost">
            Dashboard
          </a>
          <a href="#" className="btn btn-ghost">
            Activos
          </a>
          <a href="#" className="btn btn-ghost">
            Reportes
          </a>
          <a href="#" className="btn btn-ghost">
            Configuración
          </a>
        </nav>
      </div>
    </aside>
  );
};
