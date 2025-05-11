import React from "react";

export const AssetStat = ({
  icon: Icon,
  iconSize = 20,
  iconColor = "text-primary",
  title,
  value,
  valueDesc,
}) => {
  return (
    <div className="stats border-1 border-base-200 shadow hover:shadow-lg transition-shadow">
      <div className="stat">
        <div className={`stat-figure ${iconColor}`}>
          <Icon size={iconSize} />
        </div>
        <div className="stat-title font-bold text-[15px]">{title}</div>
        <div className="stat-value text-base-content">{value}</div>
        <div className="stat-desc">
          <span
            className={
              parseInt(valueDesc) === 0
                ? "text-base-300"
                : (parseInt(valueDesc) > 0
                ? "text-green-400"
                : "text-error") + " font-bold"
            }
          >
            {valueDesc + '%'}
          </span>{" "}
          desde el mes pasado
        </div>
      </div>
    </div>
  );
};
