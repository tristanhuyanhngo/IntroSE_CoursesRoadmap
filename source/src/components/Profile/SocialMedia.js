import React from "react";
import './CSS/SocialMedia.css'

export default function SocialMediaButtons() {
    return (
        <div id="social-media-wrapper">
            <div className="container-lg">
                <div className="social-media-label-class text-dark">Social Media</div>
                
                <div className="d-flex justify-content-start">
                    <button type="button" class="btn btn-outline-dark social-media-button-class me-2">Facebook</button>
                    <button type="button" class="btn btn-outline-dark social-media-button-class mx-2">Github</button>
                    <button type="button" class="btn btn-outline-dark social-media-button-class ms-2">Youtube</button>
                </div>
            </div>
            
            
        </div>
    )
}