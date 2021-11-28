import React from "react";
import "./CSS/CompletedProgressBar.css";

export default function CompletedProcessBar() {
  const completePercent = "100%";
  return (
    <div>
      <div class="skill-bars">
        <div class="bar">
          <div class="info fs-3 mb-3">
            <span>Progress</span>
          </div>
          <div class="progress-line d-flex justify-content-end">
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
