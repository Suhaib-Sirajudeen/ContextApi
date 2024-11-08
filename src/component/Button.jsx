import React from "react";
import "./Button.css";

export const Button = ({ handleCounter, children }) => {
  return (
    <div className="button-section">
      <button onClick={handleCounter} className="btn">
        {children}
      </button>
    </div>
  );
};
