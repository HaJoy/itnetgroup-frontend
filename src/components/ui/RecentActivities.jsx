import React from "react";
import { Activity, Clock, User } from "lucide-react";

export const RecentActivities = () => {
  return (
    <div className="flex flex-1 flex-col shadow border-1 border-base-200 rounded-lg p-5 gap-5 md:h-full min-w-fit">
      {/* Titulo */}
      <div className="flex items-start gap-3">
        <Activity size={28} className="text-base-content my-1.5" />
        <div>
          <h1 className="text-2xl font-bold text-base-content">
            Actividad Reciente
          </h1>
          <p className="text-base-content">
            Ultimos movimientos en la base de datos.
          </p>
        </div>
      </div>

      <ul className="w-full md:h-full overflow-auto">
        <li className="flex flex-col gap-3 w-full border-b-2 border-base-300 p-3">
          <span className="text-base-content font-bold">Laptop asignado</span>
          <span className="text-neutral">Macbook 16</span>
          <span className="flex flex-row items-center gap-1 text-neutral text-sm">
            <User size={15} /> Juan Perez (Desarrollo) · <Clock size={15} />{" "}
            Hace 2 horas
          </span>
        </li>
        <li className="flex flex-col gap-3 w-full border-b-2 border-base-300 p-3">
          <span className="text-base-content font-bold">Monitor devuelto</span>
          <span className="text-neutral">Dell UltraSharp 24"</span>
          <span className="flex flex-row items-center gap-1 text-neutral text-sm">
            <User size={15} /> Ana Gómez (Recursos Humanos) · <Clock size={15} />{" "}
            Hace 4 horas
          </span>
        </li>
        <li className="flex flex-col gap-3 w-full border-b-2 border-base-300 p-3">
          <span className="text-base-content font-bold">Software instalado</span>
          <span className="text-neutral">Microsoft Office 365</span>
          <span className="flex flex-row items-center gap-1 text-neutral text-sm">
            <User size={15} /> Carlos Ruiz (Soporte) · <Clock size={15} />{" "}
            Hace 6 horas
          </span>
        </li>
        <li className="flex flex-col gap-3 w-full border-b-2 border-base-300 p-3">
          <span className="text-base-content font-bold">Router configurado</span>
          <span className="text-neutral">Cisco RV340</span>
          <span className="flex flex-row items-center gap-1 text-neutral text-sm">
            <User size={15} /> Laura Martínez (Infraestructura) · <Clock size={15} />{" "}
            Hace 8 horas
          </span>
        </li>
        <li className="flex flex-col gap-3 w-full border-b-2 border-base-300 p-3">
          <span className="text-base-content font-bold">Teclado reemplazado</span>
          <span className="text-neutral">Logitech K380</span>
          <span className="flex flex-row items-center gap-1 text-neutral text-sm">
            <User size={15} /> Pedro Torres (Desarrollo) · <Clock size={15} />{" "}
            Hace 1 día
          </span>
        </li>
        <li className="flex flex-col gap-3 w-full p-3">
          <span className="text-base-content font-bold">Usuario creado</span>
          <span className="text-neutral">María López</span>
          <span className="flex flex-row items-center gap-1 text-neutral text-sm">
            <User size={15} /> Admin · <Clock size={15} /> Hace 2 días
          </span>
        </li>
      </ul>
    </div>
  );
};
