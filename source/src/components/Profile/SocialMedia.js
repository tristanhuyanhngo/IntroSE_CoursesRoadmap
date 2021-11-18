import React from "react";
import './CSS/SocialMedia.css'

export default function SocialMediaButtons() {
    return (
        <div id="social-media-wrapper">
            <div className="social-media-label-class">Social Media</div>
            <div class="btn-group social-media-buttons-class" role="group" aria-label="Social Media Buttons">
              <button type="button" class="btn btn-outline-light social-media-button-class">Facebook</button>
              <button type="button" class="btn btn-outline-light social-media-button-class">Github</button>
              <button type="button" class="btn btn-outline-light social-media-button-class">Youtube</button>
            </div>
        </div>
    )
}