import React from "react";
import './CSS/CompletedProgressBar.css'

export default function CompletedProcessBar({completePercent}) {
    return (
        <div id="process-bar-wrapper">
            <div className="skill-bars">
                <div className="bar">
                    <div className="info">
                        <span>Progress</span>
                    </div>
                    <div className="progress-line process-bar">
                        <span className="test-class" percent-attr={completePercent} style={{width: completePercent,}}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}