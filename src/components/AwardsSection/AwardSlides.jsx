"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AwardSlides = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    vertical: false,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
  };

  return (
    <div className="slider-container mt-4 m-auto">
      <Slider {...settings}>
        <div className="relative">
          <div
            className="relative h-[50vh] md:h-[77vh]  m-auto w-[70%] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/bannerimg.jpg')" }}
          ></div>
        </div>

        <div className="relative">
          <div
            className="relative h-[50vh] md:h-[77vh] m-auto bg-cover w-[70%] bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/bannerimg.jpg')" }}
          >
            <div className="absolute  "></div>
          </div>
        </div>

        <div className="relative">
          <div
            className="relative h-[50vh] md:h-[77vh]  m-auto bg-cover w-[70%] bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/bannerimg.jpg')" }}
          >
            <div className="absolute inset-0 "></div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default AwardSlides;
