import React from "react";
import "./CSS/CompletedProgressBar.css";

export default function CompletedProcessBar() {
  const completePercent = "100%";
  return (
    <div>
      <div className="skill-bars">
        <div className="bar">
          <div className="info fs-3 mb-3">
            <span>Progress</span>
          </div>
          <div className="progress-line d-flex justify-content-end">
            <span
              percent-attr={completePercent}
              style={{ width: completePercent }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
