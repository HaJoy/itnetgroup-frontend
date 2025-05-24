import React from "react";

export const Table = ({ arrayColumnNames, children }) => {
  return (
    <div className="overflow-x-auto border-1 rounded-lg border-base-300 my-10 max-h-3/4">
      <table className="table table-pin-rows">
        {/* head */}
        <thead>
          <tr>
            {arrayColumnNames.map((columnName, index) => (
                <th key={index}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
};
