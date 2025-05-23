import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Sidebar } from "../components/layout/Sidebar";
import { AssetStat } from "../components/ui/AssetStat";
import { Computer, Monitor, Package, Usb, User } from "lucide-react";
import { getDevices } from "../api/assetService";
import { AssetChart } from "../components/ui/AssetChart";
import { RecentActivities } from "../components/ui/RecentActivities";
import { getComputers, getMonitors, getNumUsers, getPerfs, getSoftware } from "../utils/assetsFuntions";

export const Dashboard = () => {
  // State variables
  const [currentView, setCurrentView] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cambiar el titulo de la pestaña y cargar la informacion
  useEffect(() => {
    document.title = "Dashboard | ITNetGROUP";

    const fetchDevices = async () => {
      try {
        const data = await getDevices();
        setDevices(data);
      } catch (error) {
        console.error("Error fetching devices:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDevices();
  }, []);

  // Funcion para cambiar el estado del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 w-full bg-white">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="p-4  h-[calc(100vh-4rem)] overflow-auto">
          <div className="my-3 mx-2">
            <h1 className="text-2xl font-bold text-base-content">Dashboard</h1>
            <p className="mt-2 text-base-content">
              Welcome to the ITNetGROUP dashboard. Here you can manage your
              network, devices, and users.
            </p>
          </div>

          {/* Pantalla de carga */}
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-96">
              <span className="loading loading-infinity loading-xl text-base-content"></span>
              <span className="ml-4 text-lg text-base-content">
                Cargando datos...
              </span>
            </div>
          ) : (
            <>
              {/* Assets stats */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
                <AssetStat
                  icon={Computer}
                  title={"Computadores"}
                  iconColor="text-primary"
                  iconSize={20}
                  value={`${getComputers(devices)}`}
                  valueDesc={20}
                />
                <AssetStat
                  icon={Monitor}
                  iconSize={28}
                  title={"Monitores"}
                  value={`${getMonitors(devices)}`}
                  valueDesc={8}
                />
                <AssetStat
                  icon={Package}
                  iconSize={28}
                  iconColor="text-secondary"
                  title={"Software"}
                  value={`${getSoftware(devices)}`}
                  valueDesc={15}
                />
                <AssetStat
                  icon={User}
                  iconSize={28}
                  iconColor="text-secondary"
                  title={"Usuarios"}
                  value={`${getNumUsers(devices)}`} // TODO: Cambiar esto para contar en una tabla usuarios en la db
                  valueDesc={0}
                />
                <AssetStat
                  icon={Usb}
                  iconSize={28}
                  iconColor="text-secondary"
                  title={"Perifericos"}
                  value={`${getPerfs(devices)}`}
                  valueDesc={-5}
                />
              </section>

              {/* Estadisticas */}
              <section className="flex flex-col lg:flex-row justify-between gap-3 md:h-[528px]">
                <AssetChart dataDevices={devices} />
                <RecentActivities />
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
