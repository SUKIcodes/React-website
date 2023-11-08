import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel infiniteLoop autoPlay interval={1000}>
        <div>
          <img
            src="https://wallpaperswide.com/download/high_tech_earth-wallpaper-2880x1800.jpg"
            alt="img1"
          />
          <p className="legend">WEB DEVELOPMENT</p>
        </div>
        <div>
          <img
            src="https://e1.pxfuel.com/desktop-wallpaper/726/357/desktop-wallpaper-sick-backgrounds-%C2%B7%E2%91%A0-crazy-full.jpg"
            alt="img1"
          />
          <p className="legend">ANDROID DEVELOPMENT</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
