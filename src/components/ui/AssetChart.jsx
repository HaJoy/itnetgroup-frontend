import React from "react";
import { ChartPie } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Computadores", value: 293 },
  { name: "Monitores", value: 293 },
  { name: "Software", value: 800 },
  { name: "Red", value: 50 },
  { name: "Perifericos", value: 158 },
];

const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#a78bfa", "#f87171"];

export const AssetChart = () => {
  return (
    <section className="flex justify-between">
      <div className="flex flex-col shadow border-1 border-base-200 rounded-lg p-5 gap-5">
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
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="dashboard_graphs"
            className="tab checked:text-base-content"
            aria-label="Por tipo"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {/* Pie Chart */}
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
                    outerRadius={90}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <input
            type="radio"
            name="dashboard_graphs"
            className="tab"
            aria-label="Por estado"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>

          <input
            type="radio"
            name="dashboard_graphs"
            className="tab"
            aria-label="Por antiguedad"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 3
          </div>
        </div>
      </div>
    </section>
  );
};
