import React from "react";
import "./BlurredComponent.css";
import { StaticImage } from "gatsby-plugin-image";
function BlurredComponent() {
  return (
    <div className="wrapper">
      <StaticImage
        className="bg-image"
        src="../images/blur.png"
        alt="blurred-img"
      />
      <div className="container">
        <div>
          <p className="p1">
            <svg
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="8" width="30" height="24" rx="5" fill="black" />
              <rect
                x="9.5"
                y="1.5"
                width="10"
                height="12"
                rx="2.5"
                stroke="black"
                strokeWidth="3"
              />
            </svg>{" "}
            <span>Content Locked!!</span>
          </p>
          <p className="p2">Subscribe to AryaBot Enterprise to Unlock</p>
        </div>
        <button className="button">Subscribe</button>
      </div>
    </div>
  );
}

export default BlurredComponent;
