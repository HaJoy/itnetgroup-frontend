import React from "react";
import { Bell, Settings, LogOutIcon} from "lucide-react";
import { Searchbar } from "../ui/Searchbar";

export const Navbar = ({ username }) => {
  

  return (
    <header className="navbar bg-base-100 shadow-sm flex justify-between">
      
      <Searchbar placeholder={"Buscar activos..."} />

      <div className="flex flex-1 gap-2 justify-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell size={20} />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-base-200 px-2 border-0 gap-3 active:bg-base-200 hover:shadow-none"
          >
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
