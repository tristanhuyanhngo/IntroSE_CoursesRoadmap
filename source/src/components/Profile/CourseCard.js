import React from "react";
import './CSS/GlassCard.css'

export default function CourseCard({courseName, category}) {
    return (
        <div>
            <div className="glass-card shadow-lg border border-white">
                <h3 className="text-center fw-bold">
                    {courseName}
                </h3>

                <p className="text-center text-dark fs-6">
                    {category}
                </p>
                
            </div>
        </div>
    );
}
