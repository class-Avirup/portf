import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomCarousel.css"; // Import the custom CSS file

function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ position: "relative" }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400"
            alt="Slide 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselComponent;
