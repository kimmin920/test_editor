import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import ApiImg from "./ApiImg";

export default function Gallery({ contents, styles }) {
  const { value } = contents;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: 1,
  };

  return (
    <Slider {...settings} style={styles}>
      {value.map((each) => (
        <ApiImg
          contents={each}
          styles={{
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        />
      ))}
    </Slider>
  );
}
