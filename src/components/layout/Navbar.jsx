import React from "react";
import { useState } from "react";
import { Bell, Settings, LogOutIcon, BoxIcon } from "lucide-react";
import { Searchbar } from "../ui/Searchbar";
import { useUser } from "../../context/userCtx";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ toggleSidebar }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleLogout = () => {
    // Limpiar el context
    setUser(null);
    console.log('Info de usuario limpiada con exito');
    navigate('/'); // Redireccionar a la pagina de login
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

        {/* Boton de notificaciones */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell size={20} />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* Dropdown de opciones de cuenta */}
        <div className={"dropdown dropdown-end " + (searchOpen ? "hidden" : "")}>
          <div tabIndex={0} role="button" className="btn rounded-field px-2 ">
            {/* Si por algun error no hay un usuario logeado, no se renderizara
            el dropdown, tambien evita un intento de acceso a null al cerrar sesion */}
            {user?.userName && (
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-8 rounded-full">
                  <span className="text-xs">
                    {user.userName.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
            )}
            {user?.userName}
          </div>

          {/* Lista que aparece al pulsar el dropdown */}
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button className="btn btn-ghost justify-start font-normal">
                <Settings size={20} />
                Configuración
              </button>
            </li>
            <li>
              <button className="btn btn-ghost justify-start font-normal" onClick={handleLogout}>
                <LogOutIcon size={20} />
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
