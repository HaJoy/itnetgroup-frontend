import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Sidebar } from "../components/layout/Sidebar";
import { AssetStat } from "../components/ui/AssetStat";
import {
  Computer,
  Monitor,
  Network,
  Package,
  Usb,
  ChartPie,
  Activity,
} from "lucide-react";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | ITNetGROUP";
  }, []);

  const [currentView, setCurrentView] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 w-full bg-white">
        <Navbar username="Admin" toggleSidebar={toggleSidebar} />
        <div className="p-4">
          <div className="my-3 mx-2">
            <h1 className="text-2xl font-bold text-base-content">Dashboard</h1>
            <p className="mt-2 text-base-content">
              Welcome to the ITNetGROUP dashboard. Here you can manage your
              network, devices, and users.
            </p>
          </div>

          {/* Assets stats */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
            <AssetStat
              icon={Computer}
              iconSize={28}
              title={"Computadores"}
              value={"293"}
              valueDesc={8}
            />
            <AssetStat
              icon={Monitor}
              iconSize={28}
              title={"Monitores"}
              value={"293"}
              valueDesc={8}
            />
            <AssetStat
              icon={Package}
              iconSize={28}
              iconColor="text-secondary"
              title={"Software"}
              value={"800"}
              valueDesc={15}
            />
            <AssetStat
              icon={Network}
              iconSize={28}
              iconColor="text-secondary"
              title={"Dispositivos de red"}
              value={"50"}
              valueDesc={0}
            />
            <AssetStat
              icon={Usb}
              iconSize={28}
              iconColor="text-secondary"
              title={"Perifericos"}
              value={"158"}
              valueDesc={-5}
            />
          </section>

          {/* Estadisticas */}
          <section className="flex justify-between">
            <div className="flex shadow border-1 border-base-200 rounded-lg p-5">
              <div className="flex items-center gap-3">
                <ChartPie size={28} className="text-base-content" />
                <h1 className="text-2xl font-bold text-base-content">
                  Analisis de Activos
                </h1>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
