import React from "react";

export const AssetStat = ({
  icon: Icon,
  iconSize = 20,
  title,
  value,
  desc,
}) => {
  return (
    <div className="stats border-1 border-base-200 shadow hover:shadow-lg transition-shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <Icon size={iconSize} />
        </div>
        <div className="stat-title font-bold text-[15px]">{title}</div>
        <div className="stat-value text-base-content">{value}</div>
        <div className="stat-desc">{desc}</div>
      </div>
    </div>
  );
};
