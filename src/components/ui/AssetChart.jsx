import React, { useState, useEffect } from "react";
import { ChartPie } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Computadores", value: 293 },
  { name: "Monitores", value: 293 },
  { name: "Software", value: 800 },
  { name: "Red", value: 50 },
  { name: "Perifericos", value: 158 },
];

const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#a78bfa", "#f87171"];

// Componente de Tabs reutilizable
const ChartTabs = ({ tabs, activeTab, setActiveTab }) => (
  <div className="tabs tabs-lift max-w-max">
    {tabs.map((tab, idx) => (
      <React.Fragment key={tab.label}>
        <input
          type="radio"
          name="dashboard_graphs"
          className="tab checked:text-base-content p-2! md:p-[var(--tab-paddings)]!"
          aria-label={tab.label}
          checked={activeTab === idx}
          onChange={() => setActiveTab(idx)}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 max-h-fit">
          {activeTab === idx && tab.content}
        </div>
      </React.Fragment>
    ))}
  </div>
);

export const AssetChart = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pieRadius, setPieRadius] = useState(90);
  const [labelMobile, setLabelMobile] = useState(false);

  // Ajustar el tamaño del grafico segun el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPieRadius(50); // 50 para móviles, 90 para desktop
      } else if (window.innerWidth < 748) {
        setPieRadius(60); // 70 para pantallas pequeñas
      }
      
      setLabelMobile(window.innerWidth < 748); // true para móviles, false para desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabs = [
    {
      label: "Por tipo",
      content: (
        <div className="w-full h-80">
          <ResponsiveContainer width={"100%"} height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                labelLine={false}
                cx="50%"
                cy="50%"
                outerRadius={pieRadius}
                label={({ name, percent }) =>(
                  labelMobile
                  ? `${(percent * 100).toFixed(0)}%`
                  : `${name} (${(percent * 100).toFixed(0)}%)`
                )
                  
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      ),
    },
    {
      label: "Por estado",
      content: <div>Tab content 2</div>,
    },
    {
      label: "Por antiguedad",
      content: <div>Tab content 3</div>,
    },
  ];

  return (
    <div className="flex flex-col shadow border-1 border-base-200 rounded-lg p-5 gap-5 h-max w-fit">
      {/* Titulo */}
      <div className="flex items-start gap-3">
        <ChartPie size={28} className="text-base-content my-1.5" />
        <div>
          <h1 className="text-2xl font-bold text-base-content">
            Analisis de Activos
          </h1>
          <p className="text-base-content">
            Analiza los activos de tu red y su estado.
          </p>
        </div>
      </div>
      {/* Tabs */}
      <ChartTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};
