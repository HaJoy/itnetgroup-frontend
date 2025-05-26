import React from "react";
import { Navbar } from "./Navbar";
import { useState } from "react";
import {
  BoxIcon,
  Computer,
  LayoutDashboardIcon,
  Monitor,
  Network,
  Package,
  Usb,
  Users,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ icon: Icon, iconSize = 20, text, isOpen, to }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={
        "btn btn-ghost" +
        (isActive ? " bg-gray-300 " : " ") +
        "justify-start w-full min-w-min not-last:mb-1 hover:bg-primary"
      }
    >
      <Icon size={iconSize} />
      <span className={isOpen ? "ml-2 block" : "hidden"}>{text}</span>
    </Link>
  );
};

export const Sidebar = ({ isOpen, toggleSidebar }) => {

  return (
    <>
      <aside className="text-primary-content">
        <div
          className={
            "md:flex md:flex-col h-screen bg-base-200 shadow-sm transition-width " +
            (isOpen ? "flex flex-col w-screen md:w-64" : "hidden w-16")
          }
        >
          <div
            className={
              "flex items-center h-16 " +
              (isOpen ? "justify-start ml-4.5" : "justify-center")
            }
          >
            <button className="btn btn-ghost" onClick={toggleSidebar}>
              <BoxIcon size={20} />
              <span
                className={
                  "ml-2 text-lg font-bold " + (isOpen ? "block" : "hidden")
                }
              >
                ITNetGROUP
              </span>
            </button>
          </div>
          <nav className={"flex flex-col items-center p-4 space-y-2" + (isOpen ? "p-4" : "")}>
            <SidebarItem
              icon={LayoutDashboardIcon}
              text="Dashboard"
              isOpen={isOpen}
              to="/dashboard"
            />
            <SidebarItem
              icon={BoxIcon}
              text="Activos"
              isOpen={isOpen}
              to={"#"} // Falta pagina para activos en general
            />
            <SidebarItem
              icon={Users}
              text="Usuarios"
              isOpen={isOpen}
              to={"#"} // Falta pagina para usuarios
            />
            <span
              className={
                "self-start ml-3.5 my-3.5 text-gray-400 " +
                (isOpen ? "visible" : "hidden")
              }
            >
              ACTIVOS
            </span>
            <SidebarItem
              icon={Computer}
              text="Computadores"
              isOpen={isOpen}
              to={"/assets/computer"}
            />
            <SidebarItem
              icon={Monitor}
              text="Monitores"
              isOpen={isOpen}
              to={"/assets/monitor"}
            />
            <SidebarItem
              icon={Package}
              text="Software"
              isOpen={isOpen}
              to={"/assets/software"}
            />
            <SidebarItem
              icon={Network}
              text="Dispositivos de red"
              isOpen={isOpen}
              to={"/assets/network"}
            />
            <SidebarItem
              icon={Usb}
              text="Perifericos"
              isOpen={isOpen}
              to={"/assets/peripheral"}
            />
          </nav>
        </div>
      </aside>
    </>
  );
};
