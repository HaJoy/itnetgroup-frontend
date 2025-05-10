import React, { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Sidebar } from "../components/layout/Sidebar";
import { AssetStat } from "../components/ui/AssetStat";
import { Computer, Monitor, Network, Package, Usb } from "lucide-react";

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
            <AssetStat
              icon={Computer}
              iconSize={28}
              title={"Computadores"}
              value={"293"}
              desc={"8% desde el mes pasado"}
            />
            <AssetStat
              icon={Monitor}
              iconSize={28}
              title={"Monitores"}
              value={"293"}
              desc={"8% desde el mes pasado"}
            />
            <AssetStat
              icon={Package}
              iconSize={28}
              title={"Software"}
              value={"800"}
              desc={"15% desde el mes pasado"}
            />
            <AssetStat
              icon={Network}
              iconSize={28}
              title={"Dispositivos de red"}
              value={"50"}
              desc={"10% desde el mes pasado"}
            />
            <AssetStat
              icon={Usb}
              iconSize={28}
              title={"Perifericos"}
              value={"158"}
              desc={"25% desde el mes pasado"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
