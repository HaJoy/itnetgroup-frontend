import React from "react";
import { useState } from "react";
import { Bell, Settings, LogOutIcon, BoxIcon } from "lucide-react";
import { Searchbar } from "../ui/Searchbar";

export const Navbar = ({ username, toggleSidebar }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <header className="navbar bg-base-200 shadow-sm flex justify-between text-primary-content">
      <div className="flex items-center md:w-max">
        {/* Boton para abrir el sidebar en celulares */}
        <button className="btn btn-ghost md:hidden" onClick={toggleSidebar}>
          <BoxIcon size={20} />
        </button>
        <Searchbar placeholder={"Buscar activos..."} searchOpen={searchOpen} toggleSearch={toggleSearch} />
      </div>

      <div className="flex flex-1 gap-2 justify-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell size={20} />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        <div className={"dropdown dropdown-end " + (searchOpen ? "hidden" : "")}>
          <div tabIndex={0} role="button" className="btn rounded-field px-2 ">
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-full">
                <span className="text-xs">
                  {username.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            {username}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a>
                <Settings size={20} />
                Configuración
              </a>
            </li>
            <li>
              <a>
                <LogOutIcon size={20} />
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
